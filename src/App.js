// import logo from './logo.svg';
import React,{useState} from 'react'

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert  from './components/Alert';
import About from './components/About';
// import { Route } from "react-router";

// import {
//   BrowserRouter as Router,
//    Route,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light') // wheather dark mode is enable or not;
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
   setAlert({
    msg: message,
    type : type
   })
   setTimeout(() => {
    setAlert(null)
   }, 1500);
  }
const [btn1,setbtnName] = useState('success');
  const toggleMode = ()=>{
    if(mode === 'dark'){
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert  ("light mode is enable","success");
    setbtnName('success')
  }
    else{
    setMode('dark')
    document.body.style.backgroundColor='#343a40'
    setbtnName('dark')
    showAlert  ("Dark mode is enable","success");
    
  }}
  const toggle2Mode = ()=>{
    if(mode === 'dark'){
    document.body.style.backgroundColor='#071952'
    showAlert  ("Blue mode is enable","success");
    setbtnName('primary')
  }
    else{
      setMode('dark')
   document.body.style.backgroundColor='#071952'
   showAlert  ("Blue mode is enable","success");
   setbtnName('primary')
    
  }}
  const toggle3Mode = ()=>{
    if(mode === 'dark'){
    document.body.style.backgroundColor='#B33030'
    showAlert  ("Red mode is enable","success");
    setbtnName('danger')
  }
    else{
      setMode('dark')
   document.body.style.backgroundColor='#B33030'
   showAlert  ("Red mode is enable","success");
   setbtnName('danger')
    
  }}
  const toggle4Mode = ()=>{
    if(mode === 'dark'){
    document.body.style.backgroundColor='#F1C93B'
    showAlert  ("Yellow mode is enable","success");
    setbtnName('warning')
  }
    else{
      setMode('dark')
   document.body.style.backgroundColor='#F1C93B'
   showAlert  ("Yellow mode is enable","success");
   setbtnName('warning')
  }}
  const toggle5Mode = ()=>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert  ("Light mode is enable","success");
      setbtnName('success')
    }
      else{
      setMode('dark')
      document.body.style.backgroundColor='#343a40'
      showAlert  ("Dark mode is enable","success");
      setbtnName('dark')

    }}
  const toggle6Mode = ()=>{
    if(mode === 'dark'){
    document.body.style.backgroundColor='#E966A0'
    showAlert  ("Pink mode is enable","success");
    setbtnName('secondary')
  }
    else{
      setMode('dark')
   document.body.style.backgroundColor='#E966A0'
   setbtnName('secondary')
   showAlert  ("Pink mode is enable","success");
  }}
  return (
 <>
 {/* <Router> */}
 <Navbar tittle = "textutils" mode = {mode}   toggleMode={toggleMode} toggle2Mode={toggle2Mode} toggle3Mode={toggle3Mode} toggle4Mode={toggle4Mode} toggle5Mode={toggle5Mode} toggle6Mode={toggle6Mode} aboutUs = " about textUtils"/>
 <Alert alert={alert}/>
 <div className="container">
 {/* <Routes> */}
   {/* <Route  exact path="/about" element={<About />} /> */}
   {/* <Route exact path="/" element={} /> */}
   <TextForm heading = "Enter the text to analyze" showAlert={showAlert} btn1={btn1} mode = {mode} />
{/* </Routes> */}

 </div>
 {/* </Router> */}

 </>
  );
}

export default App;
