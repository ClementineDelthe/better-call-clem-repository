import React from 'react'

const WaveB = ({color}) => {
  return (
    <div className={`bg-${color}`}>
      {/* <svg width="100%" height="35px" viewBox="0 0 1440 35" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FEF6E0" d="M0,20 C360,60 1080,-20 1440,20 L1440,40 L0,40 Z" />
      </svg> */}
      <svg width="100%" height="35" viewBox="0 0 1440 35" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path fill="#FEF6E0" d="M0,20 C360,60 1080,-20 1440,20 L1440,40 L0,40 Z" />
      </svg>
    </div>
  )
}

export default WaveB;
