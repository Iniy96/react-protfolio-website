import React,{ useRef } from 'react'
import "./contact.css"
import { MdMail } from "react-icons/md"
import { ImLinkedin } from "react-icons/im"
import { BsWhatsapp } from "react-icons/bs"
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bc3fsys', 'template_f5lay14', form.current, 'H1f3YlwJg2MPzQFnN')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2 >Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdMail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>iniyavansivaraj07@gmail.com</h5>
            <a href="mailto:iniyavansivaraj07@gmail.com" rel="noreferrer" target={'_blank'}>Send a Message</a>
          </article>
          <article className="contact_option">
            <ImLinkedin className='contact_option-icon' />
            <h4>LinkedIn</h4>
            <h5>Iniyavan S</h5>
            <a href="https://www.linkedin.com/messaging/compose/?to=iniyavan-s-8a0666146" rel="noreferrer"  target={'_blank'}>Send a Message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+91 8870599327</h5>
            <a href="https://wa.me/+918870599327" rel="noreferrer"  target={'_blank'}>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your message here...' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact