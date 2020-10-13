import React, { memo } from 'react'
import { Field, Formik } from 'formik';
import { ChangePasswordValues, PropsType } from './types';
import { Button } from '@material-ui/core';
import FormBox from 'features/Auth/components/FormBox';
import { validation } from './validation';
import { useMount } from '../../../hooks/useMount';
import Row from 'features/Auth/components/Row';
import TextField from 'components/Fields/TextField';




const ChangePassword: React.FC<PropsType> = memo(({ password }) => {
    const mountState = useMount()

    const action = (values: ChangePasswordValues) => {
        console.log('change Password')
    }

    const submit = async (values: ChangePasswordValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        try {
            await action(values)
        } finally {
            if (mountState.mounted) {
                setSubmitting(false)
            }
        }
    }

    return <div>
        <Formik
            initialValues={{}}
            validationSchema={validation}
            onSubmit={submit}
        >
            {({ isSubmitting, isValid }) => (
                <FormBox>
                    <Row>
                        <Field
                            component={TextField}
                            name="password"
                            type="password"
                            label="Password"
                        />
                    </Row>
                    <Row>
                        <Field
                            component={TextField}
                            name="passwordConfirm"
                            type="password"
                            label="Confirm Password"
                        />
                    </Row>
                    <Button type='submit' variant="contained" color="primary" disabled={isSubmitting || !isValid}>
                        Change Password
                    </Button>
                </FormBox>
            )}
        </Formik >
    </div >
})

export default ChangePassword

