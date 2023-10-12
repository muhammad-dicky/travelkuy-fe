import axiosInstance from "@/app/lib/axios"
import { useQuery } from "@tanstack/react-query"


interface errorHandling {
    onError: any
}


export const useProducts = ({ onError }: errorHandling) => {
    const { data, refetch: productRefetch } = useQuery({
        queryFn: async () => {
            const productResponse = await axiosInstance('/products');
            return productResponse.data;
        }, onError,
    })

    return {
        data: data,
        refetch: productRefetch,
    }
}