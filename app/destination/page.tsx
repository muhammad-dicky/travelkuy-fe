'use client'
import Link from 'next/link'
import React from 'react'
import { useProductById } from '../components/API/homePage/useProducts';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../lib/axios';
import { Test } from '../components/index/Navbar';
interface ProductsQueryOptions {
    onError: any,
    key: string,
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

            <Test />
            {/* <div>ini halaman destination dengan id : {id}</div> */}
            ini halaman destinationwasdasdasdwasdsd
            <Link href="/">Kembali ke halaman Index</Link>
        </>
    )
}

export default Product
