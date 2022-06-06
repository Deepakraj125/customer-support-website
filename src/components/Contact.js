import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <div>
        <div className="forms">
            <form>
                <div className='greet'>
                    Please write your suggestions and issues. We will be more than happy to help you !!!
                </div>
            
                <div className='con'>
                    <div className='mail'>
                    <input type="email"  placeholder="Enter email"></input>
                    </div>
                    <div className='message'>
                    <textarea  placeholder="Message"></textarea>
                    </div>
                    <button type="button" className="btn">Send</button>
                    
                </div>
            </form>
      </div>
    </div>
  )
}

export default Contact