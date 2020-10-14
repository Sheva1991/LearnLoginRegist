import React, { memo } from 'react'
import { Field, Formik } from 'formik';
import { RecoveryValues } from './types';
import { Button } from '@material-ui/core';
import FormBox from '../components/FormBox';
import { validation } from './validation';
import { useMount } from '../../../hooks/useMount';
import Row from '../components/Row';
import TextField from 'components/Fields/TextField';
import { useDispatch } from 'react-redux';
import { recovery } from './actions';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'constants/routes';




const Recovery: React.FC = memo(() => {
    const mountState = useMount()
    const history = useHistory()
    const dispatch = useDispatch()


    const submit = async (values: RecoveryValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        try {
            await dispatch(recovery(values, () => {
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

