import React, { useState } from 'react';
import '../../styles/BookingForm.css';

export function BookingForm({ musician }){
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  musician = {
    name: "Gabby Fonseca",
    genre: "Romantic",
    rating: 5,
    bio: "El mejor del mundo",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logica para enviar la reserva
    alert('Booking Confirmed!');
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3>Book {musician.name}</h3>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <label>
        Notes:
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Any special requests?"
        ></textarea>
      </label>
      <button type="submit">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;
