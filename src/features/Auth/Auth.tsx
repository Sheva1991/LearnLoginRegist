import React from 'react'
import { Box, Container, Paper } from '@material-ui/core';
import { useStyles } from './styles';


const Auth: React.FC = ({ children }) => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Box width='50%'>
                <Paper elevation={3}>
                    <Box width='100%' p={12} bgcolor='rgb(25,118,210)' color='#fff'>{children}</Box>
                </Paper>
            </Box>
        </Container>
    )
}

export default Auth
