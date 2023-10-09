import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'; 
import { Pagination } from 'swiper/modules';
import image1 from "../../assets/home/image1.png";
import image2 from "../../assets/home/image2.png";
import './styles.css'
SwiperCore.use([Pagination]);

const MySwiper: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<any | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleSwiper = (swiper: any) => { 
    setSwiperInstance(swiper);
  };

  const handleSlideChange = () => {
    if (swiperInstance) {
      setCurrentSlide(swiperInstance.realIndex); 
    }
  };

  return (
    <div>
      <Swiper
        onSwiper={handleSwiper}
        onSlideChange={handleSlideChange}
        slidesPerView={4}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={image1} alt="Image 1" /></SwiperSlide>
        <SwiperSlide><img src={image2} alt="Image 2" /></SwiperSlide>
        <SwiperSlide><img src={image2} alt="Image 3" /></SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>

      <div>
        <img src={currentSlide === 0 ? image1 : currentSlide === 1 ? image2 : image2} alt={`Large Image ${currentSlide + 1}`} />
      </div>
    </div>
  );
};

export default MySwiper;
