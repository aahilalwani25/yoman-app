import React, { useMemo } from 'react'
import CheckoutView from './checkout.view'
import { useAppSelector } from '@/src/redux/hooks';
import { calculateTax } from '@/src/utils/calculate-tax';
import { DELIVERY_CHARGES, TAX_PERCENTAGE } from './checkout.constants';

function CheckoutContainer() {
    const checkoutData = useAppSelector(state => state.cartReducer);

    const proceedToPaymentHandler = () => {

    }

    const tax= useMemo(()=>calculateTax(checkoutData.totalAmount, TAX_PERCENTAGE),[checkoutData.totalAmount])

    const paymentCost: number = useMemo(() => (
        (checkoutData.totalAmount + tax + DELIVERY_CHARGES)),
        [checkoutData.totalAmount, checkoutData.totalQuantity])

    return (
        <CheckoutView
            proceedToPaymentHandler={proceedToPaymentHandler}
            paymentCost={paymentCost}
            tax={tax}
            checkoutData={checkoutData} />
    )
}

export default CheckoutContainer
