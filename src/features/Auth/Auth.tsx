import React from 'react'
import { Container, Paper } from '@material-ui/core';
import { useStyles } from './styles';


const Auth: React.FC = ({ children }) => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
                {children}
            </Paper>
        </Container>
    )
}

export default Auth
