import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './RegisterPhotographer.css';

const RegisterPhotographer = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    };

    return (
        <Container>
            <div className='register-container text-center my-5'>
                <img width='20%' src="https://i.ibb.co/dKxqq22/wild-logo.png" alt="" />
                <div className="register-div mt-3">
                    <div className="card">
                        <div className="card-body register-body my-4">
                            <span className='login-title'>Register Photographer</span><br />
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='form-control mt-3 reg-input' placeholder='Full Name' {...register("fullName", { required: true })} />
                                <input className='form-control mt-3 reg-input' placeholder='User Name Or Email' {...register("uname", { required: true })} />
                                <input className='form-control mt-3 reg-input' placeholder='Description' type="date" {...register("date")} />
                                <input className='form-control mt-3 reg-input' placeholder='Description' type="text" {...register("description")} />
                                <input className='form-control mt-3 reg-input' placeholder='Organize book at the library' type="text" {...register("organize")} />
                                <input className='btn btn-primary mt-4' type="submit" value='Register' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default RegisterPhotographer;