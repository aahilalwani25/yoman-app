import React from 'react'
import GetUserCartView from './get-user-cart-view'
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks'
import { decreaseQuantity, increaseQuantity, removeItem } from '@/src/redux/cart/actions';

function GetUserCartContainer() {
  const cartData = useAppSelector(state => state.cartReducer);
  const dispatch = useAppDispatch();

  const incrementQuantityIntoCart = (productId: string) => {
    dispatch(increaseQuantity({
      productId: productId,
      quantity: 1
    }))
  }

  const deleteItemFromCart = (productId: string) => {
    dispatch(removeItem({
      productId
    }))
  }

  const decrementQuantityFromCart = (productId: string) => {
    dispatch(decreaseQuantity({
      productId: productId,
      quantity: 1
    }))
  }

  const proceedToCheckoutHandler = () => {

  }

  return (
    <GetUserCartView
      products={cartData.products}
      totalAmount={cartData.totalAmount}
      totalQuantity={cartData.totalQuantity}
      incrementQuantityIntoCart={incrementQuantityIntoCart}
      deleteItemFromCart={deleteItemFromCart}
      decrementQuantityFromCart={decrementQuantityFromCart}
      proceedToCheckoutHandler={proceedToCheckoutHandler}
    />
  )
}

export default GetUserCartContainer
