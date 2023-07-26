// Yara Ahmed (B00830192) is the author of this page

import React, { useState } from "react";
import "./css/RegistrationPage/RegistrationPage.css";
import signUpImage from "./images/signup-image.png";

const RegistrationPage = () => {
    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    // });

    // const handleUserInput = (event) => {
    //     const { name, value} = event.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     // Form validation
    //     //Ensure all fields are filled out
    //     if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
    //         alert('Please fill in all fields.');
    //         return;
    //     }

    //     // Ensure email is in proper format

    //     // Ensure password is in proper format

    //     // Ensure names are in proper format


    // };

    return(
        <body>
            <div class="main">
                <section class="signup">
                    <div class="container">
                        <div class="signup-content">
                            <div class="signup-form">
                                <h2 class="form-title">Sign up</h2>
                                <form method="POST" class="register-form" id="register-form">
                                    <div class="form-group">
                                        <label for="firstName"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="firstName" id="name" placeholder="First Name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="lastName"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="lastName" id="name" placeholder="Last Name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="email"><i class="zmdi zmdi-email"></i></label>
                                        <input type="email" name="email" id="email" placeholder="Email" />
                                    </div>
                                    <div class="form-group">
                                        <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="pass" id="pass" placeholder="Password" />
                                    </div>
                                    <div class="form-group form-button">
                                        <input type="submit" name="signup" id="signup" class="form-submit" value="Register" />
                                    </div>
                                </form>
                            </div>
                            <div class="signup-image">
                                <figure><img src={signUpImage} alt="sign up image"/></figure>
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