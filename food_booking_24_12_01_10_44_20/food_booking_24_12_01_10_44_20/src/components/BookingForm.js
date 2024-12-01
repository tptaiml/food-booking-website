import React, { useState } from 'react';

const BookingForm = ({ onSubmit }) => {
    const [timeSlot, setTimeSlot] = useState('');
    const [tablePreference, setTablePreference] = useState('');
    const [specialRequest, setSpecialRequest] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ timeSlot, tablePreference, specialRequest });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Select Time Slot:
                <input type="time" value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} required />
            </label>
            <label>
                Table Preference:
                <input type="text" value={tablePreference} onChange={(e) => setTablePreference(e.target.value)} />
            </label>
            <label>
                Special Requests:
                <textarea value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)} />
            </label>
            <button type="submit">Book Now</button>
        </form>
    );
};

export default BookingForm;
