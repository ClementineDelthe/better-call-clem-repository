import React, { useEffect, useState } from 'react';
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

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
//       <p onClick={() => {setDarkMode(!darkMode)}}>CLEM</p>

  return (
    <div className="about bg-green dark:bg-blue text-black flex flex-col items-center justify-center lg:min-h-[90vh] px-4 py-16 md:px-16 relative">

      <label
        htmlFor="checklang"
        className="bg-lilac dark:bg-fushia cursor-pointer absolute top-4 left-4 w-20 h-10 rounded-full z-50"
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
          className="w-8 h-8 bg-beige dark:bg-blue shadow-md absolute rounded-full left-1 top-1 peer-checked:bg-pink dark:peer-checked:bg-lime peer-checked:left-10 transition-all duration-500 flex items-center justify-center text-xl"
        >
          {i18n.language === 'fr' ? '🇫🇷' : '🇬🇧'}
        </span>
      </label>
      <div >
        <p onClick={() => {setDarkMode(!darkMode)}} className="absolute right-5 top-5 bg-beige dark:bg-fushia w-6 h-6 rounded-full text-center ">{darkMode ? '☀️' : '🌙'}</p>
      </div>

      <div id="presentation" className='md:max-w-6xl w-full'>
        <div className='flex flex-col md:flex-row justify-between items-center w-full'>
          <h1 className='text-4xl md:text-6xl font-bold text-beige dark:text-fushia rubik-mono-one-regular p-4 md:my-36'>CLEM<span className='text-lilac dark:text-lime'>.</span></h1>
          <div className='hidden md:block'>
            <RotatingBanner />
          </div>
        </div>
        <div className='p-2 text-[11px] md:text-base'>
          <p className='archivo-black-regular text-beige'>{t('intro')}</p> <br />
          <p className='archivo-black-regular text-justify text-beige' dangerouslySetInnerHTML={{ __html: t('description') }} />
        </div>
      </div>
    </div>
  )
}

export default About;
