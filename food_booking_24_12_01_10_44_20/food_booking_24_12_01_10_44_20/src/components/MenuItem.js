import React from 'react';

const MenuItem = ({ item, addToCart }) => {
    return (
        <div className="card">
            <img src={item.imageUrl} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
    );
};

export default MenuItem;
