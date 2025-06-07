import React from 'react'
import ProductDetailView from './product-detail.view'
import { useLocalSearchParams } from 'expo-router'
import { useQuery } from '@tanstack/react-query';
import { getProductDetail } from '../../domain/products.action';
import { outputs } from '@/src/config/outputs';
import { ProductResponse } from '../../domain/products';

function ProductDetailContainer() {
    const {productId} = useLocalSearchParams();

    const {data}= useQuery({
        queryKey:['product-detail'],
        queryFn: ()=>getProductDetail(outputs.productOutput)(parseInt(productId as string))
    })

    return (
        <ProductDetailView {...data as ProductResponse}/>
    )
}

export default ProductDetailContainer
