import { useRef } from 'react';
import emailjs from '@emailjs/browser';

// function Contact() {

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, 'a8K2eQ-yqxPWaBEvK')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset()
  };

  return (
    <div>
      <form className='contact-form' ref={form} onSubmit={sendEmail}>
        <h4>Get In Touch With Me!</h4>
        <p>* required</p>
        <label>Name* </label>
        <input className='form-input' type='text' name='user_firstName' placeholder='First Name' />
        <input className='form-input' type='text' name='user_lastName' placeholder='Last Name' />
        <label>Email*</label>
        <input className='form-input' type='text' name='user_email' />
        <label>Message*</label>
        <textarea className='form-input' name='message' />
        <button className='submit-button'>Submit</button>
      </form>
    </div>
  )
}
// }

export default ContactUs;