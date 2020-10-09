import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { authorize } from '../../features/Auth/actions';
import { CircularProgress, Container } from '@material-ui/core';
import { useStyles } from './styles';
import { selectToken, selectUser } from '../../features/Auth/selectors';

const AppLoader: React.FC = ({ children }) => {
    const classes = useStyles()
    const user = useSelector(selectUser)
    const token = useSelector(selectToken)

    const [loaded, setLoaded] = useState(!token);
    const dispatch = useDispatch()

    useEffect(() => {
        if (token) {
            dispatch(authorize())
        }
    }, [dispatch, loaded, token])

    useEffect(
        () => {
            if (!loaded && token && user) {
                setLoaded(true)
            }
        }, [loaded, token, user]
    )

    return (
        <>
            { loaded ? children

                : <Container className={classes.root}>
                    <CircularProgress />
                </Container>}
        </>
    )
}

export default AppLoader
