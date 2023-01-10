function Contact() {
  return (
    <div>
      <form className='contact-form'>
        <h4>Get In Touch With Me!</h4>
        <label htmlFor='firstName'>First Name</label>
        <input className='form-input' type='text' name='firstName' />
        <label htmlFor='lastName'>Last Name</label>
        <input className='form-input' type='text' name='lastName' />
        <label htmlFor='email'>Email</label>
        <input className='form-input' type='text' name='email' />
        <label htmlFor='message'>Message</label>
        <input className='form-input' type='text' name='message' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact;