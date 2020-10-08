import React, { memo } from 'react'
import { Formik } from 'formik';
import { FormValues } from './types';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import FieldBox from '../components/FieldBox';
import FormBox from '../components/FormBox';
import { validation } from './validation';
import { useMount } from '../../../hooks/useMount';




const Recovery: React.FC = memo(() => {
    const mountState = useMount()
    const history = useHistory()

    const action = (values: FormValues) => {
        console.log('recoverPassword')
    }

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

    return <>
        <Formik
            initialValues={{
                email: ''
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
                    <Button type='submit' variant="contained" color="primary" disabled={isSubmitting || !isValid}>
                        Sent new password on Email
                        </Button>
                </FormBox>
            )}
        </Formik>
    </>
})

export default Recovery

