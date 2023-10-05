'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from 'postcss'
import Posts from './posts/page'
import { Button, Col, DatePicker, Menu, Modal, Row, Space, Typography, theme } from 'antd'
import Layout, { Content, Footer, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import { grey } from '@ant-design/colors'
import { useState, useEffect } from 'react'
import { AlignRightOutlined, ArrowDownOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons'
import dynamic from 'next/dynamic'
import HeaderHero from './components/index/HeaderHero'

const { Title, Text } = Typography;
const menuStyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  color: "white",
}
const titleStyle = {
  fontWeight: 'bold', color: 'white'
}
const iconStyleHeader = {
  color: "white", fontSize: '20px', marginBottom: '10px'
}

const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <HeaderHero />


        <Row className='mt-20 m-10 ml-20' style={{ backgroundColor: "tomato" }}>
          <Col className='ContentLeft' span={12}>wasdasd</Col>
          <Col className='ContentRight hidden md:block  lg:block' span={12}>wasdasd</Col>
        </Row>

      </Layout >
      <Footer style={{ color: "grey" }}>in footer</Footer>




    </>
  )
}

export default Home;

