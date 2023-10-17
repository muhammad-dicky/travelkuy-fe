import axiosInstance from '@/app/lib/axios'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useState } from 'react'
import { useProductById } from '../../components/API/homePage/useProducts';
import { Product } from '@/app/components/API/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Card, Col, Rate, Row, Space, Tabs, Typography } from 'antd';
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
import StarIcon from '@mui/icons-material/Star';
import type { TabsProps } from 'antd';
import { TabsDescription } from '../page';
import { Footer } from '@/app/components/index/Footer';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


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
const iconStyle = {
    marginLeft: '10px',
    cursor: 'pointer',
    color: 'black',

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
                <Row className='text-lg md:text-xl' style={{ fontWeight: 'bold', color: '#181818,', marginTop: '10px' }}>
                    <Space >
                        <p><FmdGoodIcon /> {productDetail.categories[0]}</p>
                        <div><LocalOfferIcon />{productDetail.categories[1]}</div>
                    </Space>
                </Row>
                <Link href='/'>
                    <h1 className='text-black font-bold' ><ArrowBackIosIcon />Homes</h1></Link>
            </div>


            <Row >
                <Col span={20} md={14} className='hidden sm:block ml-10 md:ml-0'>
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



                <Col span={22} md={10} className='ml-20 md:ml-0'>
                    <Row >
                        <div style={iconStyle} >
                            <IosShareIcon />Share</div>
                        <div style={iconStyle} >
                            <LoveButton /></div></Row>
                    <div className="card w-96 mt-10" style={{ border: "1px solid grey", width: '80%' }}>
                        <div className="card-body" >
                            <h1 className="card-title text-black text-3xl font-bold">4 days - 3 nights</h1>
                            <h2>Bali to Nusa Penida</h2>
                            <div className='text-right'>
                                <StarIcon style={{ color: '#FFCD00' }} />4.72 <b>.</b> 60 reviews</div>
                            <p >From</p>
                            <h1 className='text-black'>$ <span className='font-bold text-5xl'>572</span> USD</h1>

                            <Button className='btn-primary' style={{ borderRadius: '20px' }}>Book now</Button>
                        </div>
                    </div>
                </Col>
            </Row >


            <TabsDescription />
            <div className='px-5 py-60 md:px-40' style={{ color: 'grey' }}>
                <h1> {productDetail.description}</h1>
            </div>



            <Footer />
        </>
    );
}



export default Page