import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="card">
            <img src={restaurant.imageUrl} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
            <p>{restaurant.cuisine_types.join(', ')}</p>
            <Link to={`/restaurants/${restaurant._id}`}>View Menu</Link>
        </div>
    );
};

export default RestaurantCard;
