import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Photos.css'; 
import photo1 from '../images/Yokoteyama1.jpg'
import photo2 from '../images/Yokoteyama2.jpg'
import photo3 from '../images/Yokoteyama3.jpg'

const MySwiper = () => {
  return (
    <section id="photos">
      <h2>Photos</h2>
    <Swiper
      modules={[Navigation, Pagination, Autoplay, Scrollbar]} 
      direction="horizontal"
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }} 
    >
      <SwiperSlide>
      <img src={photo1} alt="Beautiful view" className="photo1" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={photo2} alt="Beautiful view" className="photo1" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={photo3} alt="Beautiful view" className="photo1" />
      </SwiperSlide>
    </Swiper>
    </section>
  );
};

export default MySwiper;

