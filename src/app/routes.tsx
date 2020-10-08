import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
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
import AuthorizeRoute from '../components/AuthorizeRoute/AuthorizeRoute';
import LoginRoute from 'components/LoginRoute/LoginRoute';
import { useSelector } from 'react-redux';
import { RootState } from './store';

export const Routes = () => {
    const { token, user } = useSelector((state: RootState) => state.auth)
    return (
        <>
            <Switch>
                <Route exact path={ROUTES.default}>
                    <AuthorizeRoute path={ROUTES.default} />
                </Route>
                <Route path={ROUTES.account.main}>
                    {(token !== null && user !== null) ?
                        <Account>
                            <Switch>
                                <PrivateRoute path={ROUTES.account.users} component={Users} />
                                <PrivateRoute path={ROUTES.account.posts} component={Posts} />
                                <PrivateRoute path={ROUTES.account.post} component={PostInfo} />
                            </Switch>
                        </Account>
                        : <Redirect to={{ pathname: ROUTES.auth.login }} />}
                </Route>
                <Route path={ROUTES.auth.main}>
                    <Auth>
                        <Switch>
                            <LoginRoute path={ROUTES.auth.login} component={Login} />
                            <Route exact path={ROUTES.auth.recoverPassword} component={Recovery} />
                            <LoginRoute path={ROUTES.auth.registration} component={Registration} />
                            <Route exact path={ROUTES.auth.verify} component={Verify} />
                        </Switch>
                    </Auth>
                </Route>
            </Switch>
        </>
    )
}
