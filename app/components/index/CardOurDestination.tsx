import { Rate } from 'antd';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

interface imgCardCarousel {
    url: string;
    rating: number;
    price: string;
    description: string;
}

const cardStyle = {
    color: 'white', fontWeight: 'bold', borderRadius: '20px'
}


export const CardOurDestination: React.FC = () => {

    const imgCardCarousel: imgCardCarousel[] = [
        {
            url: '/potrait1.jpg',
            rating: 4.5,
            price: '$285',
            description: 'Bali Tour Package'
        },
        {
            url: '/potrait2.jpg',
            rating: 4,
            price: '$340',
            description: 'Baliiiii'
        },
        {
            url: '/potrait3.jpg',
            rating: 3.5,
            price: '$200',
            description: 'wasadasd',
        },
        {
            url: '/potrait4.jpg',
            rating: 2,
            price: '$100',
            description: 'awdjkgsnskfjn'
        },
        {
            url: '/potrait5.jpg',
            rating: 1,
            price: '$500',
            description: 'edsdimid'
        },
        {
            url: '/potrait6.jpg',
            rating: 4.5,
            price: '$100',
            description: 'bromo'
        },
    ];
    return (
        <>
            <div className="container mb-0 " style={{ height: '500px' }}>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3}

                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        enabled: true
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    {imgCardCarousel.map((content, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className='relative' style={{ borderRadius: '30px' }}>
                                    <img src={content.url} alt="" />
                                    <p className='absolute  p-3 m-2  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20' style={{ ...cardStyle, top: '0', left: '0' }}>

                                        <Rate allowHalf defaultValue={content.rating} />
                                    </p>
                                    <div className='absolute  p-3  m-2 left-0 bottom-0 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20' style={{ ...cardStyle, width: '80%' }}>
                                        <p>{content.price}</p>
                                        <p>{content.description}</p>
                                    </div></div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <button className='btn btn-lg z-10' style={{ color: 'white', borderRadius: '20px', width: '20%', margin: '0 auto', }}>View More</button>

        </>
    )
}
