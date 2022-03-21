import React from 'react';
import { Container } from 'react-bootstrap';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css';

const Home = () => {
    return (
        <Container>
            <SearchBar></SearchBar>
        </Container>
    );
};

export default Home;