import { UserOutlined } from '@ant-design/icons';
import { Avatar, Carousel, Col, Row } from 'antd'
import React from 'react'

interface reviewItems {
    profile: React.ReactNode;
    name: string;
    status: string;
    description: string;
}

export const ReviewItem: React.FC = () => {
    const reviewItems = [
        {
            profile: <UserOutlined />,
            name: 'Donald Sullivan',
            status: 'Founder Fike',
            description: 'This travel website is very informatife and easy to use. i like how they present various destination options and travel packages with clear details. Offerin pictures and destination descriptions helps me decide where i want to visit. Additionally, the ability to compare prices and reviews from other users is very helpful in decision making.'
        },
        {
            profile: <UserOutlined />,
            name: 'Muhammad Dicky',
            status: 'Web Programmer',
            description: 'jadi ceritanya ini adalah sebuah review dari sebuah web yang udah aku buat dengan data dummy tapi bentuknya sudah terformat dengan map sehingga ntar tinggal panggil aja data dari database'
        }
    ]
    return (
        <>
            <Carousel autoplay className='mt-60 mb-60'>
                {reviewItems.map((content, index) => (
                    <div key={index}>
                        <Row >
                            <Col span={2}></Col>
                            <Col span={20} style={{ margin: '0 auto' }}>
                                <Row>
                                    <Avatar size="large" style={{ margin: '0 auto' }} icon={content.profile} />
                                    <div className='text-center' style={{ margin: '0 auto' }}>
                                        <b >{content.name}</b>
                                        <p>{content.status}</p>
                                        <p >{content.description}</p>
                                    </div>
                                </Row>
                            </Col>
                            <Col span={2}></Col>
                        </Row>
                    </div>
                ))}

            </Carousel>

        </>
    )
}
