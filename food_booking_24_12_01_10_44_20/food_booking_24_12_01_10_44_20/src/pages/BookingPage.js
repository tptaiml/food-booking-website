import React from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage = () => {
    const handleBookingSubmit = (bookingData) => {
        console.log("Booking data submitted:", bookingData);
    };

    return (
        <div className="container">
            <h1>Book Your Table</h1>
            <BookingForm onSubmit={handleBookingSubmit} />
        </div>
    );
};

export default BookingPage;
