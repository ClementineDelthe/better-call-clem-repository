import React, {useState, useEffect} from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';


const Header = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < lastScrollY) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    setLastScrollY(currentScrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll',handleScroll);
    };
  }, [lastScrollY]);

  const { t, i18n } = useTranslation();

  return (
    <div className={`header-glass archivo-black-regular border-2 border-green max-w-2xl rounded-full flex items-center justify-center w-[300px] text-[8px] md:text-sm md:w-[550px] h-12 fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50 text-green ${isVisible ? 'translate-y-0' : 'translate-y-20'}`}>
      <ul className='flex w-5/6 justify-between'>
        <li><Link className="cursor-pointer" to="home" smooth={true} duration={500}>{t('header about')}</Link></li>
        <li><Link className="cursor-pointer" to="about" smooth={true} duration={500}>{t('header skills')}</Link></li>
        <li><Link className="cursor-pointer" to="projects" smooth={true} duration={500}>{t('header projects')}</Link></li>
        <li><Link className="cursor-pointer" to="skills" smooth={true} duration={500}>{t('header hobbies')}</Link></li>
        <li><Link className="cursor-pointer" to="contact" smooth={true} duration={500}>{t('header contact')}</Link></li>
      </ul>
    </div>
    // on click on any of the links make this bar invisible again
  )
}

export default Header;
