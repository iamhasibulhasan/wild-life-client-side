import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import './Events.css';

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/events')
            .then(res => setEvents(res.data))
    }, []);

    // console.log(events);
    return (
        <div className='events-container'>
            <div className='all-event my-5'>
                {
                    events.map(event => <Event
                        key={event._id}
                        event={event}
                    ></Event>)
                }
            </div>
        </div>
    );
};

export default Events;