// components/EventForm.js
import React, { useState } from 'react';
import './EventForm.css';

const EventForm = ({ addEvent }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addEvent({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Create Event</h2>
      <input
        className="form-input"
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="form-textarea"
        placeholder="Event Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button className="form-button" type="submit">
        Add Event
      </button>
    </form>
  );
};

export default EventForm;
