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
import { useProductById, useProducts } from './components/API/homePage/useProducts'
import { Product, Review } from './components/API/types'
import { useParams } from 'next/navigation'
import { Test } from './components/index/Navbar'





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
interface productItems {
  id: number;
  img: string;
  rating: number;
  price: string;
  description: string;
}
interface ProductListProps {
  products: Product[];
}

interface ReviewListProps {
  reviews: Review[];
}
// Buat tipe tambahan untuk opsi pemanggilan useReviews
interface ReviewsQueryOptions {
  key: string;
}

const cardStyle = {
  color: 'white', fontWeight: 'bold', borderRadius: '20px'
}



const Home: React.FC = () => {





  // const {data} = useParams();


  return (
    <>

      <Layout>


        <HeaderHero />
        <CardImageTitle />
        <CardImage />
        <MidCard />
        <CardImageTitleDestination />
        <CardOurDestination />
        <ReviewItem />

        <Link href={'/destination'}>
          <Button>wasd</Button></Link>


      </Layout >
      <Footer style={{ color: "white", backgroundColor: 'black' }}>in footer</Footer>




    </>
  )
}


export default Home;






