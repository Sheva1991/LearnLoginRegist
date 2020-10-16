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
import ChangePassword from '../features/Auth/ResetPassword/ResetPassword';
import Profile from '../features/Account/Profile/Profile';
import ProfileInfo from 'features/Account/Profile/components/ProfileInfo';
import ProfileEdit from 'features/Account/Profile/components/ProfileEdit';
import UserInfo from 'features/Account/Users/components/UserInfo';

export const Routes = () => {
    return (
        <>
            <Switch>
                <AuthRoute path={[ROUTES.auth.login, ROUTES.auth.registration, ROUTES.auth.recoverPassword, ROUTES.auth.resetPassword]}>
                    <Auth>
                        <Switch>
                            <Route exact path={ROUTES.auth.login} component={Login} />
                            <Route exact path={ROUTES.auth.registration} component={Registration} />
                            <Route exact path={ROUTES.auth.recoverPassword} component={Recovery} />
                            <Route exact path={ROUTES.auth.resetPassword} component={ChangePassword} />
                        </Switch>
                    </Auth>
                </AuthRoute>
                <PrivateRoute path={ROUTES.account.main}>
                    <Switch>
                        <Route path={ROUTES.auth.verify}>
                            <Auth>
                                <Switch>
                                    <Route exact path={ROUTES.auth.verify} component={Verify} />
                                </Switch>
                            </Auth>
                        </Route>
                        <Route path={ROUTES.account.main}>
                            <Account>
                                <Switch>
                                    <Route exact path={ROUTES.account.users} component={Users} />
                                    <Route exact path={ROUTES.account.userInfo} component={UserInfo} />
                                    <Route exact path={ROUTES.account.posts} component={Posts} />
                                    <Route exact path={ROUTES.account.post} component={PostInfo} />
                                    <Route path={ROUTES.account.profile}>
                                        <Profile>
                                            <Switch>
                                                <Route exact path={ROUTES.account.profileInfo} component={ProfileInfo} />
                                                <Route exact path={ROUTES.account.profileEdit} component={ProfileEdit} />
                                            </Switch>
                                        </Profile>
                                    </Route>
                                </Switch>
                            </Account>
                        </Route>
                    </Switch>
                </PrivateRoute>
            </Switch>
        </>
    )
}
