import { Button, Rate } from 'antd';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { useProductById, useProducts } from '../API/homePage/useProducts';
import { Product } from '../API/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
    const router = useRouter();

    const { data: dataProduct, refetch: productRefetch } = useProducts({
        onError: () => {
            console.log('error error product');
        },
        key: 'products'
    });

    const handleViewDetail = (product: Product) => {
        router.push(`../../../../destination/${product.id}`);
        // alert(`sekarang adalah card nomer : ${product.id}`)
    }


    const renderProduct = () => {
        return dataProduct?.map((product: Product) => {
            return (
                <>
                    {/* <Button onClick={(event: React.MouseEvent<HTMLElement>) => handleViewDetail(product)}> */}
                    {/* Lihat card {product.id} */}

                    <SwiperSlide onClick={(event: React.MouseEvent<HTMLElement>) => handleViewDetail(product)} key={product.id}>
                        <div className='relative' style={{ borderRadius: '30px' }}>
                            <img src={product.img} alt="" />
                            <p className='absolute  p-3 m-2  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20' style={{ ...cardStyle, top: '0', left: '0' }}>

                                <Rate disabled defaultValue={product.rating} />
                            </p>

                            <div className='absolute  p-3  m-2 left-0 bottom-0 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20' style={{ ...cardStyle, width: '80%' }}>
                                <p>{product.price}</p>
                                <p>{product.description}</p>
                            </div></div>
                    </SwiperSlide>
                    {/* </Button> */}

                </>
            )
        })
    }



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
                    {renderProduct()}
                    {/* <ProductList products={dataProduct || []} /> */}
                </Swiper>
            </div>

            <button className='btn btn-lg z-10' style={{ color: 'white', borderRadius: '20px', width: '20%', margin: '0 auto', }}>View More</button>
        </>
    )
}
