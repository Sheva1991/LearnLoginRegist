import React, { memo } from 'react'
import { Field, Formik } from 'formik';
import { ChangePasswordFormValues, PropsType } from './types';
import { Button } from '@material-ui/core';
import FormBox from 'features/Auth/components/FormBox';
import { validation } from './validation';
import { useMount } from '../../../hooks/useMount';
import Row from 'features/Auth/components/Row';
import TextField from 'components/Fields/TextField';
import { useHistory, useLocation } from 'react-router-dom';
import { resetPassword } from './actions';
import { useDispatch } from 'react-redux';
import { ROUTES } from '../../../constants/routes';
const queryString = require('query-string');



const ChangePassword: React.FC<PropsType> = memo(() => {
    const mountState = useMount()
    const dispatch = useDispatch()
    const history = useHistory()
    const { search } = useLocation()
    const { token, email } = queryString.parse(search);

    const submit = async (values: ChangePasswordFormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const data = { ...values, token, email }
        try {
            await dispatch(resetPassword(data, () => {
                history.push({
                    pathname: ROUTES.auth.login,
                })
            }))
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
                            name="password_confirmation"
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

