import React from "react";
import "./css/ContactPage.css";
import mailIcon from "./icons/mail_icon_512.png";
import internetIcon from "./icons/internet_icon_512.png";
import callIcon from "./icons/call_icon_512.png";
import locationIcon from "./icons/security-pin_icon_512.png";
import carWashImage1 from "./images/carwash1-unsplash.jpeg";

export default class ContactPage extends React.Component {
  render() {
    return (
      <div className="contact-page">
        <div className="contact-grid">
          <div className="contact-item">
            <img
              className="contact-page-icon"
              src={locationIcon}
              alt="Location Pin Icon"
            ></img>
            <h2>Address</h2>
            <p style={{ color: '#979997' }}>6299 South St, Halifax, NS B3H 4R2</p>
            <p></p>
          </div>

          <div className="contact-item">
            <img
              className="contact-page-icon"
              src={callIcon}
              alt="Phone Icon"
            ></img>

            <h2>Phone</h2>
            <p style={{ color: '#0066B3' }}>+1 (902) 440-1234</p>
          </div>

          <div className="contact-item">
            <img
              className="contact-page-icon"
              src={mailIcon}
              alt="Email Icon"
            ></img>
            <h2>Email</h2>
            <p style={{ color: '#0066B3' }}>info@autocare.com</p>
          </div>

          <div className="contact-item">
            <img
              className="contact-page-icon"
              src={internetIcon}
              alt="Internet Icon"
            ></img>
            <h2>Website</h2>
            <p style={{ color: '#0066B3' }}>autocare.com</p>
          </div>
        </div>

        <div className="contact-us-grid">
          <div className="contact-page-form">
            <div className="contact-page-form-heading">Contact Us</div>
            <form>
              <h5>FULL NAME</h5>
              <input type="text" placeholder="Name" />

              <h5>EMAIL ADDRESS</h5>
              <input type="email" placeholder="Email" />

              <h5>SUBJECT</h5>
              <input type="text" placeholder="Subject" />

              <h5>MESSAGE</h5>
              <textarea placeholder="Message"></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="contact-page-image">
            <img
              src={carWashImage1}
              alt="black car getting washed"
              className="car-wash-image"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
