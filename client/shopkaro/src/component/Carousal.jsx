import React, { useEffect, useRef, useState } from 'react'

export default function Carousal({imglink}) {


let [curr , setCurr]= useState(0)
let timer=useRef(null)

useEffect(()=>{

    setTimer()

},[curr])

function setTimer(){
    if(timer.current==null){
        timer.current=setInterval(()=>{
        setCurr((prev)=>{
      let val=prev>=imglink.length-1?0:prev+1
      return val
        })
        },2000)
    }
    else{
        return
    }
}

function next(){
   let val=curr>=imglink.length-1? 0 : curr+1
    setCurr(val)
}
function prev(){
    let val=curr<0 ? imglink.length-1: curr-1
    setCurr(val)
}

  return (
    <div style={{
        width:"100%",
        border:"1px solid  black",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"3%"
    }}>
        <button onClick={prev}>prev</button>
       
            <img style={{
                width:"90%"
            }} src={imglink[curr]} alt="" />
       
        <button onClick={next}>next</button>
    </div>
  )
}
