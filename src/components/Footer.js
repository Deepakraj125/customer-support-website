import React from 'react';
import "./footer.css"
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
  return (
    <div className="footer">
      <div>
          {/* <a href ='https://www.hpe.com/in/en/products.html' target="_blank">Products</a>
          <a href='https://www.hpe.com/in/en/home.html' target="_blank">Website</a> */}
          <a href='https://www.facebook.com/HewlettPackardEnterprise/' target="_blank"> <FacebookIcon/> </a>
          <a href='https://twitter.com/hpe' target="_blank"> <TwitterIcon/></a>
          <a href='https://www.linkedin.com/company/hewlett-packard-enterprise' target="_blank"> <LinkedInIcon/></a> 
          <button ><Link to ="/ticket" > Raise a query</Link></button> 
      </div>
     
      <div className = "copyright">© Copyright 2022 Hewlett Packard Enterprise Intern team</div>
    </div>
  )
}

export default Footer