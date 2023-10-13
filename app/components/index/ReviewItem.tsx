'use client'
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Carousel, Col, Row } from 'antd'
import React from 'react'
import { useReviews } from '../API/homePage/useReviews';
import { Review } from '../API/types';

// interface reviewItems {
//     profile: React.ReactNode;
//     name: string;
//     status: string;
//     description: string;
// }
interface reviewItems {
    id: number;
    img: string;
    name: string;
    status: string;
    description: string;
}
interface ReviewListProps {
    reviews: Review;
}

export const ReviewItem: React.FC = () => {
    const { data: dataReview, refetch: reviewRefetch } = useReviews({
        onError: () => {
            console.log('error reviews');
        },
        key: 'reviews'
    });

    const renderReviews = () => {
        return dataReview?.map((review: Review) => {
            return (
                <>
                    <div key={review.id.toString()}>
                        <Row>
                            <Col span={2}></Col>
                            <Col span={20} style={{ margin: '0 auto' }}>
                                <Row>

                                    <img src={review.img} alt={review.name} width={100} height={100} style={{ margin: '0 auto', borderRadius: '100%' }} />

                                    <div className='text-center' style={{ margin: '0 auto' }}>
                                        <b >{review.name}</b>
                                        <p>{review.status}</p>
                                        <p >{review.description}</p>
                                    </div>
                                </Row>
                            </Col>
                            <Col span={2}></Col>
                        </Row>

                    </div>
                </>
            )
        })
    }

    return (
        <>
            <Carousel autoplay className='mt-60 mb-60'>
                {renderReviews()}

            </Carousel>
        </>
    )


}
