import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { PropsType } from './types';
import { ROUTES } from '../../constants/routes';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const LoginRoute: React.FC<PropsType> = ({ component: Component, path, ...rest }) => {
    const { token, user } = useSelector((state: RootState) => state.auth)
    return (
        <Route
            exact
            path={path}
            {...rest}
            render={(props) => (token !== null && user !== null)
                ? <Redirect to={{ pathname: ROUTES.account.main }} />
                : <Component {...props} />}
        />
    )
}

export default LoginRoute

