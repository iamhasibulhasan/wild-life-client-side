import React from 'react';
import './Event.css';

const Event = (props) => {
    console.log(props.event);
    const { title, img } = props.event;
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);

    const backgroundColor = {
        backgroundColor: '#' + randomColor,
        opacity: 0.9
    };
    // console.log(backgroundColor);

    return (
        <div className="event">
            <img src={img} alt="" />
            <div className='event-txt' style={backgroundColor}>{title}</div>
        </div>
    );
};

export default Event;