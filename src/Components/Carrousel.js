import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import imagen1 from '../Assets/images/1.jpg';
import imagen2 from '../Assets/images/2.jpg';
import imagen3 from '../Assets/images/3.jpg';
import imagen4 from '../Assets/images/4.jpg';
import imagen5 from '../Assets/images/5.jpg';
import imagen6 from '../Assets/images/6.jpg';
import imagen7 from '../Assets/images/7.jpg';
import imagen8 from '../Assets/images/8.jpg';
import imagen9 from '../Assets/images/9.jpg';

import '../Style/Carrusel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Carrousel = () => {
  const [photo, setPhoto] = useState(0);
  const photos = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPhoto((prevIndex) => (prevIndex + 1) % photos.length);
    }, 1000);

    return () => clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonte
  }, []); // [] asegura que este efecto se ejecute solo una vez, similar a componentDidMount

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <div className='carruselDiv'>
      <Slider {...settings}>
        {photos.map((photo) => (
          <div className='divImagen'>
            <img src={photo} className='imagen'/>
          </div>
        ))}
      </Slider>
    </div>
  );
};
