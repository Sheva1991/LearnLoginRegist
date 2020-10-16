import React from 'react'
import { Container } from '@material-ui/core';
import Header from 'components/Header';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';
import { selectVerifyied } from '../Auth/selectors';
import VerifyAlert from './components/VerifyAlert';

const Account: React.FC = ({ children }) => {
    const classes = useStyles()
    const verified = useSelector(selectVerifyied)
    return (
        <>
            <Header />
            < Container className={classes.root} >
                <> {verified ? children : <VerifyAlert />}</>
            </Container >
        </>
    )
}

export default Account
