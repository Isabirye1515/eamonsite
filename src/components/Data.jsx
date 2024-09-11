import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/navigation'; // Import navigation module styles
import 'swiper/css/pagination'; // Import pagination module styles


// Images
import one from '../assets/pics/third.jpg';
import two from '../assets/pics/forth.jpg';
import four from '../assets/pics/fifth.jpg';
import five from '../assets/pics/sixth.jpg';
import six from '../assets/pics/seventh.jpg';
import seven from '../assets/pics/eight.jpg';
import eight from '../assets/pics/nineth.jpg';
import nine from '../assets/pics/tenth.jpg';
import ten from '../assets/pics/elleventh.jpg';
import twelve from '../assets/pics/twelfth.jpg';
import thirteen from '../assets/pics/twenty.jpg';
import fifeen from '../assets/pics/fifteenth.jpg';
import sixteen from '../assets/pics/sixteenth.jpg';
import seventeen from '../assets/pics/seventeenth.jpg';
import eighteen from '../assets/pics/eighteenth.jpg';
import { Button } from 'framework7-react';

function Data() {
  const [people] = useState([
    { image: one, hairStyle: "Kink", price: 150000 },
    { image: two, hairStyle: "Kink", price: 150000 },
    { image: four, hairStyle: "Kink", price: 150000 },
    { image: five, hairStyle: "Kink", price: 150000 },
    { image: six, hairStyle: "Kink", price: 180000 },
    { image: seven, hairStyle: "Kink", price: 150000 },
    { image: eight, hairStyle: "Kink", price: 150000 },
    { image: nine, hairStyle: "Kink", price: 180000 },
    { image: ten, hairStyle: "Kink", price: 150000 },
    { image: twelve, hairStyle: "Kink", price: 150000 },
    { image: thirteen, hairStyle: "Kink", price: 150000 },
    { image: fifeen, hairStyle: "Kink", price: 150000 },
    { image: sixteen, hairStyle: "Kink", price: 150000 },
    { image: seventeen, hairStyle: "Kink", price: 150000 },
  ]);

  const swiperRef = useRef(null);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'UGX' }).format(price);
  };

  return (
    <div className='datas'>
        <h2 style={{color:"#ddd ",marginLeft:"3%"}} >SOME OUR PRETTIED CUSTOMERS</h2>
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={3}
    
      >
        {people.map((person, index) => (
          <SwiperSlide key={index} className='data'>
            <img
              src={person.image}
              height={100}
              width={100}
              alt={`${person.hairStyle} hairstyle`}
            />
            <br />
            <b>Hair style: {person.hairStyle}</b><br />
            <b style={{ color: "red" }}>
              Start price: {formatPrice(person.price)}
            </b>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button  round small={true} fill  onClick={handlePrevSlide}>Previous</Button><br />
      <Button  round small={true} fill  onClick={handleNextSlide}>Next</Button>
    </div>
  );
}

export default Data;
