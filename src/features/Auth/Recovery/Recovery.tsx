import React, { memo, useState } from 'react'
import { Field, Formik } from 'formik';
import { RecoveryValues } from './types';
import { Box, Button, Typography } from '@material-ui/core';
import FormBox from '../components/FormBox';
import { validation } from './validation';
import useMount from 'hooks/useMount';
import Row from '../components/Row';
import TextField from 'components/Fields/TextField';
import { useDispatch } from 'react-redux';
import { recovery } from './actions';
import { ROUTES } from 'constants/routes';
import { NavLink } from 'react-router-dom';




const Recovery: React.FC = memo(() => {
    const mountState = useMount()
    const [message, setMessage] = useState(false)
    const dispatch = useDispatch()


    const submit = async (values: RecoveryValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        try {
            await dispatch(recovery(values))
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
                Письмо отправлено вам на почту!
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

