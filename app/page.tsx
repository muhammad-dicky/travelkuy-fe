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

  const [isModalOpen, setIsModalOpen] = useState(false);
  var [date, setDate] = useState(new Date());

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);

  }
  const handleCancel = () => {
    setIsModalOpen(false);
  }

  useEffect(() => {

    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  });


  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }} />

        <Layout >
          <Header style={{ display: 'flex', marginTop: '20px' }}>
            <Col sm={12} md={8} lg={4} >
              <Title style={titleStyle} level={2}>TRAVELKUY</Title>
            </Col>
            <Col sm={5} md={5} lg={5} className='hidden md:block  lg:block '>
              <Menu mode='horizontal' style={menuStyle}>
                <Space>
                  <Link href={'#'}>HOME</Link>
                  <Link href={'#'}>SERVICE</Link>
                  <Link href={'#'}>BOOKING</Link>
                </Space>
              </Menu>
            </Col>
            {/* INI MODAL UNTUK MOBILE */}
            <Col className='md:hidden lg:hidden text-right' span={12} sm={13}>
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'end' }}>
                <Button onClick={showModal}>
                  <AlignRightOutlined />
                </Button>
              </div>
              <Modal title="MENU" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={300} footer >
                <p style={{ marginBottom: "5px" }}><Link href={"#"}>HOME</Link></p>
                <p style={{ marginBottom: "5px" }}><Link href={"#"}>SERVICE</Link></p>
                <p style={{ marginBottom: "5px" }}> <Link href={"#"}>BOOKING</Link></p>

              </Modal>

            </Col>
          </Header>

          <p>asd</p>
        </Layout>



        <Row className='mt-20 m-10 ml-20'>
          <Col span={20}>
            <div style={{
              backgroundColor: 'rgba(128, 128, 128, 0.5)', display: 'inline-block', borderRadius: '20px', padding: '10px', fontSize: "12px", color: "white"
            }} ><p suppressHydrationWarning >{date.toLocaleString()}</p>
            </div>
            <Title style={{ ...titleStyle, fontFamily: "sans-serif", fontSize: "50px" }}>JOURNEY <br />BALI ISLAND</Title>
            <Button style={{ borderRadius: "20px", backgroundColor: "white", fontWeight: "bold" }}>BOOKING NOW</Button>
          </Col>
          <Col span={4}>
            <Menu mode='vertical' style={{ backgroundColor: 'transparent', textAlign: 'right' }}>
              <li><Link href={"#"}><InstagramOutlined style={iconStyleHeader} /></Link></li>
              <li><Link href={"#"}><FacebookOutlined style={iconStyleHeader} /></Link></li>
              <li> <Link href={"#"}><TwitterOutlined style={iconStyleHeader} /></Link></li>

              <li><Image alt='arrow' src={"/panah.png"} width={100} height={100} /></li>
            </Menu>
          </Col>
        </Row>
      </div>

      <Layout>
        <Sider>sider kanan</Sider>
        <Content>wasd
          {/* <Image src={"/bg.jpg"} alt={'desk'} width={500} height={100} /> */}
        </Content>




      </Layout >
      <Footer>in footer</Footer>




    </>
  )
}

export default Home;

