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
import { CardImage, CardImageTitle } from './components/index/CardImage'
import { Carousel as AntCarousel } from 'antd';
import type { DotPosition } from 'antd/es/carousel';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PaymentIcon from '@mui/icons-material/Payment';
import MapIcon from '@mui/icons-material/Map';


const { Title, Text } = Typography;
const { Meta } = Card;

const contentStyle: React.CSSProperties = {
  height: 'auto',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79', borderRadius: '15px'
};


const Home: React.FC = () => {


  return (
    <>
      <Layout>
        <HeaderHero />
        <CardImageTitle />
        <CardImage />


        {/* batas ulang */}
        <Row className='mt-20'>
          <Col span={2}></Col>
          <Col span={9}>
            <Carousel autoplay>
              <div>
                <h3 style={contentStyle}><img src="/potrait1.jpg" alt="" style={{ borderRadius: 15 }} />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}><img src="/potrait2.jpg" alt="" style={{ borderRadius: 15 }} /></h3>
              </div>
              <div>
                <h3 style={contentStyle}><img src="/potrait3.jpg" alt="" style={{ borderRadius: 15 }} /></h3>
              </div>
            </Carousel>
            <div className='sm:hidden mt-9'>
              <Carousel autoplay >
                <div>
                  <h3 style={contentStyle}><img src="/potrait4.jpg" alt="" style={{ borderRadius: 15 }} />
                  </h3>
                </div>
                <div>
                  <h3 style={contentStyle}><img src="/potrait5.jpg" alt="" style={{ borderRadius: 15 }} /></h3>
                </div>
                <div>
                  <h3 style={contentStyle}><img src="/potrait6.jpg" alt="" style={{ borderRadius: 15 }} /></h3>
                </div>
              </Carousel></div>
          </Col>

          <Col span={10} className='ml-7'>
            <p>How it works</p>
            <p className='md:hidden ' style={{ fontWeight: 'bold', color: '#1E1E1E', fontSize: '17px' }}>One click for you</p>
            <Title className='hidden md:block  lg:block '>One click for you</Title>
            {/* <p><TravelExploreIcon style={{ color: '#1E1E1E' }} /></p> */}




            <Card className='mb-3' hoverable bordered={false} style={{ backgroundColor: 'transparent' }}>
              <TravelExploreIcon style={{ color: '#1E1E1E' }} />
              <b> Find your destination</b>
              <p className='hidden md:block' style={{ fontSize: '14px' }}>Embark on a journey to discover your dream destination, where adventure and relaxation await</p>
            </Card>
            <Card className='mb-3' hoverable bordered={false} style={{ backgroundColor: 'transparent' }}>
              <ConfirmationNumberIcon style={{ color: '#1E1E1E' }} />
              <b> Book a ticket</b>
              <p className='hidden md:block' style={{ fontSize: '14px' }}>Ensure a smooth travel experience by booking tickets to your preferred destination via our booking form</p>
            </Card>
            <Card className='mb-3' hoverable bordered={false} style={{ backgroundColor: 'transparent' }}>
              <PaymentIcon style={{ color: '#1E1E1E' }} />
              <b> Make payment</b>
              <p className='hidden md:block' style={{ fontSize: '14px' }}>We offer a variety of payment options to meet your preferences and ensure a hassle-free transaction process</p>
            </Card>
            <Card hoverable bordered={false} style={{ backgroundColor: 'transparent' }}>
              <MapIcon style={{ color: '#1E1E1E' }} />
              <b> Explore destination</b>
              <p className='hidden md:block' style={{ fontSize: '14px' }}>You&apos;ll be immersed in a captivating tapestry of sights, sounds and tastes, as you wind your way through the ancient streets</p>
            </Card>




          </Col>
          <Col span={2}></Col>
        </Row>


        {/* batas bawah percobaan */}



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






