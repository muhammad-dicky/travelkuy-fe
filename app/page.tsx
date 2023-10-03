'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from 'postcss'
import Posts from './posts/page'
import { Button, Col, DatePicker, Menu, Row, Typography, theme } from 'antd'
import Layout, { Content, Footer, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import { grey } from '@ant-design/colors'

const { Title, Text } = Typography;


const Home: React.FC = () => {
  const rowStyle = {
    backgroundColor: 'white',
    color: 'black'
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout >
        <Header style={{ display: 'flex', backgroundColor: 'white', alignItems: 'center' }}>
          <Title >TRAVELKUY</Title>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['2']}

          />

        </Header>
        <Layout>
          <Sider>sider kanan</Sider>
          <Content>wasd
          </Content>


        </Layout>
        <Footer>in footer</Footer>
      </Layout>



    </>
  )
}

export default Home;

