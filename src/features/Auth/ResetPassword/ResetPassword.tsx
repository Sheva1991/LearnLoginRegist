import React, { memo, useState } from 'react'
import { Field, Formik } from 'formik';
import { ResetPasswordFormValues, PropsType } from './types';
import { Box, Button, Typography } from '@material-ui/core';
import FormBox from 'features/Auth/components/FormBox';
import { validation } from './validation';
import { useMount } from '../../../hooks/useMount';
import Row from 'features/Auth/components/Row';
import TextField from 'components/Fields/TextField';
import { NavLink, useLocation } from 'react-router-dom';
import { resetPassword } from './actions';
import { useDispatch } from 'react-redux';
import { ROUTES } from '../../../constants/routes';
const queryString = require('query-string');



const ResetPassword: React.FC<PropsType> = memo(() => {
    const mountState = useMount()
    const dispatch = useDispatch()
    const [message, setMessage] = useState(false)
    const { search } = useLocation()
    const { token, email } = queryString.parse(search);


    const submit = async (values: ResetPasswordFormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const data = { ...values, token, email }
        try {
            await dispatch(resetPassword(data))
        } finally {
            if (mountState.mounted) {
                setSubmitting(false)
                setMessage(true)
            }
        }
    }

    if (message) {
        return (
            <Typography variant="h5" align='center' component="h4">
                Пароль изменен!
                <Box margin={2}>
                    <Button variant="contained" color="primary" component={NavLink} to={ROUTES.auth.login}>
                        Перейти на страницу логина
                    </Button>
                </Box>
            </Typography>
        )
    }

    return <>
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
    </>
})

export default ResetPassword

