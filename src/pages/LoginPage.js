// Yara Ahmed (B00830192) is the author of this page

import React, { useState } from "react";
import "./css/RegistrationPage/RegistrationPage.css";
import logInImage from "./images/login-image.png";

const LoginPage = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    return (
        <section class="sign-in">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src={logInImage} alt="sing up image"/></figure>
                        <a href="/register" class="signup-image-link">Create an account</a>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Log In</h2>
                        <form method="POST" class="register-form" id="login-form">
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Email"/>
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password"/>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" value="Log in"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>  
        </section>      
    );

};

export default LoginPage;
