import axiosInstance from '@/app/lib/axios'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'
import { useProductById } from '../../components/API/homePage/useProducts';
import { Product } from '@/app/components/API/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Col, Rate, Row } from 'antd';
import { useRouter } from 'next/router';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'

interface ProductsQueryOptions {
    key: string;
}
interface productItems {
    id: number;
    img: string;
    rating: number;
    price: string;
    description: string;
}
interface CardImageSmallProps {
    imageUrl: string;
}
interface CardImageBigProps {
    imageUrl: string;
    title: string;
    description: string;
}



const Page = async ({ params }: {
    params: { id: string }
}) => {
    const { id } = params;

    const productResponse = await axiosInstance.get(`/products/${id}`);
    const productDetail: productItems = productResponse.data;

    // ini card percobaan
    const CardImage = () => {
        return (
            <>
                <Row >
                    <Col span={15}><div className="container mx-auto px-5 py-0 lg:px-32 lg:pt-24">
                        <div className="flex flex-wrap md:-m-2">
                            {/* cardBesar (Left Side) */}
                            <div className="w-1/2  p-1 md:p-2" id='cardBig'>
                                <div className="relative group">
                                    <img
                                        alt="gallery"
                                        className="block w-full h-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray"
                                        src='/card1.jpg'
                                    />
                                    <div className="absolute bottom-0 left-0 w-full text-white p-2">
                                        <p>Bromo, East Java</p>
                                        <p style={{ fontWeight: 'bold' }}>Bromo Tengger Tour</p>
                                    </div>
                                </div>
                            </div>


                            {/* Right Side (cardKecil1 and cardKecil2) */}
                            <div className="w-1/2">
                                <div className="flex flex-wrap">
                                    <div className="w-1/2 p-1 md:p-2" >
                                        <div className="relative group">
                                            <img
                                                alt="gallery"
                                                className="block h-full w-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-400"
                                                src="/card1.jpg"
                                            />
                                        </div>
                                    </div>

                                    <div className="w-1/2 p-1 md:p-2" >
                                        <div className="relative group">
                                            <img
                                                alt="gallery"
                                                className="block h-full w-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-400"
                                                src="/card1.jpg"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap">
                                    <div className="w-1/2 p-1 md:p-2" >
                                        <div className="relative group">
                                            <img
                                                alt="gallery"
                                                className="block h-full w-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-400"
                                                src="/card1.jpg"
                                            />
                                        </div>
                                    </div>

                                    <div className="w-1/2 p-1 md:p-2" >
                                        <div className="relative group">
                                            <img
                                                alt="gallery"
                                                className="block h-full w-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-400"
                                                src="/card1.jpg"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div></Col>
                    <Col span={9}> ini col kanan</Col>
                </Row>
            </>
        )
    }

    const CardImageSmall = ({ imageUrl }: CardImageSmallProps) => {
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




    // bawah



    return (
        <>

            <Row >
                <Col span={15}><div className="container mx-auto px-5 py-0 lg:px-32 lg:pt-24">
                    <div className="flex flex-wrap md:-m-2">
                        {/* cardBesar (Left Side) */}
                        <div className="w-1/2  p-1 md:p-2" id='cardBig'>
                            <div className="relative group">
                                <img
                                    alt="gallery"
                                    className="block w-full h-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray"
                                    src={productDetail.img}
                                />
                                <div className="absolute bottom-0 left-0 w-full text-white p-2">
                                    <p>Bromo, East Java</p>
                                    <p style={{ fontWeight: 'bold' }}>Bromo Tengger Tour</p>
                                </div>
                            </div>
                        </div>


                        {/* Right Side (cardKecil1 and cardKecil2) */}
                        <div className="w-1/2">
                            <div className="flex flex-wrap">
                                <div className="w-1/2 p-1 md:p-2" >
                                    <div className="relative group">
                                        <img
                                            alt="gallery"
                                            className="block h-full w-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-400"
                                            src="/card1.jpg"
                                        />
                                    </div>
                                </div>

                                <div className="w-1/2 p-1 md:p-2" >
                                    <div className="relative group">
                                        <img
                                            alt="gallery"
                                            className="block h-full w-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-400"
                                            src="/card1.jpg"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="w-1/2 p-1 md:p-2" >
                                    <div className="relative group">
                                        <img
                                            alt="gallery"
                                            className="block h-full w-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-400"
                                            src="/card1.jpg"
                                        />
                                    </div>
                                </div>

                                <div className="w-1/2 p-1 md:p-2" >
                                    <div className="relative group">
                                        <img
                                            alt="gallery"
                                            className="block h-full w-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-400"
                                            src="/card1.jpg"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div></Col>
                <Col span={9}> ini col kanan</Col>
            </Row>



            {/* <CardImage /> */}
            {/* <CardImageTest /> */}

            <img src={productDetail.img} alt="" />
            {/* <h1>pencarian untuk {params.id}</h1> */}
            <h1>ini adalah data {productDetail.id}</h1>
            <h1>ini adalah data {productDetail.img}</h1>
            <h1>ini adalah data {productDetail.price}</h1>
            <h1>ini adalah data {productDetail.description}</h1>
            <Button href='/'>balik home</Button>
        </>
    );
}


export default Page