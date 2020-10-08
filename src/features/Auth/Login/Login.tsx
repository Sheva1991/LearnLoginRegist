import React, { memo } from 'react'
import { Formik } from 'formik';
import { FormValues } from './types';
import { Box, Button, Link } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { useDispatch } from 'react-redux';
import FormBox from '../components/FormBox';
import FieldBox from '../components/FieldBox';
import { validation } from './validation';
import { useMount } from '../../../hooks/useMount';
import { login } from './actions';




const Login: React.FC = memo(() => {
    const dispatch = useDispatch()
    const mountState = useMount()

    const submit = async (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        try {
            await dispatch(login(values))
        } finally {
            if (mountState.mounted) {
                setSubmitting(false)
            }
        }
    }

    return <>
        <Formik
            initialValues={{
                email: '', password: ''
            }}
            validationSchema={validation}
            onSubmit={submit}
        >
            {({ isSubmitting, isValid }) => (
                <FormBox>
                    <FieldBox
                        name="email"
                        type="email"
                        label="Email"
                    />
                    <FieldBox
                        name="password"
                        type="password"
                        label="Password"
                    />
                    <Box marginBottom={2}>
                        <Button type='submit' variant="contained" color="primary" fullWidth disabled={isSubmitting || !isValid}>
                            Log in
                        </Button>
                    </Box>
                    <Link component={NavLink} to={ROUTES.auth.recoverPassword} color="inherit">Recover Password</Link>
                    <Link component={NavLink} to={ROUTES.auth.registration} color="inherit">Registration</Link>
                </FormBox>
            )}
        </Formik>
    </>
})

export default Login

