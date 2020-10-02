import React, { memo, useEffect, useMemo } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import styles from './RegistrationForm.module.scss'
import { FormValues } from './types';
import Button from 'components/Button';
import ErrorField from '../ErrorField';
import Input from '../Input';




const RegistrationForm: React.FC = memo(() => {

    const action = (values: FormValues) => {
        console.log('registration')
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
                name: '', email: '', password: '', passwordConfirm: ''
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string().min(1).required("Name is required"),
                email: Yup.string().email("Email not valid").required("Email is required"),
                password: Yup.string().min(3).max(20).required("Password is required"),
                passwordConfirm: Yup.string()
                    .oneOf([Yup.ref('password')], 'Confirm password').required('Password confirm is required')
            })}
            onSubmit={submit}
        >
            {({ isSubmitting, isValid }) => (
                <div className={styles.root}>
                    <Form className={styles.form}>
                        <div className={styles.field}>
                            <label>
                                <div className={styles.label}>Name</div>
                            </label>
                            <Field
                                name='name'
                                component={Input}
                                type='text'
                            />
                            <ErrorMessage name='name' component={ErrorField} />
                        </div>
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
                        <div className={styles.field}>
                            <label>
                                <div className={styles.label}>Confirm Password</div>
                            </label>
                            <Field
                                name='passwordConfirm'
                                component={Input}
                                type='password'
                            />
                            <ErrorMessage name='passwordConfirm' component={ErrorField} />
                        </div>

                        <Button type='submit' title='Registrate' className={styles.btn} disabled={isSubmitting || !isValid} />
                    </Form>

                </div>
            )}
        </Formik>
    </div>
})

export default RegistrationForm

