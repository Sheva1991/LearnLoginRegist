import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { ROUTES } from '../../constants/routes';
import { useSelector } from 'react-redux';
import { selectToken, selectUser } from '../../features/Auth/selectors';

const AuthRoute: React.FC<RouteProps> = (props) => {
    const user = useSelector(selectUser)
    const token = useSelector(selectToken)

    if (token && user) {
        return <Redirect from={props.path?.toString()} to={ROUTES.account.main} />
    }


    return <Route {...props} />
}

export default AuthRoute

