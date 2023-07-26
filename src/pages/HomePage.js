import React from "react";
import "./css/HomePage.css";
import carWashImage2 from "./images/carwash2-unsplash.jpg";
import {Helmet} from 'react-helmet';

export default function HomePage() {
    return (
        <div className="home-page">
            <Helmet>
                <style>{'body { background-color: #F5F5F5; }'}</style>
            </Helmet>
            <div className="home-grid">
                <div className="home-container">
                    <h1>AutoCare</h1>
                    <h2>Maintainence Made Managable, <br></br> Services at Your Reach</h2>
                    <p> AutoCare is streamlining vehicle maintenance in Nova Scotia. As we
                        understand the various struggles that come with maintaining a
                        vehicle, we have created a user-friendly platform that allows you to
                        access and book locally-provided car services, while simultaneously
                        managing your vehicle’s maintenance schedule. Keep your vehicle in
                        prime condition with AutoCare.
                    </p>
                    <div className="button-container">
                        <a href="/register"><button className="join-button">Join Today</button></a>
                    </div>
                    <div className="home-page-image">
                        <img
                            src={carWashImage2}
                            alt="black car getting washed"
                            className="car-wash-image"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
