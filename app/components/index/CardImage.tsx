import { Col, Row, Typography } from 'antd';
import React from 'react'

interface CardImageSmallProps {
    imageUrl: string;
}
interface CardImageBigProps {
    imageUrl: string;
    title: string;
    description: string;
}
const { Title, Text } = Typography;

export const CardImageTitle = () => {
    return (
        <Row className='mt-20'>
            <Col span={2} lg={3} ></Col>
            <Col span={12} md={11} lg={11}>
                <p>Best location</p>
                <Title style={{ fontWeight: 'bold' }}>Indonesian tourism</Title>
            </Col>
            <Col span={8} md={9} lg={8}>
                Extraordinary natural beauty, enjoy the rich culture, and experience the friendliness of the local people.
            </Col>
            <Col span={2}></Col>
        </Row>
    )
}

export const CardImage = () => {
    return (
        <div className="container mx-auto px-5 py-0 lg:px-32 lg:pt-24">
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                    <CardImageSmall imageUrl='/card1.jpg' />
                    <CardImageSmall imageUrl='/card2.jpg' />

                    <CardImageBig imageUrl='/card3.jpg' title='Bromo, East Java' description='Bromo Tengger Tour' />
                </div>
                <div className="flex w-1/2 flex-wrap">
                    <CardImageBig imageUrl='/card4.jpg' title='Uluwatu, Bali' description='Bali Beach Tourism' />
                    <CardImageSmall imageUrl='/card5.jpg' />
                    <CardImageSmall imageUrl='/card6.jpg' />
                </div>
            </div>
        </div>
    )
}

export const CardImageSmall = ({ imageUrl }: CardImageSmallProps) => {
    return (
        <div className="w-1/2 p-1 md:p-2">
            <div className='relative group'>
                <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-400"
                    src={imageUrl} />

            </div>
        </div>
    )
}

export const CardImageBig = ({ imageUrl, title, description }: CardImageBigProps) => {
    return (
        <div className="w-full p-1 md:p-2">
            <div className='relative group'>
                <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray"
                    src={imageUrl} />
                <div className='absolute bottom-0 left-0 w-full text-white p-2'>
                    <p >
                        {title}
                    </p>
                    <p style={{ fontWeight: 'bold' }}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}


