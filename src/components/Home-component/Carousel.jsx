"use client";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import BannerSatu from '../../assets/image/bn1-03.png';
import BannerDua from '../../assets/image/bn2-03.png';

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
          clickable: true ,
        }}
        navigation={false}
        modules={[Autoplay, Navigation, EffectFade]} effect='fade'
        className="mySwiper sm:h-[400px] rounded-large"
      >
        <SwiperSlide className=''>
          <div className=' flex sm:w-auto rounded-xl'>
            <img src={BannerSatu} className=''/>
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className=' flex sm:w-auto'>
            <img src={BannerDua} className=''/>
          </div>
        </SwiperSlide>
      </Swiper>
  )
}

