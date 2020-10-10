import React, { memo } from 'react'
import { Field, Formik } from 'formik';
import { LoginValues } from './types';
import { Box, Button, Link } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { useDispatch } from 'react-redux';
import FormBox from '../components/FormBox';
import { validation } from './validation';
import { useMount } from '../../../hooks/useMount';
import { login } from './actions';
import Row from '../components/Row/Row';
import { TextField } from 'formik-material-ui';




const Login: React.FC = memo(() => {
    const dispatch = useDispatch()
    const mountState = useMount()

    const submit = async (values: LoginValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
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
                email: '', password: '',
            }}
            validationSchema={validation}
            onSubmit={submit}
        >
            {({ isSubmitting, isValid }) => (
                <FormBox>
                    <Row>
                        <Field
                            component={TextField}
                            fullWidth={true}
                            name="email"
                            type="email"
                            label="Email"
                        />
                    </Row>
                    <Row>
                        <Field
                            component={TextField}
                            fullWidth={true}
                            name="password"
                            type="password"
                            label="Password"
                        />
                    </Row>
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

