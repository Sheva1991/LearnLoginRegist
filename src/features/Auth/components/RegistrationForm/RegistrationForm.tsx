import React, { memo, useEffect, useMemo } from 'react'
import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { FormValues } from './types';
import { Box, Button } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { useStyles } from './styles';
import { registrate } from 'features/Auth/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../../constants/routes';




const RegistrationForm: React.FC = memo(() => {
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles()

    const mountState = useMemo(
        () => ({
            mounted: false,
        }),
        []
    )

    const submit = async (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        try {
            await dispatch(registrate(values, () => {
                history.push({
                    pathname: ROUTES.auth.main,
                })
            }))
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
                email: '', password: '', password_confirmation: ''
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email("Email not valid").required("Email is required"),
                password: Yup.string().min(6).max(20).required("Password is required"),
                password_confirmation: Yup.string()
                    .oneOf([Yup.ref('password')], 'Confirm password').required('Password confirm is required')
            })}
            onSubmit={submit}
        >
            {({ isSubmitting, isValid }) => (
                <Form className={classes.root}>
                    <Box margin={1}>
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
                        <Field
                            className={classes.field}
                            component={TextField}
                            name="password_confirmation"
                            type="password"
                            label="Confirm Password"
                        />
                    </Box>
                    <Button type='submit' variant="contained" color="primary" disabled={isSubmitting || !isValid}>
                        Registrate
                    </Button>
                </Form>
            )}
        </Formik>
    </>
})

export default RegistrationForm

