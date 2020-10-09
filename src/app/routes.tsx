import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Auth from 'features/Auth'
import Account from 'features/Account';
import { ROUTES } from '../constants/routes';
import PrivateRoute from 'components/PrivateRoute';
import Login from 'features/Auth/Login';
import Recovery from 'features/Auth/Recovery';
import Registration from 'features/Auth/Registration';
import Verify from 'features/Auth/Verify';
import Users from 'features/Account/Users';
import Posts from 'features/Account/Posts';
import PostInfo from 'features/Account/Posts/components/PostInfo/PostInfo';
import AuthRoute from 'components/AuthRoute/AuthRoute';

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route path={ROUTES.auth.main}>
                    <Auth>
                        <Switch>
                            <AuthRoute exact path={ROUTES.auth.login} component={Login} />
                            <Route exact path={ROUTES.auth.recoverPassword} component={Recovery} />
                            <AuthRoute exact path={ROUTES.auth.registration} component={Registration} />
                            <Route exact path={ROUTES.auth.verify} component={Verify} />
                        </Switch>
                    </Auth>
                </Route>
                <PrivateRoute path={ROUTES.account.main}>
                    <Account>
                        <Switch>
                            <Route exact path={ROUTES.account.users} component={Users} />
                            <Route exact path={ROUTES.account.posts} component={Posts} />
                            <Route exact path={ROUTES.account.post} component={PostInfo} />
                        </Switch>
                    </Account>
                </PrivateRoute>
            </Switch>
        </>
    )
}
