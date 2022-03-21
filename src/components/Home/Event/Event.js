import React from 'react';
import './Event.css';

const Event = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);

    const backgroundColor = {
        backgroundColor: '#' + randomColor,
        opacity: 0.9
    };
    // console.log(backgroundColor);

    return (
        <div className='all-event my-5'>
            <div className="event">
                <img src="https://i.ibb.co/7bJZ2Kh/animals-1.png" alt="" />
                <div className='event-txt' style={backgroundColor}>Wild Life Photography</div>
            </div>
            <div className="event">
                <img src="https://i.ibb.co/7bJZ2Kh/animals-1.png" alt="" />
                <div className='event-txt' style={backgroundColor}>Wild Life Photography</div>
            </div>
            <div className="event">
                <img src="https://i.ibb.co/7bJZ2Kh/animals-1.png" alt="" />
                <div className='event-txt' style={backgroundColor}>Wild Life Photography</div>
            </div>
            <div className="event">
                <img src="https://i.ibb.co/7bJZ2Kh/animals-1.png" alt="" />
                <div className='event-txt' style={backgroundColor}>Wild Life Photography</div>
            </div>
            <div className="event">
                <img src="https://i.ibb.co/7bJZ2Kh/animals-1.png" alt="" />
                <div className='event-txt' style={backgroundColor}>Wild Life Photography</div>
            </div>
            <div className="event">
                <img src="https://i.ibb.co/7bJZ2Kh/animals-1.png" alt="" />
                <div className='event-txt' style={backgroundColor}>Wild Life Photography</div>
            </div>
            <div className="event">
                <img src="https://i.ibb.co/7bJZ2Kh/animals-1.png" alt="" />
                <div className='event-txt' style={backgroundColor}>Wild Life Photography</div>
            </div>
            <div className="event">
                <img src="https://i.ibb.co/7bJZ2Kh/animals-1.png" alt="" />
                <div className='event-txt' style={backgroundColor}>Wild Life Photography</div>
            </div>

        </div>
    );
};

export default Event;