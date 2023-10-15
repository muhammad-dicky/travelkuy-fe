// types.ts

export interface Review {
    id: number;
    name: string;
    status: string;
    description: string;
}


export interface Product {
    map(arg0: (product: Product) => any): unknown;
    id: number;
    img: string;
    rating: number;
    price: string;
    description: string;
    name: string;
    categories: string;
}