import axiosInstance from '@/app/lib/axios'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useState } from 'react'
import { useProductById } from '../../components/API/homePage/useProducts';
import { Product } from '@/app/components/API/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Col, Rate, Row, Space, Typography } from 'antd';
import { useRouter } from 'next/router';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import HeaderHero from '@/app/components/index/HeaderHero';
import { GetServerSideProps } from 'next';
import { Navbar } from '@/app/components/index/Navbar';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { LoveButton } from '@/app/components/detailProduct/detailProductComponent';


interface ProductsQueryOptions {
    key: string;
}
interface productItems {
    id: number;
    img: string;
    rating: number;
    price: string;
    description: string;
    name: string;
    categories: string;
}
interface CardImageSmallProps {
    imageUrl: string;
}
interface CardImageBigProps {
    imageUrl: string;
    title: string;
    description: string;
}
const cardStyle = {
    borderRadius: '10px',

}



const Page = async ({ params }: {
    params: { id: string }
}) => {
    const { id } = params;

    const productResponse = await axiosInstance.get(`/products/${id}`);
    const productDetail: Product = productResponse.data;

    const renderCard = () => {
        return productDetail?.map((product: Product) => {
            return (
                <>

                </>
            )
        })
    };




    return (
        <>
            <Navbar />
            <div className='container mx-auto px-5 py-0 lg:px-32 lg:pt-24'>
                <p className='text-5xl' style={{ fontWeight: 'bold', color: '#181818' }}>{productDetail.name}</p>
                <Row style={{ fontWeight: 'bold', color: '#181818,', marginTop: '10px' }}>
                    <Space>
                        <p><FmdGoodIcon /> {productDetail.categories[0]}</p>
                        <div><LocalOfferIcon />{productDetail.categories[1]}</div>
                    </Space>
                </Row>

            </div>


            <Row >
                <Col span={15} className='hidden sm:block'>
                    <div className="container mx-auto px-5 py-0 lg:px-32 lg:pt-0">
                        <div className="flex">
                            <div className="w-1/2 p-4">
                                <img src={`/${productDetail.img[0]}`} alt="Big Card" className="w-full object-cover " style={cardStyle} />
                            </div>
                            <div className="w-1/2 p-4">
                                <div className="flex flex-wrap -mx-2">
                                    {productDetail.img.slice(1, 5).map((img: any, index: React.Key | null | undefined) => (
                                        <div className="w-1/2 p-2" key={index}>
                                            <img src={`/${img}`} alt={`Small Card ${index + 1}`} className="w-full h-full object-contain" style={cardStyle} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col span={9}>
                    <IosShareIcon />Share <FavoriteBorderIcon />Save
                    <LoveButton />
                </Col>
            </Row>




            <h1>ini adalah data {productDetail.id}</h1>
            <h1>ini adalah data {productDetail.img}</h1>
            <h1>ini adalah data {productDetail.price}</h1>
            <h1>ini adalah data {productDetail.description}</h1>
            <Button href='/'>balik home</Button>
        </>
    );
}



export default Page