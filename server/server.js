const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
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

app.listen(5008, () => {
  console.log('Server running.');
});

app.get('/user', (req, res) => {
  const userID = req.query.id;
  const sql = 'SELECT FirstName, LastName, Email, Password, Address FROM Users WHERE UserID = ?';
  conn.query(sql, [userID], (err, result) => {
      if(err) { 
        throw err;
      }
      else if (result.length === 0) {
        res.status(404).send('User not found');
      }
      else {
        res.json({firstName: result[0].FirstName, lastName: result[0].LastName, email: result[0].Email, address: result[0].Address, password: result[0].Password});
      }
    });
});


// API Endpoints for Vendor Review Tables

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