import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from '@fortawesome/free-solid-svg-icons';

import image1 from '../../assets/hotelImg/img1.jpg';
import image2 from '../../assets/hotelImg/img2.jpg';
import image3 from '../../assets/hotelImg/img3.jpg';
import image4 from '../../assets/hotelImg/img4.jpg';
import image5 from '../../assets/hotelImg/img5.jpg';
import image6 from '../../assets/hotelImg/img6.jpg';

import './hotel.css';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: image1,
    },
    {
      src: image2,
    },
    {
      src: image3,
    },
    {
      src: image4,
    },
    {
      src: image5,
    },
    {
      src: image6,
    },
  ];

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(true);
  };

  const handleClick = (direction) => {
    let newSlideNumber;

    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='hotel-container'>
        {open && (
          <div className='slider'>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className='close'
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className='arrow'
              onClick={() => handleClick('l')}
            />
            <div className='slider-wrapper'>
              <img
                src={photos[slideNumber].src}
                alt=''
                className='slider-img'
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className='arrow'
              onClick={() => handleClick('r')}
            />
          </div>
        )}
        <div className='hotel-wrapper'>
          <button className='book-now'>Reserve or Book Now!</button>
          <h1 className='hotel-title'>Grand Hotel</h1>
          <div className='hotel-address'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className='hotel-distance'>
            Excellent location - 500m from center
          </span>
          <span className='hotel-price-highlight'>
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className='hotel-images'>
            {photos?.map((photo, index) => (
              <div key={index} className='hotel-img-wrapper'>
                <img
                  onClick={() => handleOpen(index)}
                  src={photo?.src}
                  alt='hotel image'
                  className='hotel-img'
                />
              </div>
            ))}
          </div>

          <div className='hotel-details'>
            <div className='hotel-details-texts'>
              <h1 className='hotel-title'>Stay in the heart of City</h1>
              <p className='hotel-desc'>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className='hotel-details-price'>
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
