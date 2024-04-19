import { Route, Routes } from "react-router-dom";
import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from "./components/Home"
import Footer from "./components/Footer"
import About from "./components/About"
import Contact from "./components/Contact";

import './App.css'

function App() {
  /* const [count, setCount] = useState(0)
  <button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button> */

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/about' element={<About/>}/> 
      <Route path='/contact' element={<Contact/>}/> 
    </Routes >
    <Footer/>
    </>
  )
}

export default App
