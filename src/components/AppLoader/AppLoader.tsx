import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { authorize } from '../../features/Auth/actions';

const AppLoader: React.FC = ({ children }) => {
    const { token, user } = useSelector((state: RootState) => state.auth)
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
            {loaded ? children : "loader"}
        </>
    )
}

export default AppLoader
