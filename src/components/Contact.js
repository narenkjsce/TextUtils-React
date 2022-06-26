import React from 'react'
import PropTypes from 'prop-types'

export default function Contact(props) {
  return (
    <div className='container' style={{ color : props.mode === 'light'?'black':'white'}}>
        <section className="mb-4">
            <h2 className="h1-responsive font-weight-bold text-left my-4" 
            style={{ color : props.mode === 'dark'?'white':'#042743'}}>Contact us</h2>

    <div className="row">

        
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                
                <div className="row">

                    
                    <div className="col-md-6 my-2">
                        <div className="md-form mb-0">
                        <label for="name" className="" style={{ color : props.mode === 'dark'?'white':'#042743'}}>Your name</label>
                            <input type="text" id="name" name="name" className="form-control"/>
                            
                        </div>
                    </div>
                    

                    
                    <div className="col-md-6 my-2">
                        <div className="md-form mb-0">
                        <label for="email" className="" style={{ color : props.mode === 'dark'?'white':'#042743'}}>Your email</label>
                            <input type="text" id="email" name="email" className="form-control"/>
                            
                        </div>
                    </div>
                    

                </div>
                

                
                <div className="row">
                    <div className="col-md-12 my-2">
                        <div className="md-form mb-0">
                        <label for="subject" className="" style={{ color : props.mode === 'dark'?'white':'#042743'}}>Subject</label>
                            <input type="text" id="subject" name="subject" className="form-control"/>
                           
                        </div>
                    </div>
                </div>
                

                
                <div className="row">

                    
                    <div className="col-md-12 my-2">

                        <div className="md-form">
                        <label for="message" style={{ color : props.mode === 'dark'?'white':'#042743'}}>Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                           
                        </div>

                    </div>
                </div>
            </form>
            <div className="text-center text-md-left my-2">
                <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();" href='/'>Send</a>
            </div>
            <div className="status"></div>
        </div>
    
        <div className="col-md-3 text-center my-3">
            <ul className="list-unstyled mb-0" style={{ color : props.mode === 'dark'?'white':'#042743'}}>
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Mumbai, India</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+91-9920306082</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>narenkjsce@gmail.com</p>
                </li>
            </ul>
        </div>
        

    </div>
    </section>
    </div>
  )
}

