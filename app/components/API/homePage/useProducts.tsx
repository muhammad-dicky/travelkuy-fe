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
            const productResponse = await axiosInstance.get('/products');
            return productResponse.data;
        }, onError,

    })

    return {
        data: data,
        refetch: productRefetch,
    }
}

export const useProductById = ({ onError, key }: ProductsQueryOptions) => {
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