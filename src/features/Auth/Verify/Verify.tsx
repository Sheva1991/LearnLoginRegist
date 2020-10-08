import { Box, Button, Typography, Container, CircularProgress } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, NavLink } from 'react-router-dom';
import { verifyAccount } from './actions';
import { RootState } from '../../../app/store';
import { useStyles } from './styles';
import { ROUTES } from '../../../constants/routes';
const queryString = require('query-string');

const Verify = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const verified = useSelector((state: RootState) => state.auth.user?.verified)
    const loading = useSelector((state: RootState) => state.auth.loading)
    const { search } = useLocation()

    const handleClick = useCallback(
        () => {
            console.log('sent mail again');
        },
        [],
    )

    useEffect(() => {
        const parsed = queryString.parse(search);
        if (parsed.hash) {
            dispatch(verifyAccount(parsed.hash))
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
                        <Typography variant="h5" align='center' component="h4">
                            Аккаунт не верийицирован!
                            <Box margin={2}>
                                <Button variant="contained" color="primary" onClick={handleClick}>
                                    Отправить повторно письмо на почту для верификации
                                </Button>
                            </Box>
                        </Typography>
                    }
                </Box>}
        </>
    )
}

export default Verify
