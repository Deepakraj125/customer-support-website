import { Link } from "react-router-dom";
import "./navbar.css";
import { useHistory} from "react-router-dom";

// using named export 
export function Navbar(setLoginUser){

  const history = useHistory();
    return (
        <div className='nav'>
        <button className='logo' onClick={ () => history.push("/home")}>HPE</button>    
        
        <ul className='nav-links'>
          <li> <Link to ="/home" > Home</Link> </li>
          <li> <Link to ="/about" > About</Link> </li>
          {/* <li> <Link to ="/contact" > contact</Link> </li> */}
        </ul>
        <Link to ="/login"> <button  onClick={ () => setLoginUser()}>Sign Out</button></Link> 

    </div>
        
        
    )
};
