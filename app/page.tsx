'use client'
import Image from 'next/image'
import Link from 'next/link'
import Posts from './posts/page'
import { Button, Card, Carousel, Col, DatePicker, Menu, Modal, Row, Space, Typography, theme, Radio, Rate, Avatar } from 'antd'
import Layout, { Content, Footer, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import { grey } from '@ant-design/colors'
import { useState, useEffect, useRef } from 'react'
import { AlignRightOutlined, ArrowDownOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined, UserOutlined } from '@ant-design/icons'
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
import { CardOurDestination } from './components/index/CardOurDestination'



const { Title, Text } = Typography;
const { Meta } = Card;
interface reviewItems {
  profile: React.ReactNode;
  name: string;
  status: string;
  description: string;
}


const Home: React.FC = () => {

  const reviewItems = [
    {
      profile: <UserOutlined />,
      name: 'Donald Sullivan',
      status: 'Founder Fike',
      description: 'This travel website is very informatife and easy to use. i like how they present various destination options and travel packages with clear details. Offerin pictures and destination descriptions helps me decide where i want to visit. Additionally, the ability to compare prices and reviews from other users is very helpful in decision making.'
    },
    {
      profile: <UserOutlined />,
      name: 'Muhammad Dicky',
      status: 'Web Programmer',
      description: 'jadi ceritanya ini adalah sebuah review dari sebuah web yang udah aku buat dengan data dummy tapi bentuknya sudah terformat dengan map sehingga ntar tinggal panggil aja data dari database'
    }
  ]


  return (
    <>
      <Layout>
        <HeaderHero />
        <CardImageTitle />
        <CardImage />
        <MidCard />
        <CardImageTitleDestination />
        <CardOurDestination />



        <Carousel autoplay className='mt-60'>
          {reviewItems.map((content, index) => (
            <div key={index}>
              <Row >
                <Col span={2}></Col>
                <Col span={20} style={{ margin: '0 auto' }}>
                  <Row>
                    <Avatar size="large" style={{ margin: '0 auto' }} icon={content.profile} />
                    <div className='text-center' style={{ margin: '0 auto' }}>
                      <b >{content.name}</b>
                      <p>{content.status}</p>
                      <p >{content.description}</p>
                    </div>
                  </Row>
                </Col>
                <Col span={2}></Col>
              </Row>
            </div>
          ))}



        </Carousel>





        {/* <div>
            <Row >
              <Col span={2}></Col>
              <Col span={20} style={{ margin: '0 auto' }}>
                <Row>
                  <Avatar size="large" style={{ margin: '0 auto' }} icon={<UserOutlined />} />
                  <div className='text-center' style={{ margin: '0 auto' }}>
                    <b >Donald Sullivan</b>
                    <p>Founder Fike</p>
                    <p >This travel website is very informatife and easy to use. i like how they present various destination options and travel packages with clear details. Offerin pictures and destination descriptions helps me decide where i want to visit. Additionally, the ability to compare prices and reviews from other users is very helpful in decision making.</p>
                  </div>
                </Row>
              </Col>

              <Col span={2}></Col>

            </Row>
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






