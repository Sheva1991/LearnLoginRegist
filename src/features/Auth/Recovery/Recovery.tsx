import React, { memo } from 'react'
import { Field, Formik } from 'formik';
import { RecoveryValues } from './types';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import FormBox from '../components/FormBox';
import { validation } from './validation';
import { useMount } from '../../../hooks/useMount';
import Row from '../components/Row';
import { TextField } from 'formik-material-ui';




const Recovery: React.FC = memo(() => {
    const mountState = useMount()
    const history = useHistory()

    const action = (values: RecoveryValues) => {
        console.log('recoverPassword')
    }

    const submit = async (values: RecoveryValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
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
            initialValues={{ email: '' }}
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
                    <Button type='submit' variant="contained" color="primary" disabled={isSubmitting || !isValid}>
                        Sent new password on Email
                        </Button>
                </FormBox>
            )}
        </Formik>
    </>
})

export default Recovery

