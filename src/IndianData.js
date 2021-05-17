import axios from 'axios'
// import { set } from 'mongoose'
import React, { useEffect, useState } from 'react'
import Card from './Card'
// import states from './states'
// import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { Link } from 'react-router-dom';

const IndianData = () => {
    const [data, setData] = useState({})
    // const [error, setError] = useState({})
    const [input, setInput] = useState()

    useEffect(() =>{
      // const click = () => {
     axios.get('https://api.covid19india.org/v4/min/data.min.json').then(data => 
    setData(data.data)).catch(error => console.log(error.message)) 
    // }
    },[])
    
  
  
    return (
        <div className = "app">
      

        <h1 >Indian Covid Data Info App</h1>  
        <Link to = "/world" style = {{textDecoration :"none", color: "wheat"}}><p>Switch To World Version</p></Link>
        <Link to = "/" style = {{textDecoration :"none", color: "wheat",marginBottom : "50px"}}><p>Home</p></Link>
        <div className = "container">
        <p>Enter the First letter of Your state</p>
        <input type = "text" value = {input} onChange = {(e) => setInput(e.target.value.toUpperCase())} />
        
   
        {
          Object.entries(data).map((t,k) => 
           <Card key = {t[0]} stateCode = {t[0]}  data = {t[1]} input = {input} /> 
        
          )     
        }
        
        </div>
        </div>
    )
}

export default IndianData
