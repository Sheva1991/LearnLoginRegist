import React, { memo, useEffect, useMemo } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import styles from './RecoveryForm.module.scss'
import { FormValues } from './types';
import Button from 'components/Button';
import ErrorField from '../ErrorField';
import Input from '../Input';
import { useHistory } from 'react-router-dom';




const RecoveryForm: React.FC = memo(() => {
    const history = useHistory()
    const action = (values: FormValues) => {
        console.log('recoverPassword')
    }

    const mountState = useMemo(
        () => ({
            mounted: false,
        }),
        []
    )

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

    useEffect(
        () => {
            mountState.mounted = true;
            return () => {
                mountState.mounted = false;
            }
        },
        [mountState]
    )

    return <div>
        <Formik
            initialValues={{
                email: ''
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email("Email not valid").required("Email is required")
            })}
            onSubmit={submit}
        >
            {({ isSubmitting, isValid }) => (
                <div className={styles.root}>
                    <Form className={styles.form}>
                        <div className={styles.field}>
                            <label>
                                <div className={styles.label}>Email</div>
                            </label>
                            <Field
                                name='email'
                                component={Input}
                                label="Email"
                                type='email'
                            />
                            <ErrorMessage name='email' component={ErrorField} />
                        </div>
                        <Button type='submit' title='Sent new password on Email' className={styles.btn} disabled={isSubmitting || !isValid} />
                    </Form>

                </div>
            )}
        </Formik>
    </div>
})

export default RecoveryForm

