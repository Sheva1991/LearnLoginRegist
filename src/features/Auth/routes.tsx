import React from 'react'
import { Route, Switch } from 'react-router-dom'
import RecoveryForm from './components/RecoveryForm';
import RegistrationForm from './components/RegistrationForm';
import { ROUTES } from 'constants/routes';
import LoginForm from './components/LoginForm';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.auth.main} component={LoginForm} />
            <Route exact path={ROUTES.auth.recoverPassword} component={RecoveryForm} />
            <Route exact path={ROUTES.auth.registration} component={RegistrationForm} />
        </Switch>

    )
}
