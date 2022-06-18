import React, {useState} from 'react'
import  './login.css'
import axios from "axios"
import { useHistory} from "react-router-dom";



const Login = ({setLoginUser}) => {
 
  const history = useHistory();

  const [user, setUser] = useState({
    email:"",
    password:""
  })
  
  // const [name, setName] = useState();
  // const [password, setPassword] = useState();


  // const handleChange = (e) =>{
  //   // creating the name and value of the events changed
  //   // setName(e.target.value);
  //   // console.log(name);
  // }

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
        history.push("/")   
    })
  }



  return (
    <div className='login'>
        <h1>Login Page</h1>

        <input type='text'  name ="email" placeholder ='Enter your email' onChange={handleChange} value={user.name}></input>
        <input type='password'  name ="password"  placeholder ='Enter your password' onChange={handleChange} value={user.password}></input>
        <div className='btn' onClick={login}>SIgn in</div>
        <div>Or</div>
        <div className='btn' onClick ={ () => history.push("/register")} >SignUp</div>

    </div>
  )
}

export default Login