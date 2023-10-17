import Image from 'next/image'
import { AlignRightOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons'
import { Button, Col, Layout, Menu, Modal, Row, Space, Typography } from 'antd'
import { Header } from 'antd/es/layout/layout'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'

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

export default function HeaderHero() {
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
        <div className="relative h-screen">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }} />

            <Navbar />


            <Row className='mt-20 m-10 ml-15 md:ml-24'>
                <Col span={20}>
                    <div className=' bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20' style={{
                        display: 'inline-block', borderRadius: '20px', padding: '10px', fontSize: "12px", color: "white"
                    }} ><p suppressHydrationWarning >{date.toLocaleString()}</p>
                    </div>
                    <Title style={{ ...titleStyle, fontFamily: "sans-serif", fontSize: "50px" }}>JOURNEY <br />BALI ISLAND</Title>
                    <Button style={{ borderRadius: "20px", backgroundColor: "#1e1e1e", fontWeight: "bold", color: 'white', height: '40px' }}>BOOKING NOW</Button>

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
        </div >
    )
}
