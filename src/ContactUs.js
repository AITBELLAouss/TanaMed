import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';


const Result =()=>{
    return(
        <div>
            your email has been successfully sent.
        </div>
    )
}

export const ContactUs = () => {
    const form = useRef();
    const[result,showResult]= useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_5f0o7q9', 'template_fkuqmjc', form.current, 'iphxCYVdyMFGHZcKu')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
        showResult(true);

    };

    setTimeout(() => {
        showResult(false);
    }, 5000);
  
    return (
        <div name="Contact" className="contactUs">
            <br />
            <h1>
                Contact us
            </h1>
            <div className="infoC">
                About: join our leading company in importing and selling medical goods <br /> 
                Email: tanamed.infos@gmail.com <br />
                Contact: +212 7 70 17 72 58 / +212 6 44 98 95 95 <br />
                Adresse: TANA MED
                <a href="https://maps.app.goo.gl/tYHSCHdKS9k8xkSp6?g_st=ic">H9G8+CMQ,Valfleury Casablanca</a>
            </div>
            <div className="form">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="info">
                        <label>Name:  </label>
                        <input type="text" name="fullName" required/>
                        <br />
                        <label>Phone:  </label>
                        <input type="number" name="phone" required/>
                        <br />
                        <label>Email :     </label>
                        <input type="email" name="email" required/>
                    </div>
                    <div className="msgSub">
                        <label>
                            Message:
                        </label>
                        <br />
                        <textarea name="message" required/>
                        <br />
                        <input type="submit" value="Send" className='button'/>
                        <div>{result ? <Result /> : null}</div>
                    </div>
                </form>
                
            </div>
           <br />
        </div>
    );
  };

export default ContactUs;