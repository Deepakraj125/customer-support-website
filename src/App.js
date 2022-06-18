import './App.css';
import { About } from './components/About';
// import { Navbar } from './components/Navbar';
// import Footer  from './components/Footer';
// import Contact from './components/Contact';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {BrowserRouter as Router ,Route,  Switch} from "react-router-dom";
import {useState} from "react";
import Home from './components/Home';


function App() {
   /* since this is a object thus in state we are using {} */
   const [user , setLoginUser] = useState({});
  return (
  
    <Router>
    
    <div className="App">
  
      <Switch>
      <Route exact path ="/">
        
        {user && user._id ? <Home/> : <Login setLoginUser ={setLoginUser}/>}
        
        </Route>

      <Route exact path ="/about">
        <About/>
      </Route>

      <Route exact path ="/home">
        <Home/>
      </Route>

      <Route exact path ="/login">
        <Login setLoginUser ={setLoginUser}/>
      </Route>

      <Route exact path ="/register">
        <Register/>
      </Route>

      </Switch>
      
    </div>
    </Router>

  );
}

export default App;
