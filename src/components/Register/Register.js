import axios from 'axios'
import React, {useState}from 'react'
import { useHistory } from "react-router-dom";
import './register.css'

// import axios from 'axios'

const Register = () => {

  const history = useHistory();

  const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
    repassword:""

  })

  const handleChange = e =>{
    const {name, value} = e.target;

    setUser(
      {
        ...user, // use of spread operator to keep the values intact which are not changed
        [name]: value
      }
    )
  }

  const  register = () => {
    const {name, email, password,repassword} = user

    if(name && email && password &&(repassword === password)){
      axios.post("http://localhost:9002/register", user)
      .then(res => {
        alert(res.data.message)
        history.push("/login")
        })  
    }
    else{
      alert("invalid inputs")
    }
    
  }

  

  return (
    <div className='register'>
    <h1>Register Page</h1>

    <input type='text' name ="name" value={user.name} placeholder ='Enter your name' onChange={handleChange}></input>
    <input type='text' name ="email" value={user.email} placeholder ='Enter your email' onChange={handleChange}></input>
    <input type='password' name ="password" value={user.password} placeholder ='Enter your password' onChange={handleChange}></input>
    <input type='password' name ="repassword" value={user.repassword} placeholder ='Re-enter password' onChange={handleChange}></input>

    <div className='btn' onClick={register}>SignUp</div>
    {/* <div>Or</div> */}
    <div className='btn' onClick={() => history.push("/login")} >Sign in</div>


</div>
  )
}

export default Register