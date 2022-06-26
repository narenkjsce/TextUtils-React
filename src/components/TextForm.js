import React, /* This is hook */ {useState} from 'react'

  

export default function TextForm(props) {
    /* 
    This is hook syntax and it should be always inside the function.
    Here text will act as a variable and setText as a function and the default value of text variable will be "Enter text here" 
    we have to learn the syntax at any cost.
    */ 
  const [text, setText] = useState('');
  // console.log(useState('Enter text here usestate2'));
  // text = "New value or updated value "; // wrong way to change the state.
  // setText("My new Value");//Correct Way to change the state.

  // Arrow function
 const handleUpClick = ()=>{
    let newText = text;
    setText(newText.toUpperCase());
    props.showAlert("Converted string to Uppercase!!","success");
}
const handleLowClick = ()=>{
    let newText = text;
    setText(newText.toLowerCase());
    props.showAlert("Converted string to Lowercase!!","success");
}
const handleCapitalClick = ()=>{
   
    let newText = text.split(" ");
    let temp = [newText.length];
    for(let i=0;i<newText.length;i++)   
            temp[i]= newText[i].charAt(0).toUpperCase() + newText[i].slice(1).toLowerCase();
    setText(temp.join(" "));
    props.showAlert("Converted string to first letter capital!!","success");
}
const handleOnChange = (event)=>{
  
    setText(event.target.value); // to append the new value in exisitng value we have handler ...this is the syntax we have to learn.
}
  return (
    <>   
     <div className='container' style={{ color : props.mode === 'light'?'black':'white'}}>      
       <div className="mb-3">
        <h4 className='mb-4'>{props.heading}</h4>
            {/* <label for="myBox" className="form-label">Text Area</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} 
            style={{backgroundColor : props.mode === 'light'?'white':'#042743',color : props.mode === 'light'?'black':'white' }} id="myBox" rows="7"></textarea>
        </div>
        {/* mx-2 : is a bootstarp class which gives margin to x axis ....*/}
       <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
       <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
       <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalClick}>Capital First Letter</button>
    </div>
     
    <div className="container my-3" style={{ color : props.mode === 'dark'?'white':'#042743'}}>
        <h3> Your Text Area Sumamry </h3>
        <p>There are <b>{text.split("/\s+/").filter((element)=>{return element.length !== 0}).length}</b> words and <b>{text.length}</b> character </p>
        <h2> Preview</h2>
        <p>{text.length>0?text:"Nothing to preview."}</p>
    </div>
    </>
  )
}
