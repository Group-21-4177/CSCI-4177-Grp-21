import React from 'react';
import './FAQ.css';
import {Helmet} from 'react-helmet';

function FAQ() {
    return (
        <div className='container'>
            <Helmet>
                <style>{'body { background-color: #F5F5F5; }'}</style>
            </Helmet>
            <h1>Frequently Asked Questions</h1>
            <p>Below you'll find answers to some of the most common questions we get asked. If you can't find what you're looking for, just send us a message!</p>
            <div className='grid'>
                <div className='item'>
                    <h3>How does AutoCare work?</h3>
                    <p>When you sign up, we analyze your provided information such as location and vehicle model to match you with suitable service providers.</p>
                </div>
                <div className='item'>
                    <h3>Are the service providers reliable?</h3>
                    <p>All service providers listed on our website go through a intensive background check process to ensure they meet the standards as well as our customer's expectations.</p>
                </div>
                <div className='item'>
                    <h3>Is my personal data secure?</h3>
                    <p><strong>Absolutely!</strong> We work with trusted service providers in the area and make use of industry-standard security measures to ensure your data is safe and secure.</p>
                </div>
                <div className='item'>
                    <h3>How do I update my address?</h3>
                    <p>Just head on over to your profile page and click on 'Edit Profile' to change your address and other information. </p>
                </div>
                <div className='item'>
                    <h3>Can I request a refund after an order is complete?</h3>
                    <p><strong>Of course!</strong> If you are dissatisfied with the service, you can request a refund anytime via the contact form.</p>
                </div>
                <div className='item'>
                    <h3>This sounds great! How do I get started?</h3>
                    <p>It's simple. Just sign up for an account, create a profile, and choose from our wide range of products and services, delivered right at your doorstep!</p>
                </div>
            </div>
        </div>
    )
}

export default FAQ;
