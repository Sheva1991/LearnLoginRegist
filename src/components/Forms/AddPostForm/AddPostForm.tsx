import React, { memo, useEffect, useMemo } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import styles from './AddPostForm.module.scss'
import Button from 'components/Button';
import ErrorField from '../ErrorField';
import Input from '../Input';
import { Post } from 'features/PostsPage/types';
import Textarea from '../Textarea';




const AddPostForm: React.FC = memo(() => {

    const action = (values: Post) => {
        console.log('add post')
    }

    const mountState = useMemo(
        () => ({
            mounted: false,
        }),
        []
    )

    const submit = async (values: Post, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
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
                id: 5, title: '', body: ''
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
                                <div className={styles.label}>Название</div>
                            </label>
                            <Field
                                name='title'
                                component={Input}
                                type='text'
                            />
                            <ErrorMessage name='title' component={ErrorField} />
                        </div>
                        <div className={styles.field}>
                            <label>
                                <div className={styles.label}>Содержвание</div>
                            </label>
                            <Field
                                name='body'
                                component={Textarea}
                                type='text'
                                cols="45"
                            />
                            <ErrorMessage name='body' component={ErrorField} />
                        </div>

                        <Button type='submit' title='Add post' className={styles.btn} disabled={isSubmitting || !isValid} />
                    </Form>

                </div>
            )}
        </Formik>
    </div>
})

export default AddPostForm

