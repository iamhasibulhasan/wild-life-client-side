import React from 'react';
import { Container } from 'react-bootstrap';
import Events from '../Events/Events';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css';

const Home = () => {
    return (
        <Container>
            <SearchBar></SearchBar>
            <Events></Events>
        </Container>
    );
};

export default Home;