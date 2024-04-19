import React from 'react'
import { Link } from 'react-router-dom'
import "./Contact.css"

function Contact() {
  return (
    <main className='main-contact'>
        <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me!</span></h2>

        <form action="https://formsubmit.co/juanjose250699@gmail.com" method="POST">
          <div className="input-box">
            <input type="text" placeholder="Full Name" name="name"/>
            <input type="email" placeholder="Email Address" name="email"/>
          </div>
          <div className="input-box">
            <input type="number" placeholder="Mobile Number" name="phone"/>
          </div>
          <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
           <input type="submit" value="Send" className="btn"/>
    
           <input type="hidden" name="_next" value="https://jappworkout.netlify.app"/>
           <input type="hidden" name="_captcha" value="false"/>
        </form>
      </section>
    </main>
  )
}

export default Contact