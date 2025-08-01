import { useEffect } from 'react';

export default function FloatingHearts() {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.innerHTML = '💖';
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDelay = Math.random() * 3 + 's';
      heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
      
      const heartsContainer = document.getElementById('floating-hearts');
      if (heartsContainer) {
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
          if (heart.parentNode) {
            heart.remove();
          }
        }, 7000);
      }
    };

    // Create hearts periodically
    const interval = setInterval(createHeart, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div id="floating-hearts" className="floating-hearts"></div>;
}
