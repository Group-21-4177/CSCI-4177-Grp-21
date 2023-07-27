const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


var uuid = require('uuid');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'sql9.freemysqlhosting.net',
  user: 'sql9635361',
  port: 3306,
  password: '7mKRztMdjg',
  database: 'sql9635361'
});

conn.connect(function(err) {
if (err) throw err;
  console.log('Database is connected successfully!');
});
module.exports = conn;

const port = process.env.PORT || 5022;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/user', (req, res) => {
  const userID = req.query.id;
  const sql = 'SELECT FirstName, LastName, Email, Password, Address, DateJoined FROM Users WHERE UserID = ?';
  conn.query(sql, [userID], (err, result) => {
      if(err) { 
        throw err;
      }
      else if (result.length === 0) {
        res.status(404).send('User not found');
      }
      else {
        res.json({firstName: result[0].FirstName, lastName: result[0].LastName, email: result[0].Email, address: result[0].Address, dateJoined: result[0].DateJoined, password: result[0].Password});
      }
    })
});

app.post('/userUpdate', (req, res) => {
  const userID = req.query.id;
  const sql = 'UPDATE Users SET FirstName = ?, LastName = ?, Email = ?, Password = ?, Address = ? WHERE UserID = ?';
  const {firstName, lastName, email, password, address} = req.body;
  conn.query(sql, [firstName, lastName, email, password, address, userID], (err) => {
    if(err) {
      throw err;
    }
    else {
      res.send('User updated');
    }
  })
});

// API Endpoints for Vendor Review Table

app.get('/review', (req, res) => {
  const vendor_id = req.query.id;
  const sql = 'SELECT * FROM vendors_review WHERE vendor_id = ?';
  conn.query(sql, [vendor_id], (err, result) => {
      if(err) { 
        throw err;
      }
      else if (result.length === 0) {
        res.status(404).send('vendor not found');
      }
      else {
        const reviews = result.map(item => ({
          rating: item.rating,
          heading: item.heading,
          description: item.description
        }));
        res.json(reviews);
      }
    });
});


// Function by Yara
app.post('/api/register', async (req, res) => {
  const { FirstName, LastName, Email, Password } = req.body;

  const UserID = uuid.v4(); 

  try {

    const hashedPass = await bcrypt.hash(Password, 10);

    const sql = 'INSERT INTO Users (UserID, FirstName, LastName, Email, Password) VALUES (?, ?, ?, ?, ?)';
    
    conn.query(sql, [UserID, FirstName, LastName, Email, hashedPass], (err, result) => {
      
      if (err) {
        console.error('An error occurred when inserting user details:', err);
        res.status(500).json({ error: 'An error occurred during registration.' });
      } else {
        res.status(200).json({ message: 'Registration successful.' });
      }

    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'An error occurred during registration.' });
  }

app.post('/addReview', (req, res) => {
  console.log(req.body);
  const sql = 'INSERT INTO vendors_review (vendor_id, rating, heading, description) VALUES (?, ?, ?, ?)';
  const { vendor_id, rating, heading, description } = req.body;
  conn.query(sql, [vendor_id, rating, heading, description], (err) => {
    if(err) {
      throw err;
    }
    else {
      res.send('review added');
    }
  })
});