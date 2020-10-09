import { Box, Button, Typography, Container, CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, NavLink } from 'react-router-dom';
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
                        <Typography variant="h5" align='center' component="h4">
                            Аккаунт верифицирован!
                            <Box margin={2}>
                                <Button variant="contained" color="primary" component={NavLink} to={ROUTES.account.main}>
                                    Перейти на главную страницу
                                </Button>
                            </Box>
                        </Typography>
                        :
                        <VerifyAlert />
                    }
                </Box>}
        </>
    )
}

export default Verify
