import React from 'react'
import styles from '../find/Find.module.css'
import Card from './Card'

import audi from '../../images/slider-swiper/audi.jpg'
import toyota from '../../images/slider-swiper/Toyota Yaris.jpg'
import nissan from '../../images/slider-swiper/Nissan.jpg'
import mitsubishi from '../../images/slider-swiper/mitsubishi.jpg'
import porsche from '../../images/slider-swiper/Porsche.png'
import suzuki from '../../images/slider-swiper/Suzuki.jpg'
import bmw from '../../images/slider-swiper/BMW.jpg'
import tesla from '../../images/slider-swiper/Tesla.png'
import toyotaCrown from '../../images/slider-swiper/Toyota Crown.jpg'

import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper,SwiperSlide } from "swiper/react"

import 'swiper/css'
import 'swiper/css/navigation'

const Find = () => {
  return (
    <div className={styles.find}>

      <div className={styles.heading}>

        <h1>Find your Drive</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Explore the world's largest car sharing marketplace</span>
          </p>
        </div>

      </div>

      <div className={styles.slider_container}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            //width=340px
            340: {
              width: 200,
              slidesPerView: 1,
            },
            //width=768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            //width=1040px
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Card 
              image={audi}
              make="Audi"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card 
              image={toyota}
              make="Toyota Yaris"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card 
              image={nissan}
              make="Nissan"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card 
              image={mitsubishi}
              make="Mitsubishi"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card 
              image={suzuki}
              make="Suzuki"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card 
              image={porsche}
              make="Porsche"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card 
              image={tesla}
              make="Tesla"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card 
              image={toyotaCrown}
              make="Toyota Crown"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card 
              image={bmw}
              make="BMW"
            />
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  )
}

export default Find