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

        <div style={{ height: 50 }}></div>

        {/* batas ulang */}
        <Row className='mt-20'>
          <Col span={2}></Col>
          <Col span={10}>

            <Carousel >
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




          </Col>
          <Col span={10} className='ml-10'>
            <p>How it works</p>
            <Title>One click for you</Title>
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






