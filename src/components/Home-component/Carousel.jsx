import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BannerSatu from '../../assets/image/bn1.jpg';

export default function CarouselHome() {
  return (
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-xl"
      >
        <SwiperSlide>
          <div className='bg-green-500 dark:bg-black flex sm:h-auto sm:w-auto'>
            <img src={BannerSatu} className='w-full sm:w-1/2 rounded-xl'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-green-500 dark:bg-black flex sm:h-auto sm:w-auto'>
            <img src={BannerSatu} className='w-full sm:w-1/2 rounded-xl'/>
          </div>
        </SwiperSlide>
      </Swiper>
  )
}

