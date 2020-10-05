import React from 'react'
import { Container } from '@material-ui/core';
import Header from 'components/Header';
import { Routes } from './routes';
import { useStyles } from './styles';

const Account = () => {
    const classes = useStyles()
    return (
        <>
            <Header />
            <Container className={classes.root}>
                <Routes />
            </Container>
        </>


    )
}

export default Account
