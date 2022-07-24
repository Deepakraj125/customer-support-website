import React, {useState} from 'react'
import './dashboard.css'
// import Footer from './Footer';
import { Navbar } from './Navbar';
import axios from 'axios'


const Dashboard = () => {
   
    // useEffect(() =>{
    //     fetch("/dashboard").then(res =>{
    //         if(res.ok){
    //             return res.json()
                
    //         }
            
    //     }).then(jsonRes => setDatas(jsonRes));

       
    // });

        const [data, setData] = useState([
            {
                name:'',
                email:'',
                query:' '
            }
        ]);

        axios.get(`http://localhost:9002/dashboard`)
        .then(res => {
            const person = res.data;
            setData(person)
        })


        const deleteQuery = async (id) => {
          try{
            await axios.delete(`http://localhost:9002/dashboard/${id}`)
                  
          }
          catch(err)
          {
            console.log(id)
            console.log("err is :"+err);
          }
          
        } 

  return (
   <>
   <Navbar/>
   
    <div className="entry">
      <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email ID</th>
      <th scope="col">Query</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.query}</td>
              <td><button onClick={() => deleteQuery(val._id)}>Delete</button></td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default Dashboard