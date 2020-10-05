import React from 'react'
import { Container, CssBaseline, Paper } from '@material-ui/core';
import { useStyles } from './styles';
import { Routes } from './routes';

const Auth = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <CssBaseline />
            <Paper elevation={3} className={classes.paper}>
                <Routes />
            </Paper>
        </Container>
    )
}

export default Auth
