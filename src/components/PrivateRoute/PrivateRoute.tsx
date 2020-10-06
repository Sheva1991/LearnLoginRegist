import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { PropsType } from './types';
import { ROUTES } from '../../constants/routes';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const PrivateRoute: React.FC<PropsType> = ({ component: Component, ...rest }) => {
    const token = useSelector((state: RootState) => state.auth.token)
    return (
        <Route
            {...rest}
            render={(props) => token !== null
                ? <Component {...props} />
                : <Redirect to={{ pathname: ROUTES.auth.main }} />}
        />
    )
}

export default PrivateRoute
