import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { ROUTES } from '../../constants/routes';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { selectUser, selectToken } from './selectors';

const AuthRoute: React.FC<RouteProps> = (props) => {
    // const { token, user } = useSelector((state: RootState) => state.auth)

    const { user, token } = useSelector((state: RootState) => ({
        user: selectUser(state),
        token: selectToken(state)
    }))

    if (token && user) {
        return <Redirect from={props.path?.toString()} to={ROUTES.account.main} />
    }


    return <Route {...props} />
}

export default AuthRoute

