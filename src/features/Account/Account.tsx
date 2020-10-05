import React from 'react'
import { Container } from '@material-ui/core';
import Header from 'components/Header';
import { Routes } from './routes';

const Account = () => {
    return (
        <>
            <Header />
            <Container>
                <Routes />
            </Container>
        </>


    )
}

export default Account
