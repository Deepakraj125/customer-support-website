import React from 'react';
import "./footer.css"
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
      
      <div className = "copyright">© Copyright 2022 Hewlett Packard Enterprise Intern team</div>
    </div>
  )
}

export default Footer