import AccountPage from 'features/AccountPage'
import LoginPage from 'features/LoginPage'
import PostsPage from 'features/PostsPage'
import UsersPage from 'features/UsersPage'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import RecoveryForm from '../components/Forms/RecoveryForm/RecoveryForm';
import ChangePasswordForm from '../components/Forms/ChangePasswordForm/LoginForm/ChangePasswordForm';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute'

export const Routes = () => {
    const authed = false;
    return (
        <Switch>
            <Route exact path='/' component={AccountPage} />
            <Route exact path='/posts' component={PostsPage} />
            <Route exact path='/users' component={UsersPage} />
            <Route exact path='/login' component={LoginPage} />
            {/* <PrivateRoute authed={authed} path='/login/recoveryPassword' component={RecoveryForm} /> */}
            <Route exact path='/login/recoveryPassword' component={RecoveryForm} />
            <Route exact path='/login/newPassword' component={ChangePasswordForm} />
        </Switch>

    )
}
