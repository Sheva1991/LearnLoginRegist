import React, { memo } from 'react'
import { Formik } from 'formik';
import { FormValues } from './types';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import FieldBox from '../components/FieldBox';
import FormBox from '../components/FormBox';
import { validation } from './validation';
import { useMount } from '../../../hooks/useMount';
import { registrate } from './actions';




const Registration: React.FC = memo(() => {
    const mountState = useMount()
    const dispatch = useDispatch()

    const submit = async (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
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
            initialValues={{
                email: '', password: '', password_confirmation: ''
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
                    <FieldBox
                        name="password_confirmation"
                        type="password"
                        label="Confirm Password"
                    />
                    <Button type='submit' variant="contained" color="primary" disabled={isSubmitting || !isValid}>
                        Registrate
                    </Button>
                </FormBox>
            )}
        </Formik>
    </>
})

export default Registration

