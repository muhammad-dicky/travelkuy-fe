'use client'
import Image from 'next/image'
import Link from 'next/link'
import Posts from './posts/page'
import { Button, Card, Carousel, Col, DatePicker, Menu, Modal, Row, Space, Typography, theme, Radio } from 'antd'
import Layout, { Content, Footer, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import { grey } from '@ant-design/colors'
import { useState, useEffect, useRef } from 'react'
import { AlignRightOutlined, ArrowDownOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons'
import dynamic from 'next/dynamic'
import HeaderHero from './components/index/HeaderHero'
import CardList from './components/Posts/CardList'
import { CardImage, CardImageBig, CardImageSmall, CardImageTitle, CardImageTitleDestination } from './components/index/CardImage'
import { Carousel as AntCarousel } from 'antd';
import type { DotPosition } from 'antd/es/carousel';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PaymentIcon from '@mui/icons-material/Payment';
import MapIcon from '@mui/icons-material/Map';
import { title } from 'process'
import { MidCard } from './components/index/MidCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

import slide_image_1 from './assets/images/potrait1.jpg';
import slide_image_2 from './assets/images/card1.jpg';
import slide_image_3 from './assets/images/card1.jpg';
import slide_image_4 from './assets/images/card1.jpg';
import slide_image_5 from './assets/images/card1.jpg';
import slide_image_6 from './assets/images/card1.jpg';
import slide_image_7 from './assets/images/card1.jpg';



const { Title, Text } = Typography;
const { Meta } = Card;
interface imgCardCarousel {
  url: string;
  rating: string;
  price: string;
  description: string;
}


const Home: React.FC = () => {

  const imgCardCarousel: imgCardCarousel[] = [
    {
      url: '/potrait1.jpg',
      rating: '4.9',
      price: '$285',
      description: 'Bali Tour Package'
    },
    {
      url: '/potrait2.jpg',
      rating: '4',
      price: '$340',
      description: 'Baliiiii'
    },
    {
      url: '/potrait3.jpg',
      rating: '3.5',
      price: '$200',
      description: 'wasadasd',
    },
    {
      url: '/potrait4.jpg',
      rating: '2.0',
      price: '$100',
      description: 'awdjkgsnskfjn'
    },
    {
      url: '/potrait5.jpg',
      rating: '1.0',
      price: '$500',
      description: 'edsdimid'
    },
    {
      url: '/potrait6.jpg',
      rating: '4.3',
      price: '$100',
      description: 'bromo'
    },
  ];


  return (
    <>
      <Layout>
        <HeaderHero />
        <CardImageTitle />
        <CardImage />
        <MidCard />
        <CardImageTitleDestination />



        {/* batas percobaan atas */}
        <div className="container">

          <Swiper

            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              enabled: true
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            {imgCardCarousel.map((content, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className='relative' style={{ borderRadius: '30px' }}>

                    <img src={content.url} alt="" />
                    <p className='absolute  p-3 m-2' style={{ backgroundColor: 'rgba(0, 71, 79, 0.7)', borderRadius: '20px', top: '0', left: '0', color: 'white' }}>
                      {content.rating}
                    </p>
                    <div className='absolute  p-3  m-2' style={{ backgroundColor: 'rgba(0, 71, 79, 0.7)', borderRadius: '20px', bottom: '0', left: '0', width: '80%', color: 'white' }}>
                      <p>{content.price}</p>
                      <p>{content.description}</p>
                    </div></div>
                </SwiperSlide>
              );
            })}


          </Swiper>
        </div>
        {/* batas percobaan bawah */}




        <button className='btn' style={{ color: 'white', }}>wasd</button>











        <Row className='mt-20 m-10 ml-20' >
          <Col className='ContentLeft' span={12}>
            <p>20-24 DECEMBER - 4 DAY 3 NIGHT</p>
          </Col>
          <Col className='ContentRight hidden md:block  lg:block' span={12}>wasdasd</Col>
        </Row>

      </Layout >
      <Footer style={{ color: "grey" }}>in footer</Footer>



      <div style={{ height: 2000 }}></div>


    </>
  )
}


export default Home;






