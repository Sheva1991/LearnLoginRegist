import React, { memo } from 'react'
import { Field, Formik } from 'formik';
import { RegistrateValues } from './types';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import FormBox from '../components/FormBox';
import { validation } from './validation';
import { useMount } from '../../../hooks/useMount';
import { registrate } from './actions';
import Row from '../components/Row';
import { TextField } from 'formik-material-ui';




const Registration: React.FC = memo(() => {
    const mountState = useMount()
    const dispatch = useDispatch()

    const submit = async (values: RegistrateValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        try {
            await dispatch(registrate(values))
        } finally {
            if (mountState.mounted) {
                setSubmitting(false)
            }
        }
    }

    return <>
        <Formik
            initialValues={{ email: '', password: '', password_confirmation: '' }}
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
                    <Row>
                        <Field
                            component={TextField}
                            fullWidth={true}
                            name="password_confirmation"
                            type="password"
                            label="Confirm Password"
                        />
                    </Row>
                    <Button type='submit' variant="contained" color="primary" disabled={isSubmitting || !isValid}>
                        Registrate
                    </Button>
                </FormBox>
            )}
        </Formik>
    </>
})

export default Registration

