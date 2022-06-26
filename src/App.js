//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Contact from './components/Contact';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes, // initially it was switch now it got converted into routes.... 
  Route
  //,
  //Link
} from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light');
  const [alertVariable, setAertVariable] = useState(null);

  const showAlert = (message, type)=>{
    setAertVariable({
      msg: message,
      typ : type
    })
    setTimeout(()=>{
      setAertVariable(null);      
    },1500);

  }
  const toggleMode = ()=>{

    if( mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
     // document.title= "TextUtils-Dark Mode";
//       setInterval(()=>{
// document.title= "TextUtils Amazing";
//       },2000);
//       setInterval(()=>{
//         document.title= "Install Now Urgent";
//               },1500);
//     }
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    //  document.title= "TextUtils-Light Mode";
//       setInterval(()=>{
// document.title= "TextUtils Amazing";
//       },2000);
//       setInterval(()=>{
//         document.title= "Install Now Urgent";
//               },1500);
    }

  }
  return (
    <>    
  <Router> 
      {/*We can pass N number of Elements to our component and that can be used as props*/}
      <Navbar title="TextUtils" aboutText="About" ContactText= "Contact" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alertVariable}/>
          {/*bootstrap class is container and we have to place there to have at proper place*/}
      <div className="container my-3">
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Routes>  
          {/* users/  -- > Component 1 
              users/Home -- > Component 2* : if we write path then will display component 1 and if we write exact then we will have component 2/}
          {/*To do complete match we have to write exact */}         
            <Route  exact path="/about" element={<About mode={mode} />} />
            {/* <TextForm showAlert={showAlert} heading="Enter some text" mode={mode}/> */}
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter | Character Counter" mode={mode}/>  }/>   
            <Route  exact path="/contactus" element={<Contact  mode={mode} />}  />         
        </Routes>
      </div>
    </Router> 
  </>
  );
}

export default App;
