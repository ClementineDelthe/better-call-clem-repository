import React, { useEffect, useState, useRef } from 'react';
import feedChitchat from '../assets/feed_chitchat.gif';
import messageChitchat from '../assets/message_chitchat.gif';
import mobileChitchat from '../assets/mobile_chitchat.gif';
import rnbnbHome from '../assets/rnbnb_home.png';
import rnbnbAll from '../assets/rnbnb_all.png';
import rnbnbArtist from '../assets/rnbnb_artist.png';
import lacosteOlympiades from '../assets/lacoste_Olympiades.png';
import voeuxRTE from '../assets/RTE_Voeux.png';
import allWTD from '../assets/WTF_all.png';
import comWTD from '../assets/WTD_com.png';
import defWTD from '../assets/WTD_def.png';
import homeMBLD from '../assets/MBLD_home.png';
import aboutMBLD from '../assets/MBLD_about.png';
import galleryMBLD from '../assets/MBLD_gallery.png';
import heartColored from '../assets/heart_fluo.png';
import homeBCC from '../assets/BCC_home.png';
import skillsBCC from '../assets/BCC_skills.png';
import projectsBCC from '../assets/BCC_projects.png';
import homeVISENCE from '../assets/VISENCE_home.png';
import userVISENCE from '../assets/VISENCE_user.png';
import callVISENCE from '../assets/VISENCE_call.png';
import { Button } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const myProjects = [
  {
    title: 'Airnbnb',
    description: 'The best app to book forgotten artists',
    picture1: rnbnbHome,
    picture2: rnbnbAll,
    picture3: rnbnbArtist,
    link: '',
    size: 'md:w-56 md:h-32 w-32 h-16',
    skills: ['ROR', 'STIMULUS', 'POSTGRESQL', 'CSS', 'HTML', 'BOOTSTRAP'],
  },
  {
    title: 'Chichat',
    description: 'The simplest way to contact your nanny',
    picture1: feedChitchat,
    picture2: messageChitchat,
    picture3: mobileChitchat,
    link: '',
    size: 'md:w-32 md:h-56 w-16 h-32',
    skills: ['ROR', 'STIMULUS', 'POSTGRESQL', 'CSS', 'HTML', 'BOOTSTRAP'],
  },
  {
    title: 'Convives',
    description: 'Several company event websites',
    picture1: lacosteOlympiades,
    picture2: voeuxRTE,
    picture3: '',
    link: '',
    size: 'md:w-56 md:h-32 w-32 h-16',
    skills: ['PHP', 'CSS', 'HTML', 'JAVASCRIPT', 'MARIADB'],
  },
  {
    title: 'WHAT THE DEF',
    description: 'A Glossary for words lovers',
    picture1: allWTD,
    picture2: comWTD,
    picture3: defWTD,
    size: 'w-32 h-56',
    skills: ['ROR', 'POSTGRESQL', 'CSS', 'HTML', 'BOOTSTRAP'],
  },
  {
    title: 'My Baby Love Doula',
    description: 'Massage therapist showcase site',
    picture1: homeMBLD,
    picture2: aboutMBLD,
    picture3: galleryMBLD,
    link: '',
    size: 'md:w-56 md:h-32 w-32 h-16',
    skills: ['NEXT.JS', 'JAVASCRIPT', 'REACT', 'CSS', 'TAILWIND'],
  },
  {
    title: 'Visence',
    description: 'Features, bug fixs and Hubspot integration',
    picture1: homeVISENCE,
    picture2: userVISENCE,
    picture3: callVISENCE,
    link: '',
    size: 'md:w-56 md:h-32 w-32 h-16',
    skills: ['NEXT.JS', 'NODE.JS', 'MUI', 'CSS', 'HTML', 'PRISMA', 'GRAPHQL', 'POSTGRESQL'],

  },
  {
    title: 'Better Call Clem',
    description: 'My very own portfolio',
    picture1: homeBCC,
    picture2: skillsBCC,
    picture3: projectsBCC,
    link: '',
    size: 'md:w-56 md:h-32 w-32 h-16',
    skills: ['REACT', 'JAVASCRIPT', 'TAILWIND', 'CSS'],
  }
]

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const intervalRef = useRef(null);

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, [currentIndex]);

  const startInterval = () => {
    stopInterval();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % myProjects.length);
    }, 3000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    startInterval();
  };

  const { t, i18n } = useTranslation();

  return (
    <div id="projects" className='bg-beige dark:bg-black text-white flex flex-col items-center justify-center py-16 lg:min-h-screen'>
      <div className='w-11/12 md:w-10/12'>
        <h2 className='rubik-mono-one-regular bg-lilac dark:bg-fushia text-beige dark:text-white px-2 py-3 rounded-tr-lg rounded-bl-lg rounded-tl-sm rounded-br-sm inline-block'>
          {t('projects')}
        </h2>
        <div className='bg-beige dark:bg-black border-8 border-green dark:border-lime rounded-lg md:p-16 mt-4 md:flex md:items-center md:min-h-[600px]'>
          <div className='md:flex md:justify-between md:gap-2 w-full'>
            <div className='flex flex-col justify-center'>
              <div className='md:space-y-2 p-6 mx-auto flex md:flex-col'>
                {myProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`md:w-3 md:h-9 w-9 h-3 rounded-full ${currentIndex === index ? 'bg-lilac dark:bg-lime' : 'bg-pink dark:bg-fushia'}`}
                  ></button>
                ))}
              </div>
            </div>
            <div className='flex flex-col items-center md:w-3/4 w-full'>
              <div className='bg-[#D0D6C3] mb-2 w-11/12 mx-auto rounded-xl p-10 border-4 border-pink dark:border-fushia md:min-h-[400px]'>
                <h3 className='archivo-black-regular text-green dark:text-blue'>{myProjects[currentIndex].title}</h3>
                <p className='archivo-black-regular text-black'>{t(myProjects[currentIndex].description)}</p>
                <div className='md:flex md:items-center md:justify-center gap-1'>
                  <img src={myProjects[currentIndex].picture1} alt='' className={`${myProjects[currentIndex].size}`} />
                  <img src={myProjects[currentIndex].picture2} alt='' className={`${myProjects[currentIndex].size} hidden lg:block`} />
                  {myProjects[currentIndex].picture3 !== '' && (
                    <img src={myProjects[currentIndex].picture3} alt='' className={`${myProjects[currentIndex].size} hidden lg:block`} />
                  )}
                </div>
                <div className='lg:flex lg:items-left gap-2 justify-center pt-4'>
                  {myProjects[currentIndex].skills.map((skill) => (
                    <button key={skill} className='archivo-black-regular text-black text-xs border border-pink dark:border-fushia rounded-full py-1 px-3'>
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
