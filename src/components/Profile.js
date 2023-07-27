import React from 'react';
import {useState, useEffect} from 'react';
import './Profile.css';
import axios from 'axios';
import {Helmet} from 'react-helmet';

const userId = 1;

function Profile() {
    const [firstName, setFirstName] = useState('...');
    const [lastName, setLastName] = useState('...');
    const [email, setEmail] = useState('...');
    const [password, setPassword] = useState('...');
    const [address, setAddress] = useState('...');
    const [dateJoined, setDateJoined] = useState('...');
    const [editFirstName, setEditFirstName] = useState('...');
    const [editLastName, setEditLastName] = useState('...');
    const [editEmail, setEditEmail] = useState('...');
    const [editPassword, setEditPassword] = useState('...');
    const [editAddress, setEditAddress] = useState('...');
    const [edit, setEdit] = useState(false);

    var hiddenPassword = password.replace(/./g, '*');

    useEffect(() => {
        axios.get(`https://csci-4177-grp-21.onrender.com/user?id=${userId}`)
            .then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
                setPassword(response.data.password);
                setAddress(response.data.address);
                setDateJoined(response.data.dateJoined);
                setEditFirstName(response.data.firstName);
                setEditLastName(response.data.lastName);
                setEditEmail(response.data.email);
                setEditPassword(response.data.password);
                setEditAddress(response.data.address);
            })
            .catch((error) => {
                console.log(`Error: ${error}`);
            })
    }, []);

    const editForm = () => {
        const editUser = {
            firstName: editFirstName,
            lastName: editLastName,
            email: editEmail,
            password: editPassword,
            address: editAddress
        };
        axios.post(`https://csci-4177-grp-21.onrender.com/userUpdate?id=${userId}`, editUser)
            .then(() => {
                setFirstName(editFirstName);
                setLastName(editLastName);
                setEmail(editEmail);
                setAddress(editAddress);
                setPassword(editPassword);
                setEdit(false);
            });
    };

    return (
        <div className='container'>
            <Helmet>
                <style>{'body { background-color: #F5F5F5; }'}</style>
            </Helmet>
            <h1>Profile</h1>
            <h3>Hello there!</h3>
            <div className='grid'>
                <div>
                    <h2>You</h2>
                    <img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" alt="Profile" className="profile-image"></img>
                    {
                        edit
                            ? <div>
                                First Name: <input value={editFirstName} onChange={e => setEditFirstName(e.target.value)} />
                                <br/>Last Name: <input value={editLastName} onChange={e => setEditLastName(e.target.value)} />
                                <br/>Email: <input value={editEmail} onChange={e => setEditEmail(e.target.value)} />
                                <br/>Address: <input value={editAddress} onChange={e => setEditAddress(e.target.value)} />
                                <br/>Password: <input value={editPassword} type="password" onChange={e => setEditPassword(e.target.value)} placeholder="Enter new password."/><br/>
                                <br/><button onClick={editForm}>Save Changes</button>
                            </div>
                    : <h3>{firstName} {lastName}</h3>
                    }
                    <br/><button onClick={() => setEdit(!edit)}>{edit ? 'Cancel' : 'Edit Profile'}</button>
                </div>
                <div>
                    <h2>Details</h2>
                    <p><strong-1>Email:</strong-1> {email}</p>
                    <p><strong-1>Address:</strong-1> {address}</p>
                    <p><strong-1>Password:</strong-1> {hiddenPassword}</p>
                    <p><strong-1>Date Joined:</strong-1> {dateJoined}</p>
                </div>
                <div>
                    <h2>Vehicles</h2>
                    <img src="https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=980:*" alt="Vehicle 1" className="vehicle-image"></img>
                    <br/><img src="https://hips.hearstapps.com/hmg-prod/images/2019-mercedes-benz-e-class-coupe-1548703839.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=980:*" alt="Vehicle 2" className="vehicle-image"></img>
                    <br/><button>Edit Vehicles</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;
