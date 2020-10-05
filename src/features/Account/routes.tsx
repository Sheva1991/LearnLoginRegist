import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ROUTES } from 'constants/routes';
import Users from './components/Users';
import Posts from './components/Posts/Posts';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.account.users} component={Users} />
            <Route exact path={ROUTES.account.posts} component={Posts} />
        </Switch>

    )
}
