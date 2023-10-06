'use client'
import Image from 'next/image'
import Link from 'next/link'
import Posts from './posts/page'
import { Button, Card, Col, DatePicker, Menu, Modal, Row, Space, Typography, theme } from 'antd'
import Layout, { Content, Footer, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import { grey } from '@ant-design/colors'
import { useState, useEffect, useRef } from 'react'
import { AlignRightOutlined, ArrowDownOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons'
import dynamic from 'next/dynamic'
import HeaderHero from './components/index/HeaderHero'
import CardList from './components/Posts/CardList'
import { CardImageSmall, CardImageBig } from './components/index/CardImage'

const { Title, Text } = Typography;
const { Meta } = Card;



const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <HeaderHero />

        {/* batas atas  */}
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <CardImageSmall imageUrl='/card1.jpg' title='Bromo, East Java' description='Bromo Tengger Tour' />
              <CardImageSmall imageUrl='/card2.jpg' title='Bromo, East Java' description='Bromo Tengger Tour' />

              <CardImageBig imageUrl='/card3.jpg' title='wasd' description='wasd' />
            </div>
            <div className="flex w-1/2 flex-wrap">
              <CardImageBig imageUrl='/card4.jpg' title='wasd' description='wasd' />
              <CardImageSmall imageUrl='/card5.jpg' title='Bromo, East Java' description='Bromo Tengger Tour' />
              <CardImageSmall imageUrl='/card6.jpg' title='Bromo, East Java' description='Bromo Tengger Tour' />
            </div>
          </div>
        </div>





        <Row className='mt-20 m-10 ml-20' >
          <Col className='ContentLeft' span={12}>
            <p>20-24 DECEMBER - 4 DAY 3 NIGHT</p>
          </Col>
          <Col className='ContentRight hidden md:block  lg:block' span={12}>wasdasd</Col>
        </Row>

      </Layout >
      <Footer style={{ color: "grey" }}>in footer</Footer>




    </>
  )
}


export default Home;

