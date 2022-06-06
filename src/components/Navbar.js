import "./navbar.css";

// using named export 
export function Navbar(props){

    return (
        <div className='nav'>
        <label className='logo'>HPE</label>    
        <ul className='nav-links'>
          <li> <a href ="#"> Home</a> </li>
          <li> <a href =""> About</a> </li>
          <li> <a href ="#"> Services</a> </li>
        </ul>
        <a href ="#"> <button>contact</button></a> 
    </div>
        
        
    )
};
