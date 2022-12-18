import './App.css';
import {useState,useEffect} from 'react'
import { Api } from './api/api.js';
function App() {
  const [user,setuser]=useState()
  useEffect(()=>{
    try{
      Api.get('/users')
      .then(({data})=>{
  console.log(data)
  setuser(data);
  
})
    }
  
    catch(err){
      console.log(err);
    }

    
  },[])
  
  return (
    <div className="App">
     { user?.map((item,key)=> <div key={item._id}><h1>cash : {item.cash} credit:{item.credit}</h1>  </div> )}
    </div>
  );
}

export default App;
