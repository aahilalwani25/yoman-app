export interface ProductResponse{
    id: string
    title: string
    price: number
    description: string
    category: Categories,
    rating: Rating
    image: string
}

export interface Rating{
    rate: number,
    count: number
}

export enum Categories{
    Men_Clothing="men's clothing",
    Jewelery="jewelery",
    Electronics= "electronics",
    Women_Clothing="women's clothing"
}