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

import { CardOurDestination } from './components/index/CardOurDestination'
import { ReviewItem } from './components/index/ReviewItem';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import axios from 'axios'
import axiosInstance from './lib/axios'
import { useReviews } from './components/API/homePage/useReviews'





const queryClient = new QueryClient();

const { Title, Text } = Typography;
const { Meta } = Card;

interface reviewItems {
  id: number;
  img: string;
  name: string;
  status: string;
  description: string;
}
interface coba {
  coba: React.ReactNode
}

const Home: React.FC = () => {


  const { data, refetch: reviewRefetch } = useReviews({
    onError: () => {
      console.log('error here')
    }
  })


  const renderReviews = () => {
    return data?.map((review: reviewItems) => {
      return (
        <>
          <div key={review.id.toString()}>
            <Row>
              <Col span={2}></Col>
              <Col span={20} style={{ margin: '0 auto' }}>
                <Row>

                  <img src={review.img} alt={review.name} width={100} height={100} style={{ margin: '0 auto', borderRadius: '100%' }} />

                  <div className='text-center' style={{ margin: '0 auto' }}>
                    <b >{review.name}</b>
                    <p>{review.status}</p>
                    <p >{review.description}</p>
                  </div>
                </Row>
              </Col>
              <Col span={2}></Col>
            </Row>

          </div>
        </>
      )
    })
  }



  return (
    <>

      <Layout>
        <HeaderHero />
        <CardImageTitle />
        <CardImage />
        <MidCard />
        <CardImageTitleDestination />
        <CardOurDestination />
        {/* <ReviewItem /> */}

        <Carousel autoplay className='mt-60 mb-60'>
          {renderReviews()}
          {/* <ReviewItem reviews={data || []} /> */}

        </Carousel>




      </Layout >
      <Footer style={{ color: "white", backgroundColor: 'black' }}>in footer</Footer>




    </>
  )
}


export default Home;






