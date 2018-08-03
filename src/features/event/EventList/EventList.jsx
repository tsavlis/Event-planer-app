import React, { Component } from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {
    const{events,onEventOpen,deleteEvent}= this.props;
    return (
     <div>
        <h1>Eventlist</h1>
        {events.map((event) => (
          <EventListItem key={event.id} event={event} deleteEvent={deleteEvent}onEventOpen={onEventOpen}/>
        ))}
        
     </div>
    );
  }
}

export default EventList;
