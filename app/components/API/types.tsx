// types.ts

export interface Review {
    id: number;
    name: string;
    status: string;
    description: string;
}


export interface Product {
    id: number;
    img: string;
    rating: number;
    price: string;
    description: string;
}