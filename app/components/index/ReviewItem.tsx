'use client'
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Carousel, Col, Row } from 'antd'
import React from 'react'
import { useReviews } from '../API/homePage/useReviews';

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
    reviews: [];
}

export const ReviewItem: React.FC<ReviewListProps> = ({ reviews }) => {
    // const { data: dataReview, refetch: reviewRefetch } = useReviews({
    //     onError: () => {
    //         console.log('error reviews')
    //     }
    // })

    return (
        <>
            {/* {dataReview?.map((review: reviewItems) => (
                <div key={review.id.toString()}>
                    <div>
                        
                        <img src={review.img} alt={review.name} width={100} height={100} style={{ margin: '0 auto', borderRadius: '100%' }} />
                        <div className='text-center' style={{ margin: '0 auto' }}>
                            <b>{review.name}</b>
                            <p>{review.status}</p>
                            <p>{review.description}</p>
                        </div>
                    </div>
                </div>
            ))} */}

        </>
    )


}
