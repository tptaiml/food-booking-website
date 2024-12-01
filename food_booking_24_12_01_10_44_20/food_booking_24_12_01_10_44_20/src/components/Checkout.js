import React from 'react';

const Checkout = ({ orderSummary, paymentDetails, onPaymentSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onPaymentSubmit(paymentDetails);
    };

    return (
        <div>
            <h2>Order Summary</h2>
            <ul>
                {orderSummary.map(item => (
                    <li key={item.id}>{item.name} - ${item.price.toFixed(2)}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <label>
                    Payment Method:
                    <select>
                        <option value="credit_card">Credit Card</option>
                        <option value="paypal">PayPal</option>
                    </select>
                </label>
                <button type="submit">Pay Now</button>
            </form>
        </div>
    );
};

export default Checkout;
