import React, { memo, useEffect, useMemo } from 'react'
import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { FormValues, PropsType } from './types';
import { Box, Button, TextField } from '@material-ui/core';
import { useStyles } from './styles';




const ChangePasswordForm: React.FC<PropsType> = memo(({ password }) => {
    const classes = useStyles();
    const action = (values: FormValues) => {
        console.log('change Password')
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

    return <div>
        <Formik
            initialValues={{
                password: '', newPassword: ''
            }}
            validationSchema={Yup.object().shape({
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
                        Change Password
                    </Button>
                </Form>
            )}
        </Formik>
    </div>
})

export default ChangePasswordForm

