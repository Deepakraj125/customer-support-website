import React from 'react';
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div>
          <a href ='#'>Product support</a>
          <a href='#'>Website</a>
          <a href='#'>Facebook</a>
          <a href='#'>Twitter</a>
          <a href='#'>Instagram</a>
      </div>
      <div className="forms">
          <form>
          Contact Us:
          <div className='text'>
          <input type="email" className="form-control" placeholder="Enter email"></input>
          </div>
          <div className='text'>
          <textarea className="form-control" placeholder="Message"></textarea>
          </div>
          <button type="button" className="btn">Send</button>
          </form>
      </div>
      <div className = "copyright">© Copyright 2022 Hewlett Packard Enterprise Intern team</div>
    </div>
  )
}

export default Footer