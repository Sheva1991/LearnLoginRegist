import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { PropsType } from './types';
import { ROUTES } from '../../constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { authorize } from '../../features/Auth/actions';
import { CircularProgress, Container } from '@material-ui/core';
import { useStyles } from './styles';

const AuthorizeRoute: React.FC<PropsType> = ({ path, ...rest }) => {
    const { token, user, loading } = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()
    const classes = useStyles();

    useEffect(() => {
        if (token !== null) {
            dispatch(authorize())
        }
    }, [])

    return (
        <>
            { !loading ?
                <Route
                    path={path}
                    exact
                    {...rest}
                    render={() => (token !== null && user !== null)
                        ? <Redirect to={{ pathname: ROUTES.account.main }} />
                        : <Redirect to={{ pathname: ROUTES.auth.login }} />}
                />
                : <Container className={classes.root}>
                    <CircularProgress />
                </Container>}
        </>
    )
}

export default AuthorizeRoute
