import React, { memo } from 'react'
import { Formik } from 'formik';
import { FormValues, PropsType } from './types';
import { Button } from '@material-ui/core';
import FormBox from 'features/Auth/components/FormBox';
import FieldBox from 'features/Auth/components/FieldBox';
import { validation } from './validation';
import { useMount } from '../../../../hooks/useMount';




const ChangePassword: React.FC<PropsType> = memo(({ password }) => {
    const mountState = useMount()

    const action = (values: FormValues) => {
        console.log('change Password')
    }

    const submit = async (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
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
            initialValues={{
                password: '', newPassword: ''
            }}
            validationSchema={validation}
            onSubmit={submit}
        >
            {({ isSubmitting, isValid }) => (
                <FormBox>
                    <FieldBox
                        name="password"
                        type="password"
                        label="Password"
                    />
                    <FieldBox
                        name="passwordConfirm"
                        type="password"
                        label="Confirm Password"
                    />
                    <Button type='submit' variant="contained" color="primary" disabled={isSubmitting || !isValid}>
                        Change Password
                    </Button>
                </FormBox>
            )}
        </Formik >
    </div >
})

export default ChangePassword

