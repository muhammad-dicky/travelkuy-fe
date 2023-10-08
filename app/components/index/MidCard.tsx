import React from 'react'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PaymentIcon from '@mui/icons-material/Payment';
import MapIcon from '@mui/icons-material/Map';
import { Card, Carousel, Col, Row, Typography } from 'antd';

const { Title, Text } = Typography;

const imageCarousel = {
    borderRadius: 15,
}

const cardStyle = {
    backgroundColor: 'transparent'
}
interface cardContent {
    title: string;
    description: string;
    icon: React.ReactNode;
}
interface imgCarousel {
    url: string;
}

export const MidCard: React.FC = () => {
    const cardContent: cardContent[] = [
        {
            title: 'Find your destination',
            description: 'Embark on a journey to discover your dream destination, where adventure and relaxation await',
            icon: <TravelExploreIcon />
        },
        {
            title: 'Book a ticket',
            description: 'Ensure a smooth travel experience by booking tickets to your preferred destination via our booking form',
            icon: <ConfirmationNumberIcon />
        },
        {
            title: 'Make payment',
            description: 'We offer a variety of payment options to meet your preferences and ensure a hassle-free transaction process',
            icon: <PaymentIcon />
        },
        {
            title: 'Explore destination',
            description: 'You&apos;ll be immersed in a captivating tapestry of sights, sounds and tastes, as you wind your way through the ancient streets',
            icon: <MapIcon />
        },
    ]
    const imgCarousel: imgCarousel[] = [
        {
            url: '/potrait1.jpg'
        },
        {
            url: '/potrait2.jpg'
        },
        {
            url: '/potrait3.jpg'
        },
    ]
    const imgCarouselMob: imgCarousel[] = [
        {
            url: '/potrait4.jpg'
        },
        {
            url: '/potrait5.jpg'
        },
        {
            url: '/potrait6.jpg'
        }
    ]

    return (
        <>

            <Row className='mt-20'>
                <Col span={2}></Col>
                <Col span={9}>
                    <Carousel autoplay>
                        {imgCarousel.map((content, index) => (
                            <div key={index}>
                                <img src={content.url} alt="" style={imageCarousel} />
                            </div>
                        ))}
                    </Carousel>
                    <div className='sm:hidden mt-9'>
                        <Carousel autoplay >
                            {imgCarouselMob.map((content, index) => (
                                <div key={index}>
                                    <img src={content.url} alt="" />
                                </div>
                            ))}
                        </Carousel></div>
                </Col>



                <Col span={10} className='ml-7'>


                    <p>How it works</p>
                    <p className='md:hidden ' style={{ fontWeight: 'bold', color: '#1E1E1E', fontSize: '17px' }}>One click for you</p>
                    <Title className='hidden md:block  lg:block '>One click for you</Title>
                    {cardContent.map((content, index) => (
                        <Card key={index} className='mb-3' hoverable bordered={false} style={cardStyle}>
                            {content.icon}
                            <b>{content.title} </b>
                            <p className='hidden md:block' style={{ fontSize: '14px' }}>{content.description}</p>
                        </Card>
                    ))}
                </Col>
                <Col span={2}></Col>
            </Row>


        </>
    )
}
