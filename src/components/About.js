import React from 'react'
import { Navbar } from './Navbar';
import Footer from './Footer';
import  './home.css'
// import Bot from './Bot';
// import Slider from './Slider'
// import { SliderData } from './SliderData';

// import {BrowserRouter as Router, Link} from 'react-router-dom';

export const About = () => {
  return (

    <div>
    <Navbar />
    <div className='title'> <h1>An AI based Bot for Enterprise Customer Support</h1></div>
    
    <div className="container">

      {/* <Slider slides = {SliderData}/> */}
      <div className='bg'> </div>
        <div className="about">
          <h1>Purpose of Chatbot</h1>
            <p>Creating a bot, that could create responses based on the queries by the user/customer and also schedule a ticket for the further queries.</p>
        </div>

        <div className="system">
          <h1>Proposed System</h1>
        <p>A Chatbot to engage with customers to create personalized brand experiences that increases customer acquisition, conversion, retention, and loyalty. </p>
        <p>It also has the power to extend beyond the typical inbound customer service scenarios to engage across multiple touchpoints a cross the customer’s lifecycle, transcending traditional functional silos.</p>
        </div>
        
        
    </div>
    
    <Footer/>
    </div>
   
  )
}
