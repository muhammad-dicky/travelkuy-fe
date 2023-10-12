import axiosInstance from "@/app/lib/axios"
import { useQuery } from "@tanstack/react-query"


interface ProductsQueryOptions {
    onError: any,
    key: string,
}


export const useProducts = ({ onError, key }: ProductsQueryOptions) => {
    const { data, refetch: productRefetch } = useQuery({
        queryKey: ['products', key],
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