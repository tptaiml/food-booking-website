import React, { useEffect, useState } from 'react';
import { fetchRestaurants } from '../utils/api';
import RestaurantCard from '../components/RestaurantCard';

const HomePage = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const loadRestaurants = async () => {
            const data = await fetchRestaurants();
            setRestaurants(data);
        };
        loadRestaurants();
    }, []);

    return (
        <div className="container">
            <h1>Featured Restaurants</h1>
            <div className="restaurant-grid">
                {restaurants.map(restaurant => (
                    <RestaurantCard key={restaurant._id} restaurant={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
