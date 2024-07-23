import React, { useEffect, useRef, useState } from 'react';
import formGreen from '../assets/form_green.png';
import formOrange from '../assets/form_orange.png';
import formGreenPink from '../assets/form_green_pink.png';
import formOrangePink from '../assets/form_orange_pink.png';
import formPink from '../assets/form_pink.png';
import formPurpleCloud from '../assets/form_purple_cloud.png';
import formGreenLeaf from '../assets/form_green_leaf.png';
import formPinkFlower from '../assets/form_pink_flower.png';
import formPastelFlower from '../assets/form_pastel_flower.png';
import bike from '../assets/hobbies/sport/bike.png';
import fitness from '../assets/hobbies/sport/fitness.png';
import hike from '../assets/hobbies/sport/hike.png';
import pilates from '../assets/hobbies/sport/pilates.png';
import run from '../assets/hobbies/sport/run.png';
import ski from '../assets/hobbies/sport/ski.png';
import surf from '../assets/hobbies/sport/surf.png';
import volley from '../assets/hobbies/sport/volley.png';
import yoga from '../assets/hobbies/sport/yoga.png';
import alrdtalc from '../assets/hobbies/culture/ALRDTALC.png';
import zeroPointe from '../assets/hobbies/culture/zero_pointe.png';
import lfasdv from '../assets/hobbies/culture/lfasdv.png';
import jduc from '../assets/hobbies/culture/jduc.png';
import codeSource from '../assets/hobbies/culture/code_source.png';
import pdljfef from '../assets/hobbies/culture/pdljfef.png';
import friends from '../assets/hobbies/culture/friends.png';
import arcticMonkeys from '../assets/hobbies/culture/arctic_monkeys.png';
import cTangana from '../assets/hobbies/culture/ctangana.png';
import boutures from '../assets/hobbies/creation/boutures.png';
import angle from '../assets/hobbies/creation/angle.png';
import angle2 from '../assets/hobbies/creation/angle2.png';
import bougie from '../assets/hobbies/creation/bougie.png';
import tarte from '../assets/hobbies/creation/tarte.png';
import colle from '../assets/hobbies/creation/colle.png';
import pot from '../assets/hobbies/creation/pot.png';
import plage from '../assets/hobbies/creation/plage.png';
import sables from '../assets/hobbies/creation/sables.png';
import sushis from '../assets/hobbies/creation/sushis.png';
import fleurs from '../assets/hobbies/creation/fleurs.png';
import peinture from '../assets/hobbies/creation/peinture.png';
import tapis from '../assets/hobbies/creation/tapis.png';

const Hobbies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const hobbies = [
    ['culture', 'I love reading, listening, watching, learning. I spend hours listenning to podcasts or reading books. I also have a weakness for spanish music that I won\'t even try to fight. I am open to recomandations so don\'t hesitate to reach out if you just digged the podcast nugget ! 💎', 'pink', [alrdtalc, lfasdv, codeSource, pdljfef, cTangana, zeroPointe, jduc, friends, arcticMonkeys]],
    ['sport', 'I love to get that energy out and go further. I tried many sports, team or individual, and I love both. I enjoy team spirit and chearing each other up, but I also love a solo run with a good playlist. Bonus points for any outdoor sport, nothing beats nature\'s healing 🌿', 'sky', [bike, fitness, hike, pilates, run, ski, surf, volley, yoga]],
    ['creation', 'I love trying new things and making them myself. I spot something that I like and think about how to make it my own way, I also love home made presents and meals, nothing says I care better than that ! I tuft beach carpet so everyone can wake up with their feet in the water 🌊', 'lilac', [boutures, angle, bougie, tarte, sables, pot, peinture, colle, plage]],
  ];

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, []);

  const startInterval = () => {
    stopInterval();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hobbies.length);
    }, 7000);
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

  const currentHobby = hobbies[currentIndex];

  return (
    <div id="hobbies" className='bg-beige flex flex-col items-center justify-center py-16 lg:min-h-screen'>
      <div className='w-11/12 md:w-10/12'>
        <h2 className='rubik-mono-one-regular bg-[#F6E140] border border-[#F6E140] text-beige px-2 py-3 rounded-tr-lg rounded-bl-lg rounded-tl-sm rounded-br-sm inline-block'>
          HOBBIES
        </h2>
        <div className="mt-4 flex flex-col lg:flex-row justify-between items-center gap-2">
          <div className={`grid grid-cols-3 gap-3 md:gap-10 rounded-3xl p-10 shadow-inner bg-${currentHobby[2]}`}>
            {currentHobby[3].map((hob, index) => (
              <img key={index} src={hob} alt="" className='w-24 h-24 md:w-36 md:h-36 object-cover bg-beige rounded-3xl shadow-sm' />
            ))}
          </div>

          <div className='flex lg:flex-col gap-2'>
            {hobbies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`lg:w-3 lg:h-9 w-9 h-3 rounded-full ${currentIndex === index ? 'bg-yellow' : 'bg-green'}`}
              ></button>
            ))}
          </div>

          <div className='lg:w-1/3 lg:pl-2 md:px-10'>
            <h3 className={`rubik-mono-one-regular text-xl text-${currentHobby[2]}`}>{currentHobby[0]}</h3>
            <p className='archivo-black-regular'>{currentHobby[1]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hobbies;
