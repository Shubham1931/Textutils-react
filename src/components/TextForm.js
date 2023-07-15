import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick= ()=>{
  let newText = text.toUpperCase();
   setText(newText);
   props.showAlert("Converted to UpperCase","success")
  }
  const handleLoClick= ()=>{
  let newText = text.toLowerCase();
  props.showAlert("Converted to LowerCase","success")
   setText(newText);
  }
  const speakFunction= ()=>{
   let msg = new SpeechSynthesisUtterance();
   msg.text = text;
   props.showAlert("Running..","success")
   window.speechSynthesis.speak(msg);
    
    }
  const clearText= ()=>{
    let oldText = ("");
    props.showAlert("Text has been cleared","success")
    setText(oldText)
   }
  const handlePasteText= ()=>{
  navigator.clipboard.readText().then((clipText)=> setText(clipText));
   }
  const reverseText=()=>{
   let splitWord = text.split("")
   let reverseWord = splitWord.reverse("");
   let joinedWords = reverseWord.join("");
   let newText = joinedWords;
   setText(newText);
   props.showAlert("Text has been reversed","success")
   }
  const handleUpChange= (event)=>{
setText(event.target.value); 
    
  }
  
   const [ text,setText] = useState("");
  return (
    <>  <div>
<div className="mb-3">
  <label htmlFor="myBox" className="form-label"><h1 style={{color:props.mode === 'light'?'black':'white'}}>{props.heading}</h1></label>
<textarea className="form-control " value ={text} style={{backgroundColor:props.mode === 'light'?'white':'grey',color:props.mode === 'light'?'black':'white',fontSize:'20px'}} onChange = {handleUpChange}id="exampleFormControlTextarea1" rows="5"></textarea>
</div>
<button className={`btn btn-outline-${props.btn1} my-3 mx-2 text-${props.mode==='light'?'black':'white'}`} onClick={handleUpClick}>Conver to upperCase.</button>
<button className={`btn btn-outline-${props.btn1} my-3 mx-2 text-${props.mode==='light'?'black':'white'}`}  onClick = {handleLoClick}>Convert to LowerCase</button>
<button className={`btn btn-outline-${props.btn1} my-3 mx-2 text-${props.mode==='light'?'black':'white'}`}  onClick = {clearText}>Clear Text</button>
<button className={`btn btn-outline-${props.btn1} my-3 mx-2 text-${props.mode==='light'?'black':'white'}`}  onClick = {speakFunction}>speak </button>
<button className={`btn btn-outline-${props.btn1} my-3 mx-2 text-${props.mode==='light'?'black':'white'}`}   onClick = {handlePasteText}>handlePasteText </button>
<button className={`btn btn-outline-${props.btn1} my-3 mx-2 text-${props.mode==='light'?'black':'white'}`}   onClick = {reverseText}>reverseText </button>
    </div>
    <div className="container my-3"style={{color:props.mode === 'light'?'black':'white'}}>
      <h2>Your text Summary </h2>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p> { 0.008* text.split(" ").length}minutes</p>
      <h2>Preview </h2>
      <p >{text.length>0?text:"Enter your text to Preview"}</p>
    </div>
    </> 
  )
  }
