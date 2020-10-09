import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { ROUTES } from '../../constants/routes';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const PrivateRoute: React.FC<RouteProps> = (props) => {
    const { token, user } = useSelector((state: RootState) => state.auth)

    if (!token || !user) {
        return <Redirect from={props.path?.toString()} to={{ pathname: ROUTES.auth.login }} />
    }


    return <Route {...props} />
}

export default PrivateRoute
