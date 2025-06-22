
export interface ProductCart{
    productId: string
    quantity: number
    amount: number
    image: string
    title: string
}

export interface ProductCartState{
    totalAmount: number
    products: ProductCart[]
    totalQuantity: number
}

export const initialState: ProductCartState={
    totalAmount:0,
    products: [],
    totalQuantity:0
}