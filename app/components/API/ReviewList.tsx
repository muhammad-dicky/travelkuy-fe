import axiosInstance from '@/app/lib/axios'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export const ReviewList = () => {
    const { data } = useQuery({
        queryFn: async () => {
            const reviewResponse = await axiosInstance.get("/reviews");
            return reviewResponse;
        },
    })
    return {
        data: data,
    }
}
