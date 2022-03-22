import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    const spin = () => {
    if (isLoading) {
        return <Spinner animation="border" variant="primary" />
    }
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: '/login',
                    state: { from: location }
                }}
            >

            </Redirect>

            }
        >
            {spin()}
        </Route>

    );
};

export default PrivateRoute;