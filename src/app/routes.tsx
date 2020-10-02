import AccountPage from 'features/AccountPage'
import LoginPage from 'features/LoginPage'
import PostsPage from 'features/PostsPage'
import UsersPage from 'features/UsersPage'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import RecoveryForm from '../components/Forms/RecoveryForm/RecoveryForm';
import ChangePasswordForm from '../components/Forms/ChangePasswordForm/LoginForm/ChangePasswordForm';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={AccountPage} />
            <Route exact path='/posts' component={PostsPage} />
            <Route exact path='/users' component={UsersPage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/login/recoveryPassword' component={RecoveryForm} />
            <Route exact path='/login/newPassword' component={ChangePasswordForm} />
        </Switch>

    )
}
