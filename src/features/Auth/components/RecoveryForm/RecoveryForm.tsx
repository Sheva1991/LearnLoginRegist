import React, { memo, useEffect, useMemo } from 'react'
import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { FormValues } from './types';
import { useHistory } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { useStyles } from './styles';




const RecoveryForm: React.FC = memo(() => {
    const classes = useStyles();
    const history = useHistory()
    const action = (values: FormValues) => {
        console.log('recoverPassword')
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
            history.push('/login')
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
                email: ''
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email("Email not valid").required("Email is required")
            })}
            onSubmit={submit}
        >
            {({ isSubmitting, isValid }) => (
                <div>
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
                        <Button type='submit' variant="contained" color="primary" disabled={isSubmitting || !isValid}>
                            Sent new password on Email
                        </Button>
                    </Form>

                </div>
            )}
        </Formik>
    </>
})

export default RecoveryForm

