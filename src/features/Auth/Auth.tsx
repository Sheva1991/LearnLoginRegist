import React from 'react'
import { CircularProgress, Container, Paper } from '@material-ui/core';
import { useStyles } from './styles';
import { Routes } from './routes';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';


const Auth = () => {
    const loading = useSelector((state: RootState) => state.auth.loading)
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            { loading ? <CircularProgress /> :
                <Paper elevation={3} className={classes.paper}>
                    {<Routes />}
                </Paper>
            }
        </Container>
    )
}

export default Auth
