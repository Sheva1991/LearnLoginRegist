import React, { memo, useEffect, useMemo } from 'react'
import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { Box, Button, TextareaAutosize } from '@material-ui/core';
import { Post } from 'features/Account/components/Posts/types';
import { TextField } from 'formik-material-ui';
import { useStyles } from './styles';




const AddPostForm: React.FC = memo(() => {
    const classes = useStyles();
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

    return <>
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

                <Form>
                    <Box margin={1}>
                        <Field
                            className={classes.field}
                            component={TextField}
                            name="title"
                            type="text"
                            label="Название"
                        />
                    </Box>
                    <Box margin={1}>
                        <Field
                            className={classes.field}
                            component={TextareaAutosize}
                            name="body"
                            type="text"
                            cols="45"
                            label="Содержание"
                        />
                    </Box>
                    <Box margin={1}>
                        <Button type='submit' variant="contained" color="primary" fullWidth disabled={isSubmitting || !isValid}>
                            Add post
                        </Button>
                    </Box>
                </Form>

            )}
        </Formik>
    </>
})

export default AddPostForm

