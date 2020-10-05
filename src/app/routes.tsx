import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Auth from 'features/Auth'
import Account from 'features/Account/Account';
import { ROUTES } from '../constants/routes';

export const Routes = () => {
    const authed = true
    return (
        <>
            <Route path={ROUTES.default} component={() => (authed ? <Redirect to={ROUTES.account.main} /> : <Redirect to={ROUTES.auth.main} />)} />
            <Route path={ROUTES.auth.main} component={Auth} />
            <Route path={ROUTES.account.main} component={Account} />
        </>

    )
}
