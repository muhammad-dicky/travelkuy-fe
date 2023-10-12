import axiosInstance from "@/app/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface errorHandling {
    onError: any
}

export const useReviews = ({ onError }: errorHandling) => {

    const { data, refetch: reviewRefetch } = useQuery({

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