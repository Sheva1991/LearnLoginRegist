import { Box, Container, CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Redirect } from 'react-router-dom';
import { verifyAccount } from './actions';
import { useStyles } from './styles';
import { ROUTES } from '../../../constants/routes';
import { selectLoading, selectVerifyied } from '../selectors';
import VerifyAlert from 'features/Account/components/VerifyAlert';
const queryString = require('query-string');

const Verify = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const loading = useSelector(selectLoading)
    const verified = useSelector(selectVerifyied)

    const { search } = useLocation()

    useEffect(() => {
        const { hash } = queryString.parse(search);
        if (hash) {
            dispatch(verifyAccount(hash))
        }
    }, [dispatch, search])
    return (
        <>
            { loading ?
                <Container className={classes.root}>
                    <CircularProgress />
                </Container>
                :
                <Box margin={2}>
                    {verified ?
                        <Redirect to={{ pathname: ROUTES.account.main }} />
                        :
                        <VerifyAlert />
                    }
                </Box>}
        </>
    )
}

export default Verify
