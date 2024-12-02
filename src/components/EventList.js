// components/EventList.js
import React from 'react';
import './EventList.css';

const EventList = ({ events, deleteEvent, bookTicket }) => (
  <div className="event-list-container">
    <h2 className="list-title">Event List</h2>
    {events.length === 0 ? (
      <p className="no-events">No events created yet.</p>
    ) : (
      events.map(({ id, title, description, tickets }) => (
        <div className="event-card" key={id}>
          <h3 className="event-title">{title}</h3>
          <p className="event-description">{description}</p>
          <p className="event-tickets">Tickets Booked: <strong>{tickets}</strong></p>
          <div className="event-buttons">
            <button className="event-button book" onClick={() => bookTicket(id)}>
              Book Ticket
            </button>
            <button className="event-button delete" onClick={() => deleteEvent(id)}>
              Delete Event
            </button>
          </div>
        </div>
      ))
    )}
  </div>
);

export default EventList;
