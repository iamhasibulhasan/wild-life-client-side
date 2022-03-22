import React from 'react';
import { Table } from 'react-bootstrap';
import './PhotographerList.css';
import { BsTrash } from "react-icons/bs";

const PhotographerList = () => {
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
                        <tr>
                            <td>1</td>
                            <td>Hasibul</td>
                            <td>hasibul@gmail.com</td>
                            <td>22/02/2022</td>
                            <td>Freelancer Photo</td>
                            <td>
                                <a className='btn btn-danger btn-sm' href="#"><BsTrash /></a>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Akash</td>
                            <td>hasibul@gmail.com</td>
                            <td>22/02/2022</td>
                            <td>Freelancer Photo</td>
                            <td>
                                <a className='btn btn-danger btn-sm' href="#"><BsTrash /></a>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Proma</td>
                            <td>hasibul@gmail.com</td>
                            <td>22/02/2022</td>
                            <td>Freelancer Photo</td>
                            <td>
                                <a className='btn btn-danger btn-sm' href="#"><BsTrash /></a>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default PhotographerList;