import React from 'react';
import { Container } from 'react-bootstrap';
import './Login.css';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Login = () => {
    const { signInUsingGoogle, user } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';
    // console.log('came from', location.state?.from);
    // console.log(user.email);
    if (user.email) {
        history.push('/')
    }

    // Google login
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    return (
        <Container>
            <div className='my-5 login-container'>
                <Link className='text-center' to='/'>
                    <img width='40%' src="https://i.ibb.co/dKxqq22/wild-logo.png" alt="" />
                </Link>
                <div className="card w-50 mt-3 login-div">
                    <div className="card-body login-body my-5">
                        <span className='login-title'>Login With</span><br />
                        <a href="#" onClick={handleGoogleLogin} className='social-login-btn'><span className="g-icon"><FcGoogle /></span><span className="g-text">Continue with google</span></a>
                        <a href="#" className='social-login-btn mt-3'><span className="g-icon"><FaFacebook /></span><span className="g-text">Continue with facebook</span></a>   <br />
                        <span className='mt-3'>Don't have an account? <a href="#">Create an account</a></span>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;