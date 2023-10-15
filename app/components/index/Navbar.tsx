'use client'
import { AlignRightOutlined } from '@ant-design/icons';
import { Button, Col, Layout, Menu, Modal, Row, Space, Typography } from 'antd'
import { Header } from 'antd/es/layout/layout'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const { Title, Text } = Typography;

const menuStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    color: "black",
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
                        <Title style={titleStyle} level={3}>TRAVELKUY</Title>
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

            </Layout>
        </>
    )
}
