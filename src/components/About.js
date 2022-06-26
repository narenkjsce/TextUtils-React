import React //, { useState } 
from 'react'
//import PropTypes from 'prop-types'

export default function About(props) {
 
//   const[myStyle,setMyStyle] = useState(
//       {
//         color:'black',
//         backgroundColor:'White'
//     })
    //const[btnText,setbtnText] = useState("Enable Dark Mode")
    // const  toggleButton = ()=>{

    //     if(myStyle.color === 'black')
    //     {
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //        // setbtnText("Enable Light Mode");
    //     }
    //     else
    //     {   setMyStyle({
    //                 color:'black',
    //             backgroundColor:'White'
    //         })
    //       //  setbtnText("Enable Dark Mode");
    //     }
    // }
  return (
    <>    
    <div className="container" style={{backgroundColor : props.mode === 'light'?'white':'#042743',color : props.mode === 'light'?'black':'white' }}>
    <h3 className='my-3'>About Narendra Patel</h3>
    <div className="accordion" id="accordionExample" style={{backgroundColor : props.mode === 'light'?'white':'#042743',color : props.mode === 'light'?'black':'white' }} >
        <div className="accordion-item" >
            <h2 className="accordion-header" id="headingOne" style={{backgroundColor : props.mode === 'light'?'white':'#042743',color : props.mode === 'light'?'black':'white' }}>
            <button className="accordion-button"  style={{backgroundColor : props.mode === 'light'?'white':'#042743',color : props.mode === 'light'?'black':'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Education
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor : props.mode === 'light'?'white':'#042743',color : props.mode === 'light'?'black':'white' }}>
                <strong>He is B.E.I.T from K.J.Somaiya College of Engineering, Passout Year 2013.</strong> 
            </div>
            </div>
        </div>
        <div className="accordion-item"  >
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed"  style={{backgroundColor : props.mode === 'light'?'white':'#042743',color : props.mode === 'light'?'black':'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                IT Career
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor : props.mode === 'light'?'white':'#042743',color : props.mode === 'light'?'black':'white' }} >
                <strong>Has 8+ Years of Experiance in different domain and Microsoft technologies</strong> 
                <ul><li>Asp.Net</li><li>.Net Core</li><li>WCF</li><li>WEB API</li><li>.Net Core MVC</li><li>Web Services</li><li>C#</li></ul>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed"  style={{backgroundColor : props.mode === 'light'?'white':'#042743',color : props.mode === 'light'?'black':'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Interest
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor : props.mode === 'light'?'white':'#042743',color : props.mode === 'light'?'black':'white' }}>
                <strong>To become Good Investor ( MF as well as Stock Market) and Part time trading in Indian stock Market</strong>
            </div>
            </div>
        </div>
     </div>
    
    {/* <div className="container my-3">
        <button type="button" class="btn btn-primary" onClick={toggleButton} >{btnText}</button>
    </div> */}
    </div>
    </>
  )
}
