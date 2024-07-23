import React from 'react';
import phone from '../assets/phone_purple.png';
import email from '../assets/email_purple.png';
import linkedin from '../assets/linkedin_purple.png';
import { Button } from 'react-scroll';


const Contact = () => {
  return (
    <div id="contact" className='bg-beige flex flex-col items-center justify-center lg:min-h-[95vh] py-16 lg:py-0'>
      <div className='w-11/12 md:w-10/12'>
        <h2 className='rubik-mono-one-regular bg-pink border border-pink text-beige px-2 py-3 rounded-tr-lg rounded-bl-lg rounded-tl-sm rounded-br-sm inline-block'>
          CONTACT
        </h2>
        <div className='bg-green rounded-lg p-16 mt-4 md:flex md:items-center md:justify-center md:min-h-[500px] text-white'>
          <h3 className='archivo-black-regular lg:w-1/3'>Let's grab a ☕️ or plan a meeting to discuss how I could help you bring your projects to life & have a positive impact on your users !</h3>
          <div className='flex justify-center items-center text-[8px] md:text-xs'>
            <a href="tel:+33640313037" className="flex flex-col justify-center items-center">
              <img src={phone} alt="phone" className=""/>
              <p className="rubik-mono-one-regular text-center">CALL</p>
            </a>
            <a href="mailto:clementine.delthe@gmail.com" className="flex flex-col justify-center items-center">
              <img src={email} alt="email" className=""/>
              <p className="rubik-mono-one-regular text-center">EMAIL</p>
            </a>
            <a href="https://www.linkedin.com/in/cl%C3%A9mentine-delth%C3%A9-344bb2107/" className="flex flex-col justify-center items-center" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" className=""/>
              <p className="rubik-mono-one-regular text-center">LINKEDIN</p>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact;
