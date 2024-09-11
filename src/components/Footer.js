import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='bg-beige flex items-center justify-center'>
      <div className='bg-lilac w-11/12 rounded-lg shadow-md h-10 mb-4 flex items-center justify-center'>
        <p className=' text-xs md:text-sm archivo-black-regular text-green'>{t('footer')}</p>
      </div>
    </div>
  )
}

export default Footer;
