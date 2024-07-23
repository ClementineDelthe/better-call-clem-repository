import React from 'react';
import profilePicture from '../assets/photo_Clementine_Delthe.jpg';


const RotatingBanner = () => {
  return (
    // <div className="rotating-text-container">
    //   <svg viewBox="0 0 100 100" className="rotating-svg">
    //     <defs>
    //       <path
    //         id="circlePath"
    //         d="M 50, 50
    //           m -40, 0
    //           a 40,40 0 1,1 80,0
    //           a 40,40 0 1,1 -80,0"
    //       />
    //     </defs>
    //     <text className="rotating-text">
    //       <textPath xlinkHref="#circlePath">
    //         Better Call Clem  •  Better Call Clem  •  Better Call Clem  •&nbsp;
    //       </textPath>
    //     </text>
    //   </svg>
    //   <img
    //   src={profilePicture}
    //   alt="Clémentine Delthé"
    //   className="w-52 h-52 rounded-full border-8 border-lilac absolute inset-0 m-auto"
    // />
    // </div>
    <div className="rotating-text-container relative w-64 h-64 flex items-center justify-center">
    <svg viewBox="0 0 100 100" className="rotating-svg absolute inset-0">
      <defs>
        <path
          id="circlePath"
          d="M 50, 50
              m -40, 0
              a 40,40 0 1,1 80,0
              a 40,40 0 1,1 -80,0"
        />
      </defs>
      <text className="rotating-text">
        <textPath xlinkHref="#circlePath">
          Better Call Clem  •  Better Call Clem  •  Better Call Clem  •&nbsp;
        </textPath>
      </text>
    </svg>
    <img
      src={profilePicture}
      alt="Clémentine Delthé"
      className="w-52 h-52 rounded-full border-8 border-lilac absolute"
    />
  </div>
  )
}

export default RotatingBanner;
