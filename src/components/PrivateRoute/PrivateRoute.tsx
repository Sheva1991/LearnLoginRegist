import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { PropsType } from './types';
import { ROUTES } from '../../constants/routes';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const PrivateRoute: React.FC<PropsType> = ({ component: Component, path, ...rest }) => {
    const user = useSelector((state: RootState) => state.auth.user)
    return (
        <Route
            exact
            path={path}
            {...rest}
            render={(props) => (user !== null && user.verified !== null)
                ? <Component {...props} />
                : <Redirect to={{ pathname: ROUTES.auth.verify }} />}
        />
    )
}

export default PrivateRoute
