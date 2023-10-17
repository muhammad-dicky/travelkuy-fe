'use client'
import Link from 'next/link'
import React from 'react'
import { useProductById } from '../components/API/homePage/useProducts';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../lib/axios';
import { Col, Row, Tabs, type TabsProps } from 'antd';
import { Box, Tab, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GppGoodIcon from '@mui/icons-material/GppGood';
import EditNoteIcon from '@mui/icons-material/EditNote';
import GroupsIcon from '@mui/icons-material/Groups';


interface ProductsQueryOptions {
    onError: any,
    key: string,
}
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const Product = () => {

    // const router = useRouter();
    // const { id } = router.query;
    // const { data: dataProductById } = useProductById({
    //     onError: () => {
    //         console.log('error');
    //     },
    //     key: 'productid'
    // })
    const useProductById = ({ onError, key }: ProductsQueryOptions) => {
        const { data } = useQuery({
            queryKey: ['product', key],
            queryFn: async (id) => {
                const productResponse = await axiosInstance.get(`/products/${id}`)
                return productResponse.data;
            }
        })
        return {
            data: data,
        }
    }

    return (

        <>

            {/* <div>ini halaman destination dengan id : {id}</div> */}
            ini halaman destinationwasdasdasdwasdsd
            <Link href="/">Kembali ke halaman Index</Link>
        </>
    )
}

export const OverviewTabs: React.FC = () => {
    return (

        <Row className='w-full px-10 md:px-20'>
            <Col span={12} >
                <div>
                    <h1 className='font-bold'><CalendarMonthIcon style={{ color: '#5A6CFF', marginRight: '10px' }} />
                        TravelStyle:1 - to - Foursomethings
                    </h1>
                    <p>Fast, fresh, and fun adventures that never slow down, made for young, budget-minded travellers</p></div>
                <div className='mt-20'>
                    <h1 className='font-bold'><GppGoodIcon style={{ color: '#5A6CFF', fontSize: '25px', marginRight: '10px' }} />
                        Physical Rating: 2 - Light
                    </h1>
                    <p>Light walking and hiking suitable for most fitness levels. Nothing too challenging.</p></div>
            </Col>
            <Col span={12}>
                <div>
                    <h1 className='font-bold'><EditNoteIcon style={{ color: '#5A6CFF', fontSize: '25px', marginRight: '10px' }} />
                        Service Level: Basic
                    </h1>
                    <p>Simple and clean hotel&apos;s and hostels: affordable public and private transport:lots of optional activities</p></div>
                <div className='mt-20'>
                    <h1 className='font-bold'><GroupsIcon style={{ color: '#5A6CFF', fontSize: '25px', marginRight: '10px' }} />
                        Trip Type: Small Group
                    </h1>
                    <p>Small group experience:Max 20.avg 12.</p></div>
            </Col>
        </Row>
    )
}

export const IncludedTabs: React.FC = () => {
    return (
        <Row className='w-full px-10 md:px-20'>
            <Col span={12} >
                <div>
                    <h1 className='font-bold'><CalendarMonthIcon style={{ color: '#5A6CFF', marginRight: '10px' }} />
                        Includeddddd
                    </h1>
                    <p>Fast, fresh, and fun adventures that never slow down, made for young, budget-minded travellers</p></div>
                <div className='mt-20'>
                    <h1 className='font-bold'><GppGoodIcon style={{ color: '#5A6CFF', fontSize: '25px', marginRight: '10px' }} />
                        Physical Rating: 2 - Light
                    </h1>
                    <p>Light walking and hiking suitable for most fitness levels. Nothing too challenging.</p></div>
            </Col>
            <Col span={12}>
                <div>
                    <h1 className='font-bold'><EditNoteIcon style={{ color: '#5A6CFF', fontSize: '25px', marginRight: '10px' }} />
                        Includedddd
                    </h1>
                    <p>Simple and clean hotel&apos;s and hostels: affordable public and private transport:lots of optional activities</p></div>
                <div className='mt-20'>
                    <h1 className='font-bold'><GroupsIcon style={{ color: '#5A6CFF', fontSize: '25px', marginRight: '10px' }} />
                        Trip Type: Small Group
                    </h1>
                    <p>Small group experience:Max 20.avg 12.</p></div>
            </Col>
        </Row>
    )
}

export const DetailsTabs: React.FC = () => {
    return (
        <h1>wasdasdasdasdassddas</h1>
    )
}



export const TabsDescription: React.FC = () => {



    const itemsTabs: TabsProps['items'] = [
        {
            key: '1',
            label: 'Overview',
            children: <OverviewTabs />,
        },
        {
            key: '2',
            label: "What's Included",
            children: <IncludedTabs />,
        },
        {
            key: '3',
            label: 'Tour Details',
            children: <DetailsTabs />,
        },
    ]


    return (
        <>
            <Tabs
                defaultActiveKey="1"
                centered
                items={itemsTabs}
            />

        </>
    )


}

export default Product
