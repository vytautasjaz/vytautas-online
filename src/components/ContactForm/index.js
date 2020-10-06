import React from 'react';
import Button from '../Button';
import './index.scss';
import data from '../../data.json';

function ContactForm({ lang }) {
  return (
    <div className='contact'>
      <div className='contact--input--box  w50'>
        <input type='text' name='' required />
        <span>{data[lang].contact.name}</span>
      </div>
      <div className='contact--input--box  w50'>
        <input type='text' name='' required />
        <span>{data[lang].contact.mail}</span>
      </div>
      <div className='contact--input--box w100'>
        <textarea name='' required />
        <span>{data[lang].contact.message}</span>
      </div>
      <div className='contact--input--box w100'>
        <Button type='button' color='red' value='Send'>
        {data[lang].contact.send}
        </Button>
      </div>
    </div>
  );
}

export default ContactForm;
