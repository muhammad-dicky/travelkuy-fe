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



const Home: React.FC = () => {




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
            <SwiperSlide>
              <img src='/potrait1.jpg' alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/potrait1.jpg' alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/potrait1.jpg' alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/potrait1.jpg' alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/potrait1.jpg' alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/potrait1.jpg' alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/potrait1.jpg' alt="slide_image" />
            </SwiperSlide>


          </Swiper>
        </div>
        {/* batas percobaan bawah */}










        <Carousel>
          <div className="container mx-auto px-5 py-0 lg:px-32 lg:pt-24">
            <div className="-m-1 flex flex-wrap md:-m-2">

              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <div className='relative group'>
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray"
                      src='/potrait1.jpg' />
                    <div className='absolute bottom-0 left-0 w-full text-white p-2'>
                      <p >
                        Bromo,
                      </p>
                      <p style={{ fontWeight: 'bold' }}>
                        wasdasdasdasd
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <div className='relative group'>
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray"
                      src='/potrait1.jpg' />
                    <div className='absolute bottom-0 left-0 w-full text-white p-2'>
                      <p >
                        Bromo,
                      </p>
                      <p style={{ fontWeight: 'bold' }}>
                        wasdasdasdasd
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <div className='relative group'>
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray"
                      src='/potrait1.jpg' />
                    <div className='absolute bottom-0 left-0 w-full text-white p-2'>
                      <p >
                        Bromo,
                      </p>
                      <p style={{ fontWeight: 'bold' }}>
                        wasdasdasdasd
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <div className='relative group'>
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray"
                      src='/potrait1.jpg' />
                    <div className='absolute bottom-0 left-0 w-full text-white p-2'>
                      <p >
                        Bromo,
                      </p>
                      <p style={{ fontWeight: 'bold' }}>
                        wasdasdasdasd
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Carousel>






        {/* <div className="container mx-auto px-5 py-0 lg:px-32 lg:pt-24">
          <div className="-m-1 flex flex-wrap md:-m-2">

            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <div className='relative group'>
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray"
                    src='/potrait1.jpg' />
                  <div className='absolute bottom-0 left-0 w-full text-white p-2'>
                    <p >
                      Bromo,
                    </p>
                    <p style={{ fontWeight: 'bold' }}>
                      wasdasdasdasd
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <div className='relative group'>
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray"
                    src='/potrait1.jpg' />
                  <div className='absolute bottom-0 left-0 w-full text-white p-2'>
                    <p >
                      Bromo,
                    </p>
                    <p style={{ fontWeight: 'bold' }}>
                      wasdasdasdasd
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <div className='relative group'>
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray"
                    src='/potrait1.jpg' />
                  <div className='absolute bottom-0 left-0 w-full text-white p-2'>
                    <p >
                      Bromo,
                    </p>
                    <p style={{ fontWeight: 'bold' }}>
                      wasdasdasdasd
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <div className='relative group'>
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray"
                    src='/potrait1.jpg' />
                  <div className='absolute bottom-0 left-0 w-full text-white p-2'>
                    <p >
                      Bromo,
                    </p>
                    <p style={{ fontWeight: 'bold' }}>
                      wasdasdasdasd
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div> */}







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






