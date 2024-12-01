import React, { useState } from 'react';
import Checkout from '../components/Checkout';

const CheckoutPage = () => {
    const [orderSummary, setOrderSummary] = useState([]);
    const [paymentDetails, setPaymentDetails] = useState({});

    const handlePaymentSubmit = (paymentData) => {
        console.log("Payment data submitted:", paymentData);
    };

    return (
        <div className="container">
            <h1>Checkout</h1>
            <Checkout orderSummary={orderSummary} paymentDetails={paymentDetails} onPaymentSubmit={handlePaymentSubmit} />
        </div>
    );
};

export default CheckoutPage;
