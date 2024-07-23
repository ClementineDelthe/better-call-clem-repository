import React from 'react';

const WaveA = ({color}) => {
  return (
    <div className='bg-beige'>
      {/* <svg width="100%" height="35px" viewBox="0 0 1440 35" xmlns="http://www.w3.org/2000/svg">
        <path fill="#C5C3E3" d="M0,20 C360,60 1080,-20 1440,20 L1440,40 L0,40 Z" />
      </svg> */}
      <svg width="100%" height="35" viewBox="0 0 1440 35" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path fill={color} d="M0,20 C360,60 1080,-20 1440,20 L1440,40 L0,40 Z" />
      </svg>
    </div>
  )
}

export default WaveA;
