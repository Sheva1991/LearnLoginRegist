import React, { memo, useEffect, useMemo } from 'react'
import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { FormValues } from './types';
import { Box, Button } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { useStyles } from './styles';




const RegistrationForm: React.FC = memo(() => {
    const classes = useStyles();
    const action = (values: FormValues) => {
        console.log('registration')
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
                name: '', email: '', password: '', passwordConfirm: ''
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string().min(1).required("Name is required"),
                email: Yup.string().email("Email not valid").required("Email is required"),
                password: Yup.string().min(3).max(20).required("Password is required"),
                passwordConfirm: Yup.string()
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
                            name="name"
                            type="text"
                            label="Name"
                        />
                    </Box>
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
                            name="passwordConfirm"
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

