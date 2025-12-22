import React from 'react'
import logo from "../images/logo.png"
import { Link } from 'react-router-dom'

let imgstyle={
 height:"50px",
 width:"100px",
}
let substyle={
  fontSize:"20px",
  fontFamily:"gilroy",
  color:"white",
  textDecoration:"none"
}

export default function Navbar() {
  return (
    <div style={{
      width:"100%",
      height:"50px",
      border:"1px solid black",
      boxShadow:"box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px",
      justifyContent:"center",
      display:"flex",
      alignItems:"center",
      gap:"50px",
      backgroundColor:"#1A48A3",
      color:"white"
    }}>
      <Link to="/" style={substyle}>  <img style={imgstyle} src={logo} alt="" srcset="" /> </Link>
    
      <Link to="/" style={substyle}>home </Link>
      <Link to="/mens" style={substyle}>mens</Link>
      <Link to="/womens" style={substyle}>womens</Link>
      <Link to="/kids" style={substyle}>kids</Link>
      <Link to="/electrnoics" style={substyle}>electrnoics</Link>
    </div>
  )
}
