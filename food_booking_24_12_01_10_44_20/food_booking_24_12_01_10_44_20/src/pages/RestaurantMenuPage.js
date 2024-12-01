import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMenu } from '../utils/api';
import MenuItem from '../components/MenuItem';

const RestaurantMenuPage = () => {
    const { restaurantId } = useParams();
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const loadMenu = async () => {
            const data = await fetchMenu(restaurantId);
            setMenu(data);
        };
        loadMenu();
    }, [restaurantId]);

    const addToCart = (item) => {
        console.log("Added to cart:", item);
    };

    return (
        <div className="container">
            <h1>Menu</h1>
            <div className="menu-grid">
                {menu.map(item => (
                    <MenuItem key={item._id} item={item} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenuPage;
