import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { ROUTES } from '../../constants/routes';
import { useSelector } from 'react-redux';
import { selectUser, selectToken } from '../../features/Auth/selectors';

const PrivateRoute: React.FC<RouteProps> = (props) => {
    const user = useSelector(selectUser)
    const token = useSelector(selectToken)

    if (!token || !user) {
        return <Redirect from={props.path?.toString()} to={{ pathname: ROUTES.auth.login }} />
    }


    return <Route {...props} />
}

export default PrivateRoute
