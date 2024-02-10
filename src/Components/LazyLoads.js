import React, { useRef, useEffect, useState } from 'react';

const LazyLoadComponent = ({ children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Deja de observar una vez que el elemento es visible
        }
      });
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []); // Este efecto se ejecuta solo una vez al montar el componente

  return <div ref={ref}>{isVisible && children}</div>;
};

export default LazyLoadComponent;
