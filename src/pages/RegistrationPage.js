// Yara Ahmed (B00830192) is the author of this page

import React, { useState} from "react";
import "./css/RegistrationPage.css";
import signUpImage from "./images/signup-image.png";

const RegistrationPage = () => {
    
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(fName, lName, email, password));
    }
    
    const validate = (fName, lName, email, password) => {
        const errors = {}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const alphaRegex = /^[A-Za-z]+$/;
        const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;

        if (!fName) {
            errors.fName = "First Name is required!";
        } else if (!alphaRegex.test(fName)) {
            errors.fName = "First Name must contain alphabets only!";
        }
        if (!lName) {
            errors.lName = "Last Name is required!";
        } else if (!alphaRegex.test(lName)) {
            errors.lName = "Last name must contain alphabets only!";
        }
        if (!email) {
            errors.email = "Email is required!";
        } else if (!emailRegex.test(email)) {
            errors.email = "This is an invalid email format!";
        }
        if (!password) {
            errors.password = "Password is required!";
        } else if (!passwordRegex.test(password)) {
            errors.password = "Password must contain at least 1 alphabet, 1 number, 1 special character, and 1 upper case letter.";
        }
        return errors;

    }

    return(
        <body id="registerBody">
            <div class="main">
                <section class="signup">
                    <div class="container">
                        <div class="signup-content">
                            <div class="signup-form">
                                <h2 class="form-title">Sign up</h2>
                                <form onSubmit={handleSubmit} method="POST" class="register-form" id="register-form">
                                    
                                    <div class="form-group">
                                        <label for="firstName"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                        <input value={fName} type={'text'} onChange={(e) => setfName(e.target.value)} name="firstName" id="firstName" placeholder="First Name" />
                                        {formErrors.fName && <span className="error">{formErrors.fName}</span>}
                                    </div>


                                    <div class="form-group">
                                        <label for="lastName"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                        <input value={lName} type={'text'} onChange={(e) => setlName(e.target.value)} name="lastName" id="lastName" placeholder="Last Name" />
                                        {formErrors.lName && <span className="error">{formErrors.lName}</span>}
                                    </div>


                                    <div class="form-group">
                                        <label for="email"><i class="zmdi zmdi-email"></i></label>
                                        <input value={email} type={'text'} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="Email" />
                                        {formErrors.email && <span className="error">{formErrors.email}</span>}
                                    </div>


                                    <div class="form-group">
                                        <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="pass" id="pass" placeholder="Password" />
                                        {formErrors.password && <span className="error">{formErrors.password}</span>}
                                    </div>


                                    <div class="form-group form-button">
                                        <input type="submit" name="signup" id="signup" class="form-submit" value="Register" />
                                    </div>


                                </form>
                            </div>
                            <div class="signup-image">
                                <figure><img src={signUpImage} alt="blue-vintage-car"/></figure>
                                <a href="/login" class="signup-image-link">I am already a member</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </body>
    );
        
};

export default RegistrationPage;