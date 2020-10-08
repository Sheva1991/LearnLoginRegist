import React from 'react'
import { Box, Container, Paper } from '@material-ui/core';
import { useStyles } from './styles';


const Auth: React.FC = ({ children }) => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Box width='50%'>
                <Paper elevation={3} className={classes.paper}>
                    {children}
                </Paper>
            </Box>
        </Container>
    )
}

export default Auth
