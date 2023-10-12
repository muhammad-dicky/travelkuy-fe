import axiosInstance from "@/app/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface ReviewsQueryOptions {
    onError: any,
    key: string,
}

export const useReviews = ({ onError, key }: ReviewsQueryOptions) => {

    const { data, refetch: reviewRefetch } = useQuery({
        queryKey: ['reviews', key],
        queryFn: async () => {
            const reviewResponse = await axiosInstance.get('/reviews');
            return reviewResponse.data;
        }, onError,
    })


    return {
        data: data,
        refetch: reviewRefetch,
    }
}