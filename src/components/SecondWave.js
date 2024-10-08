import React from 'react';
import { useEffect, useState } from 'react';


const SecondWave = () => {
  const [currentColor, setCurrentColor] = useState("");

  useEffect(() => {
    // Vérifier si dark mode est activé
    const isDarkMode = document.documentElement.classList.contains('dark');
    setCurrentColor(isDarkMode ? "#554BF8" : "#025548");

    // Écouter les changements de mode en ajoutant un observateur de mutation
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      setCurrentColor(isDark ? "#554BF8" : "#025548");
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
    <div className="bg-beige dark:bg-black">
      <div class="wave-container">
        <svg viewBox="0 0 1440 320">
          <path fill={currentColor} fill-opacity="1" d="M0,128L48,128C96,128,192,128,288,138.7C384,149,480,171,576,176C672,181,768,171,864,138.7C960,107,1056,53,1152,42.7C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
    </div>
  )
}

export default SecondWave;
