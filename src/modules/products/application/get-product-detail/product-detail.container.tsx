import React from 'react'
import ProductDetailView from './product-detail.view'
import { useLocalSearchParams } from 'expo-router'
import { useQuery } from '@tanstack/react-query';
import { getProductDetail } from '../../domain/products.action';
import { outputs } from '@/src/config/outputs';
import { ProductResponse } from '../../domain/products';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { addItem } from '@/src/redux/cart/actions';

function ProductDetailContainer() {
    const { productId } = useLocalSearchParams();
    const { data } = useQuery({
        queryKey: ['product-detail'],
        queryFn: () => getProductDetail(outputs.productOutput)(parseInt(productId as string))
    })

    const cartData = useAppSelector(state => state?.cartReducer);
    const dispatch = useAppDispatch();
    const isProductAlreadyAddedToCart = cartData?.products?.find(p => p.productId === (productId as string))?.productId !== undefined;

    const addProductToCart = () => {
        dispatch(addItem({
            productId,
            quantity: 1,
            amount: data?.price,
            title: data?.title,
            image: data?.image
        }));
    }

    const removeProductFromCart = () => {
        dispatch(addItem({}))
    }



    return (
        <ProductDetailView
            removeProductFromCart={removeProductFromCart}
            addProductToCart={addProductToCart}
            {...data as ProductResponse}
            isAdded={isProductAlreadyAddedToCart} />
    )
}

export default ProductDetailContainer
