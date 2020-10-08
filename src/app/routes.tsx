import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Auth from 'features/Auth'
import Account from 'features/Account';
import { ROUTES } from '../constants/routes';
import PrivateRoute from 'components/PrivateRoute';
import Login from 'features/Auth/Login';
import Recovery from 'features/Auth/Recovery';
import Registration from 'features/Auth/Registration';
import VerifyAlert from 'features/Auth/VerifyAlert';
import Users from 'features/Account/Users';
import Posts from 'features/Account/Posts';
import PostInfo from 'features/Account/Posts/components/PostInfo/PostInfo';
import AuthorizeRoute from '../components/AuthorizeRoute/AuthorizeRoute';
import LoginRoute from 'components/LoginRoute/LoginRoute';

export const Routes = () => {
    return (
        <>
            <AuthorizeRoute path={ROUTES.default} />
            <Switch>
                <Route path={ROUTES.account.main}>
                    <Account>
                        <Switch>
                            <PrivateRoute path={ROUTES.account.users} component={Users} />
                            <PrivateRoute path={ROUTES.account.posts} component={Posts} />
                            <PrivateRoute path={ROUTES.account.post} component={PostInfo} />
                        </Switch>
                    </Account>
                </Route>
                <Route path={ROUTES.auth.main}>
                    <Auth>
                        <Switch>
                            <LoginRoute path={ROUTES.auth.login} component={Login} />
                            <Route exact path={ROUTES.auth.recoverPassword} component={Recovery} />
                            <LoginRoute path={ROUTES.auth.registration} component={Registration} />
                            <Route exact path={ROUTES.auth.verify} component={VerifyAlert} />
                        </Switch>
                    </Auth>
                </Route>
            </Switch>

        </>
    )
}
