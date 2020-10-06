import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Auth from 'features/Auth'
import Account from 'features/Account/Account';
import { ROUTES } from '../constants/routes';
import PrivateRoute from 'components/PrivateRoute';

export const Routes = () => {
    return (
        <>
            <Route exact path={ROUTES.default} component={() => (<Redirect to={ROUTES.account.main} />)} />
            <Route path={ROUTES.auth.main} component={Auth} />
            <PrivateRoute path={ROUTES.account.main} component={Account} />
        </>

    )
}
