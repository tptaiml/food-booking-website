import React from 'react';

const UserAccount = ({ user }) => {
    return (
        <div>
            <h2>Account Details</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <h3>Order History</h3>
            <ul>
                {user.order_history.map(order => (
                    <li key={order._id}>{order.details}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserAccount;
