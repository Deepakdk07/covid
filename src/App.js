import './App.css';

import axios from "axios";
import { useMemo, useState } from 'react';
 import Select from 'react-select'
import countryList from 'react-select-country-list'

function App() {
  const [data, setData] = useState({})
  // const [country, setCountry] = useState('')
  const [show, setShow] = useState(false)
  // const [message, setMessage] = useState(false)
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
    <h1>Covid Cases Info App</h1>
    {data.lastUpdate ? <p>Last updated : {date.toLocaleDateString()} {date.toLocaleTimeString()}</p> : null}
    
    { !show ?
    <div className = "input">
    <p>{value.label}</p>
    <Select options={choice} value={value} onChange={(value) => setValue(value)} />
    <button onClick = {onSubmit}>Get data</button>
    </div>
     :
     <div className = "container">
    <div style = {{width:"80%"}}>
    <p>{value.label}</p>
    <Select styles = {{width :"100px"}} options={choice} value={value} onChange={(value) => setValue(value)} />
    <button onClick = {onSubmit}>Get data</button>
    </div>
    <h1>{ data && data.country} ({data.code && data.code})</h1>
    <p>Deaths : {data.deaths && data.deaths}</p>
    <p>Confirmed Cases : {data.confirmed && data.confirmed}</p>
    <p>Critical : {data.critical && data.critical}</p>
    <p>Total Recovered Cases : {data.recovered && data.recovered}</p>
    <p>Recovery Rate : {(data.recovered / data.confirmed * 100).toFixed(2)} %</p>
    <p>Death Rate : {(data.deaths / data.confirmed * 100).toFixed(2)} %</p>
    <p>Critical Rate : {(data.critical / data.confirmed * 100).toFixed(2)} %</p>
    </div>
    }
    

    
    

    
     
    </div>
  );
}

export default App;
