import React from 'react';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

const users = [
    {
    slider_images: '/images/videobg-area.png',
    
    },
    {
        slider_images: '/images/2.jpg',
     
    },
    {
        slider_images: '/images/videobg-area.png',
    
    },
    {
        slider_images: '/images/videobg-area.png',
   
    }

]



export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
         {users.map((userItem, index) =>
                (
                    <SwiperSlide><img src={userItem.slider_images} /></SwiperSlide>

                    )
                    )}

{/*       
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      ...
    </Swiper>

    
  );
};




