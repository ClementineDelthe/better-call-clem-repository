import React from 'react';
import RotatingBanner from './RotatingBanner';
import profilePicture from '../assets/photo_Clementine_Delthe.jpg';

const About = () => {
  return (
    <div className="about bg-green text-black flex flex-col items-center justify-center lg:min-h-[90vh] px-4 py-16 md:px-16">
      <div className='md:max-w-6xl w-full'>
        <div className='flex flex-col md:flex-row justify-between items-center w-full'>
          <h1 className='text-4xl md:text-6xl font-bold text-beige rubik-mono-one-regular p-4 md:my-36'>CLEM<span className='text-lilac'>.</span></h1>
          <div className='hidden md:block'>
            <RotatingBanner />
          </div>
        </div>
        <div className='p-2 text-[11px] md:text-base'>
          <p className='archivo-black-regular text-beige'>Hi, I'm Clémentine 🍊, a passionate web developer.</p> <br />
          <p className='archivo-black-regular text-justify text-beige'>
            After several years of experience in CRM management, with an emphasis on understanding customer needs and crafting personalised offers, I decided to shift my career trajectory towards web development. I enrolled in Le Wagon's Bootcamp, a unique experience that taught me the requested skills to embark on this new journey.
            <br />
            I started my new career as a Full-Stack Developer working for an event company, managing multiple projects for various clients. This opportunity not only allowed me to put my skills into practice in different programming languages but also provided a valuable learning experience, reinforcing my capabilities even further.
            <br />
            Following this, I joined Visence, a company focused on simplifying customer support interactions, as a full-stack developer. During my time there, I implemented several features, fixed bugs, and independently managed the HubSpot integration, including development and documentation.
            <br />
            I am looking forward to contributing to your innovative projects with my expertise and enthusiasm !
          </p>
        </div>
      </div>
      <div className='hidden md:block'>
      </div>
    </div>
  )
}

export default About
