import React, { memo, useEffect, useMemo } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import styles from './LoginForm.module.scss'
import { FormValues } from './types';
import Button from 'components/Button';
import ErrorField from '../ErrorField';
import Input from '../Input';




const LoginForm: React.FC = memo(() => {

    const action = (values: FormValues) => {
        console.log('login')
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
                email: '', password: ''
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email("Email not valid").required("Email is required"),
                password: Yup.string().min(3).max(20).required("Password is required"),
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
                                type='email'
                            />
                            <ErrorMessage name='email' component={ErrorField} />
                        </div>
                        <div className={styles.field}>
                            <label>
                                <div className={styles.label}>Password</div>
                            </label>
                            <Field
                                name='password'
                                component={Input}
                                type='password'
                            />
                            <ErrorMessage name='password' component={ErrorField} />
                        </div>

                        <Button type='submit' title='Log in' className={styles.btn} disabled={isSubmitting || !isValid} />
                    </Form>

                </div>
            )}
        </Formik>
    </div>
})

export default LoginForm

