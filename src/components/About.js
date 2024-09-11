import React from 'react';
import RotatingBanner from './RotatingBanner';
import profilePicture from '../assets/photo_Clementine_Delthe.jpg';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';


const About = () => {
  const { t, i18n } = useTranslation();

  const changeLang = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="about bg-green text-black flex flex-col items-center justify-center lg:min-h-[90vh] px-4 py-16 md:px-16 relative">

      <label
        htmlFor="checklang"
        className="bg-lilac cursor-pointer absolute top-4 left-4 w-20 h-10 rounded-full z-50"
      >
        <input
          type="checkbox"
          id="checklang"
          className="sr-only peer"
          // checked={i18n.language === 'en'}
          onChange={() => {
            changeLang();
          }}
        />
        <span
          className="w-8 h-8 bg-beige shadow-md absolute rounded-full left-1 top-1 peer-checked:bg-pink peer-checked:left-10 transition-all duration-500 flex items-center justify-center text-xl"
        >
          {i18n.language === 'fr' ? '🇫🇷' : '🇬🇧'}
        </span>
      </label>

      <div id="presentation" className='md:max-w-6xl w-full'>
        <div className='flex flex-col md:flex-row justify-between items-center w-full'>
          <h1 className='text-4xl md:text-6xl font-bold text-beige rubik-mono-one-regular p-4 md:my-36'>CLEM<span className='text-lilac'>.</span></h1>
          <div className='hidden md:block'>
            <RotatingBanner />
          </div>
        </div>
        <div className='p-2 text-[11px] md:text-base'>
          <p className='archivo-black-regular text-beige'>{t('intro')}</p> <br />
          <p className='archivo-black-regular text-justify text-beige' dangerouslySetInnerHTML={{ __html: t('description') }} />
            {/* After several years of experience in CRM management, with an emphasis on understanding customer needs and crafting personalised offers, I decided to shift my career trajectory towards web development. I enrolled in Le Wagon's Bootcamp, a unique experience that taught me the requested skills to embark on this new journey.
            <br />
            I started my new career as a Full-Stack Developer working for an event company, managing multiple projects for various clients. This opportunity not only allowed me to put my skills into practice in different programming languages but also provided a valuable learning experience, reinforcing my capabilities even further.
            <br />
            Following this, I joined Visence, a company focused on simplifying customer support interactions, as a full-stack developer. During my time there, I implemented several features, fixed bugs, and independently managed the HubSpot integration, including development and documentation.
            <br />
            I am looking forward to contributing to your innovative projects with my expertise and enthusiasm !
          </p> */}
        </div>
      </div>
      {/* <div className='hidden md:block'>
      </div> */}
    </div>
  )
}

export default About;
