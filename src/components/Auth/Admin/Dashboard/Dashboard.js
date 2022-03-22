import React, { useState } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { BsFillPeopleFill, BsJournalPlus } from "react-icons/bs";
import { FaCameraRetro } from "react-icons/fa";
import PhotographerList from './../PhotographerList/PhotographerList';
import AddEvent from './../AddEvent/AddEvent';
import RegisterPhotographer from '../../RegisterPhotographer/RegisterPhotographer';

const Dashboard = () => {
    let [active, setActive] = useState('pList');

    // console.log(active);
    const handleList = (e) => {
        setActive('pList');
        e.preventDefault();
    }
    const handleEvent = (e) => {
        setActive('addEvent');
        e.preventDefault();
    }
    const handleRegister = (e) => {
        setActive('pRegister');
        e.preventDefault();
    }
    return (
        <div className='dashboard mt-2'>
            <div className="admin-header">
                <Link className='admin-logo' to='/home'>
                    <img width='20%' src="https://i.ibb.co/dKxqq22/wild-logo.png" alt="" />
                </Link>
                <h2>
                    {
                        (active === 'pList') ? 'All Photographer List' :
                            (active === 'addEvent') ? 'Add New Event'
                                : 'Register Photographer'
                    }
                </h2>
            </div>
            <div className="dashboard-content">
                <div className="sidebar pt-3">
                    <ul>
                        <a id='list' href="#" onClick={(e) => handleList(e)}><li className={active === "pList" ? "active" : ""}><BsFillPeopleFill className='li-icon' /><span>Photographer List</span></li></a>
                        <a id='event' href="#" onClick={(e) => handleEvent(e)}><li className={active == "addEvent" ? "active" : ""}><BsJournalPlus className='li-icon' /><span>Add New Event</span></li></a>
                        <a id='event' href="#" onClick={(e) => handleRegister(e)}><li className={active == "pRegister" ? "active" : ""}><FaCameraRetro className='li-icon' /><span>Register Photographer</span></li></a>
                    </ul>
                </div>
                <div className="content mt-3">
                    {
                        (active === 'pList') ? <PhotographerList></PhotographerList> :
                            (active === 'addEvent') ? < AddEvent ></AddEvent>
                                : <RegisterPhotographer></RegisterPhotographer>
                    }
                </div>
            </div>
        </div >
    );
};

export default Dashboard;