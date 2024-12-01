import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <Link to="/" className="navbar-brand">Food Booking</Link>
                <div className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/restaurants">Restaurants</Link>
                    <Link to="/login">Login/Signup</Link>
                    <Link to="/cart">Cart</Link>
                </div>
                <input type="text" placeholder="Search for restaurants or dishes" className="search-bar" />
            </nav>
        </header>
    );
};

export default Header;
