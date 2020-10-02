import React, { memo, useEffect, useMemo } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import styles from './ChangePasswordForm.module.scss'
import { FormValues, PropsType } from './types';
import Button from 'components/Button';
import ErrorField from 'components/Forms/ErrorField';
import Input from 'components/Forms/Input';




const ChangePasswordForm: React.FC<PropsType> = memo(({ password }) => {

    const action = (values: FormValues) => {
        console.log('change Password')
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
                password: '', newPassword: ''
            }}
            validationSchema={Yup.object().shape({
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
                                <div className={styles.label}>Confirm password</div>
                            </label>
                            <Field
                                name='passwordConfirm'
                                component={Input}
                                type='password'
                                disabled
                            />
                            <ErrorMessage name='passwordConfirm' component={ErrorField} />
                        </div>

                        <Button type='submit' title='Change password' className={styles.btn} disabled={isSubmitting || !isValid} />
                    </Form>

                </div>
            )}
        </Formik>
    </div>
})

export default ChangePasswordForm

