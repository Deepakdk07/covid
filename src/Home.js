import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Home = () => {
    return (
        <div className = "app">
        <h1 style = {{marginBottom : "50px"}}>Covid Data App</h1>
        <div className = "container"><p>To view World Data :</p>
        <Link to = "/world"><button>World Data</button></Link>
        <p>To view India Data :</p>
        <Link to = "/india"><button>India Data</button></Link>
            
        </div>
        </div>
    )
}

export default Home
