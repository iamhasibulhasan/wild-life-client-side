import axios from 'axios';
import React, { useEffect } from 'react';
import { BsTrash } from "react-icons/bs";
import Swal from 'sweetalert2';

const List = (props) => {


    const { _id, fullName, uname, date, organize
    } = props.photographer;
    const index = props.index;

    const handleDelete = (e, id) => {

        Swal.fire({
            toast: true,
            position: 'top-end',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id);
                axios.delete(`https://obscure-hollows-85216.herokuapp.com/photographerDelete/${id}`)
                    .then(res => {
                        console.log(res);
                        Swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Deleted successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        window.location.reload();

                    })

            }
        })



        e.preventDefault();
    }
    return (
        <tr>
            <td>{index}</td>
            <td>{fullName}</td>
            <td>{uname}</td>
            <td>{date}</td>
            <td>{organize}</td>
            <td>
                <a onClick={(e) => handleDelete(e, _id)} className='btn btn-danger btn-sm' href="#"><BsTrash /></a>
            </td>
        </tr>
    );
};

export default List;