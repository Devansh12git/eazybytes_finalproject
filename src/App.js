// App.js
import React, { useState } from 'react';
import EventForm from './components/EventForm';
import EventList from './components/EventList';

const App = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => setEvents([...events, { ...event, id: Date.now(), tickets: 0 }]);
  const deleteEvent = (id) => setEvents(events.filter((event) => event.id !== id));
  const bookTicket = (id) => {
    setEvents(events.map((event) => 
      event.id === id ? { ...event, tickets: event.tickets + 1 } : event
    ));
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Event Management App</h1>
      <EventForm addEvent={addEvent} />
      <EventList events={events} deleteEvent={deleteEvent} bookTicket={bookTicket} />
    </div>
  );
};

export default App;
