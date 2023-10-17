'use client'
import { AlignRightOutlined } from '@ant-design/icons';
import { Button, Col, Layout, Menu, Modal, Row, Space, Typography } from 'antd'
import { Header } from 'antd/es/layout/layout'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const { Title, Text } = Typography;

const menuStyle = {
    display: 'flex',
    justifyContent: 'start',
    backgroundColor: 'transparent',
    color: "black",
    marginLeft: '10px'
}
const buttonStyle = {
    backgroundColor: '#1E1E1E', borderRadius: '30px', height: '40px', color: 'white'
}
const titleStyle = {
    fontWeight: 'bold', color: 'black'
}
const iconStyleHeader = {
    color: "white", fontSize: '20px', marginBottom: '10px'
}

export const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    }
    return (
        <>
            <Layout>
                <Header className='items-center' style={{ display: 'flex', marginTop: '20px', backgroundColor: 'transparent' }}>


                    <Col sm={12} md={8} lg={4} >
                        <Link href={'/'}>
                            <Title style={titleStyle} level={3}>TRAVELKUY</Title></Link>
                    </Col>
                    <Col sm={5} md={5} lg={17} className='hidden md:block  lg:block '>
                        <Menu mode='horizontal' style={menuStyle}>
                            <Space>
                                <Link href={'#'} style={menuStyle}>HOME</Link>
                                <Link href={'#'} style={menuStyle}>SERVICE</Link>
                                <Link href={'#'} style={menuStyle}>BOOKING</Link>
                            </Space>
                        </Menu>
                    </Col>
                    <Col span={2} className='hidden md:block'>
                        <Link href={'login'}>
                            <Button style={buttonStyle} >Sign up</Button></Link>
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
                            <p style={{ marginBottom: "5px" }}> <Link href={"login"}>LOGIN</Link> or <Link href={"#"}>REGISTER</Link></p>

                        </Modal>

                    </Col>
                </Header>

            </Layout>
        </>
    )
}
