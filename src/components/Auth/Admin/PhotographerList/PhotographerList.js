import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './PhotographerList.css';

import axios from 'axios';
import List from './List';

const PhotographerList = () => {

    const [photographers, setPhotographers] = useState([]);

    useEffect(() => {
        axios.get('https://obscure-hollows-85216.herokuapp.com/photographers')
            .then(res => setPhotographers(res.data))
    }, []);
    // console.log(photographers);
    return (
        <div className='card'>
            <div className="card-body">
                <Table striped borderless hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email or User</th>
                            <th>Registration Date</th>
                            <th>Organization</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            photographers.map((p, i) => <List
                                index={i + 1}
                                key={p._id}
                                photographer={p}
                            ></List>)
                        }


                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default PhotographerList;