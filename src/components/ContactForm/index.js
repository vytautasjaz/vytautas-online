import React from 'react';
import Button from '../Button';
import './index.scss';

function ContactForm() {
  return (
    <div className='contact'>
      <div className='contact--input--box  w50'>
        <input type='text' name='' required />
        <span>Name</span>
      </div>
      <div className='contact--input--box  w50'>
        <input type='text' name='' required />
        <span>E-mail</span>
      </div>
      <div className='contact--input--box w100'>
        <textarea name='' required />
        <span>Message</span>
      </div>
      <div className='contact--input--box w100'>
        <Button type='button' color='red' value='Send'>
          Send
        </Button>
      </div>
    </div>
  );
}

export default ContactForm;
