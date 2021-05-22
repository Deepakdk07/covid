import axios from 'axios'
import React, { useMemo, useState } from 'react'
import countryList from 'react-select-country-list'
import Select from 'react-select'
import { Link } from 'react-router-dom'

const Worlddata = () => {
    const [data, setData] = useState({})
    const [show, setShow] = useState(false)
   const [value, setValue] = useState('')
    const choice = useMemo(() => countryList().getData(), [])
  
  
  
  
    const onSubmit = () => {
      setShow(true)
      // console.log(value)
      const options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/country/code',
        params: {code: value.value},
        headers: {
          'x-rapidapi-key': 'eb284b4221msh38f0d8939a30024p123f7ejsn503522f5d226',
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        // console.log(response.data[0]);
        setData(response.data[0]);
      }).catch(function (error) {
        console.error(error);
      });
    }
    
    
  
    const date = new Date(data && data.lastUpdate) 
    // console.log(date.toLocaleDateString())
   
  
    return (
        <div className="app">
        
    <h1>World Covid Data</h1>
    <Link to = "/india" style = {{textDecoration :"none", color: "white"}}><p>Switch To Indian Version</p></Link>
        <Link to = "/india" style = {{textDecoration :"none", color: "white",marginBottom : "50px"}}><p>Home</p></Link>
    
    { !show ?
    <div className = "input">
    {value ? <p>{value.label}</p> : <p>Select the Country</p>}
    <Select options={choice} value={value} onChange={(value) => setValue(value)} important />
    {value ? <button onClick = {onSubmit}>Get data</button> : null}
    </div>
     :
     <div className = "container">
    <div style = {{width:"80%"}}>
    <p>{data.lastUpdate ? <p>Last updated : {date.toLocaleDateString()} {date.toLocaleTimeString()}</p> : null}</p>
    <p>{value.label}</p>
    <Select styles = {{width :"100px"}} options={choice} value={value} onChange={(value) => setValue(value)} />
    <button onClick = {onSubmit}>Get data</button>
    </div>
    {
      data.country ?  <div><h1>{ data && data.country} ({data.code && data.code})</h1>
    <p>Deaths : {data.deaths && data.deaths}</p>
    <p>Confirmed Cases : {data.confirmed && data.confirmed}</p>
    <p>Critical : {data.critical && data.critical}</p>
    <p>Total Recovered Cases : {data.recovered && data.recovered}</p>
    <p>Recovery Rate : {(data.recovered / data.confirmed * 100).toFixed(2)} %</p>
    <p>Death Rate : {(data.deaths / data.confirmed * 100).toFixed(2)} %</p>
    <p>Critical Rate : {(data.critical / data.confirmed * 100).toFixed(2)} %</p>
    </div> : 
    <p>Loading....</p>
    }
   </div>
    } 
    </div>
    )
}

export default Worlddata
