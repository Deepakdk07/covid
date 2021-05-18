import React, { useEffect, useState } from "react";
import "./App.css";
import { datastate } from "./IndianStates";


const Card = ({data, stateCode, input}) => {
  const [state, setstate] = useState()
  
  useEffect(() => {
   Object.keys(datastate).forEach(key => {
     if(key === stateCode){
      if(key in datastate) {      
        setstate(datastate[key]);   
     }
     }
   })

  }
  ,[stateCode]
  )



  

    
  return (

    
    <div>
  
    {
      stateCode[0] === input  ?
      <div>
      
      <h1>{state} ({stateCode})</h1>
     {data.delta ?  <p>Today's Confirmed : {data.delta && data.delta.confirmed}</p> : null }
     {data.delta ?  <p>Today's deaths : {data.delta && data.delta.deceased}</p> : null }
     {data.delta ?  <p>Today's recovered : {data.delta && data.delta.recovered}</p> : null }
     {data.delta ?  <p>Today's recovery : {data.delta && data.delta.recovered}</p> : null }
      <p>Total Confirmed Cases  : {data.total && data.total.confirmed}</p>
      <p>Total Deaths Recorded : {data.total && data.total.deceased}</p>
      <p>Total Recovered Patients : {data.total && data.total.recovered}</p>
      <p>Total Tested Person : {data.total && data.total.tested}</p>
      <p>Total confirmed cases Rate : {(data.total && data.total.confirmed/data.total.tested * 100).toFixed(2)} %</p>
      <p>Total Vaccinated : {data.total && data.total.vaccinated}</p>
      {/* <hr /> */}
     </div>
        : null
    }
    
    
    </div>
  );
};

export default Card;
