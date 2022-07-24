import React,{useState} from 'react'
import './ticket.css'
import axios from 'axios'
import { useHistory } from "react-router-dom";



const Ticket = () => {

    const history = useHistory();
    const [ticket, setTicket] =useState({
        name:"", email:"", query:""
    });


    let name, value;
    const handleChange =(e) =>{
        
        name= e.target.name;
        value = e.target.value;
        // console.log(name);
        // console.log(value);


        setTicket({...ticket, [name]:value});
    }

    const createTicket = (e) =>{
    
        const {name, email, query} = ticket;

        if(name && email && query){
            axios.post("http://localhost:9002/ticket", ticket)
            .then(res => {
              alert(res.data.message)
              history.push("/about")
              })  
          }
          else{
            alert("invalid inputs")
          }

    }

  return (
    <div className='ticket-form'>
    <input type='text' name ="name" value={ticket.name} onChange={handleChange} placeholder ='Enter your name' ></input>
    <input type='text' name ="email" value = {ticket.email} onChange={handleChange}placeholder ='Enter your email' ></input>
    <textarea type='text' name ="query" value ={ticket.query} onChange={handleChange} placeholder ='Please enter your query' ></textarea>
    {/* <div>
    <label>Select a priority :</label>
    <select id="priority" defaultValue="Select priority">
        <option value="normal">Normal</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      </div> */}
    
    

   

    <div className='btn' onClick={createTicket}>Submit</div>
    
</div>
  )
}

export default Ticket