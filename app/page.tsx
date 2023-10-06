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
import { CardImage, CardImageTitle } from './components/index/CardImage'

const { Title, Text } = Typography;
const { Meta } = Card;



const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <HeaderHero />
        <CardImageTitle />
        <CardImage />






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

