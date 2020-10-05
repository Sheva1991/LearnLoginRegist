import React, { memo, useEffect, useMemo } from 'react'
import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { FormValues } from './types';
import { Box, Button, Link } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { TextField } from 'formik-material-ui';
import { useStyles } from './styles';




const LoginForm: React.FC = memo(() => {
    const classes = useStyles();
    const action = (values: FormValues) => {
        console.log('login')
    }

    const mountState = useMemo(
        () => ({
            mounted: false,
        }),
        []
    )

    const submit = async (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        try {
            await action(values)
        } finally {
            if (mountState.mounted) {
                setSubmitting(false)
            }
        }
    }

    useEffect(
        () => {
            mountState.mounted = true;
            return () => {
                mountState.mounted = false;
            }
        },
        [mountState]
    )

    return <>
        <Formik
            initialValues={{
                email: '', password: ''
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email("Email not valid").required("Email is required"),
                password: Yup.string().min(3).max(20).required("Password is required"),
            })}
            onSubmit={submit}
        >
            {({ isSubmitting, isValid }) => (
                <Form className={classes.root}>
                    <Box margin={1} >
                        <Field
                            className={classes.field}
                            component={TextField}
                            name="email"
                            type="email"
                            label="Email"
                        />
                    </Box>
                    <Box margin={1}>
                        <Field
                            className={classes.field}
                            component={TextField}
                            name="password"
                            type="password"
                            label="Password"
                        />
                    </Box>
                    <Box margin={1}>
                        <Button type='submit' variant="contained" color="primary" fullWidth disabled={isSubmitting || !isValid}>
                            Log in
                            </Button>
                    </Box>
                    <Link component={NavLink} to={ROUTES.auth.recoverPassword} color="inherit">Recover Password</Link>
                    <Link component={NavLink} to={ROUTES.auth.registration} color="inherit">Registration</Link>
                </Form>
            )}
        </Formik>
    </>
})

export default LoginForm

