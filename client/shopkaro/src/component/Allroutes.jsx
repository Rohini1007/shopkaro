import React from 'react'
import{Routes,Route} from "react-router-dom"
import Home from './Home'
import Womens from './Womens'
import Kids from './Kids'
import Mens from './Mens'
import Electrnoics from './Electronics'
export default function Allroutes() {
  return (
    <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/womens' element={<Womens/>}/>
  <Route path='/mens' element={<Mens/>}/>
  <Route path='/kids' element={<Kids/>}/>
  <Route path='/electronics' element={<Electrnoics/>}/>



    </Routes>
  )
}
