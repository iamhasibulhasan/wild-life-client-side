import React from 'react';
import { Container } from 'react-bootstrap';
import './Login.css';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
    return (
        <Container>
            <div className='my-5 login-container'>
                <img width='20%' src="https://i.ibb.co/dKxqq22/wild-logo.png" alt="" />
                <div className="card w-50 mt-3 login-div">
                    <div className="card-body my-5">
                        <span className='login-title'>Login With</span><br />
                        <a href="#" className='social-login-btn'><span className="g-icon"><FcGoogle /></span><span className="g-text">Continue with google</span></a>
                        <a href="#" className='social-login-btn mt-3'><span className="g-icon"><FaFacebook /></span><span className="g-text">Continue with facebook</span></a>   <br />
                        <span className='mt-3'>Don't have an account? <a href="#">Create an account</a></span>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;