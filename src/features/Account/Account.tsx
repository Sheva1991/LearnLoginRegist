import React from 'react'
import { Container } from '@material-ui/core';
import Header from 'components/Header';
import { useStyles } from './styles';

const Account: React.FC = ({ children }) => {
    const classes = useStyles()
    return (
        <>

            <Header />
            < Container className={classes.root} >
                <> {children}</>
            </Container >

        </>
    )
}

export default Account
