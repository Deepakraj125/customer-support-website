import React, {useState} from 'react'
import  './login.css'
import axios from "axios"
import { useHistory} from "react-router-dom";



const AdminLogin = ({setLoginUser}) => {
 
  const history = useHistory();

  const [user, setUser] = useState({
    email:"",
    password:""
  })
  
 

  const handleChange = e =>{
    const {name, value} = e.target;

    setUser(
      {
        ...user, // use of spread operator to keep the values intact which are not changed
        [name]: value
      }
    )

    console.log(name.value);
  }

  const login = () => {
    axios.post("http://localhost:9002/login", user)
    .then(res => {  
      alert(res.data.message)
      setLoginUser(res.data.user)
        history.push("/dashboard")   
    })
  }



  return (
    <div className='login'>
        <h1>Admin Login Page</h1>

        <input type='text'  name ="email" placeholder ='Enter your email' onChange={handleChange} value={user.name}></input>
        <input type='password'  name ="password"  placeholder ='Enter your password' onChange={handleChange} value={user.password}></input>
        <div className='btn' onClick={login}>Sign In</div>

        

    </div>
  )
}

export default AdminLogin