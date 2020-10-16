import React from 'react'

import { useStyles } from './styles';
import { Container } from '@material-ui/core';

const Profile: React.FC = ({ children }) => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <>{children}</>
        </Container>
    )
}

export default Profile
