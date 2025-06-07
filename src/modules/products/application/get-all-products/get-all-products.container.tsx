import React from 'react'
import GetAllProductsView from './get-all-products.view';
import { ProductResponse } from '../../domain/products';

interface Props {
    productData: ProductResponse[]
}

function GetAllProductContainer({ ...props }: Props) {
    return (
        <GetAllProductsView {...props} />
    )
}

export default GetAllProductContainer
