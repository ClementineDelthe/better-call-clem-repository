import React from 'react';
import { useEffect, useState } from 'react';


const WaveB = ({ color }) => {
  const [currentColor, setCurrentColor] = useState("");

  useEffect(() => {
    // Vérifier si dark mode est activé
    const isDarkMode = document.documentElement.classList.contains('dark');
    setCurrentColor(isDarkMode ? "#1C1C1C" : "#FEF6E0");

    // Écouter les changements de mode en ajoutant un observateur de mutation
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      setCurrentColor(isDark ? "#1C1C1C" : "#FEF6E0");
    });

    // Observer les modifications de l'attribut class de l'élément html
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Nettoyage de l'observateur lorsque le composant est démonté
    return () => observer.disconnect();
  }, []);
  return (
    <div className={`${color}`}>
      {/* <svg width="100%" height="35px" viewBox="0 0 1440 35" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FEF6E0" d="M0,20 C360,60 1080,-20 1440,20 L1440,40 L0,40 Z" />
      </svg> */}
      <svg width="100%" height="35" viewBox="0 0 1440 35" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path fill={currentColor} d="M0,20 C360,60 1080,-20 1440,20 L1440,40 L0,40 Z" />
      </svg>
    </div>
  )
}

export default WaveB;
