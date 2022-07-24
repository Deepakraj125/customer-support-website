import React from 'react'
import { Navbar } from './Navbar';
import Footer from './Footer';
import './home.css'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='title'> <h1>An AI based Bot for Enterprise Customer Support</h1></div>
        <div className="about"> 
        <h1> Features of the Bot</h1>
        <p>This chatbot will allow the user to choose the preferred language through which the user wants to ask the query in.</p>
        <p>The chatbot will try to answer the general queries using inputs as sentences, phrases or questions.</p>
        <p>A ticket will be generated for the specific queries which won’t get resolved by the chatbot. </p>
        <p>If the user doesn’t feel satisfied with the answers provided by the chatbot, the user itself can generate a ticket using an option.</p>
        <p>The ticket will be accessed by the admin or the employee of the HPE.</p>
        </div>
        <Footer/>
    </div>
  )
}

export default Home