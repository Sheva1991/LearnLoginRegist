import React from 'react'
import { RootState } from '../app/store';
import { useSelector } from 'react-redux';
import { ROUTES } from '../constants/routes';
import { Redirect } from 'react-router-dom';


const withVerify = (WrappedComponent: React.ComponentType) => {

    const RedirectComponent: React.FC = (props) => {
        const verified = useSelector((state: RootState) => state.auth.user?.verified)

        if (!verified) return <Redirect to={ROUTES.auth.verify} />

        return <WrappedComponent {...props} />
    }


    return RedirectComponent;
}

export default withVerify
