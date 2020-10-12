import React, { memo } from 'react'
import { Field, Formik } from 'formik';
import { Box, Button } from '@material-ui/core';
import { Post } from 'features/Account/Posts/types';
import { validation } from './validation';
import { useMount } from 'hooks/useMount';
import FormBox from 'features/Auth/components/FormBox';
import Row from 'features/Auth/components/Row';
import { TextField } from 'formik-material-ui';




const AddPost: React.FC = memo(() => {
    const mountState = useMount()
    const action = (values: Post) => {
        console.log('add post')
    }

    const submit = async (values: Post, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        try {
            await action(values)
        } finally {
            if (mountState.mounted) {
                setSubmitting(false)
            }
        }
    }

    return <>
        <Formik
            initialValues={{
                id: 5, title: '', body: ''
            }}
            validationSchema={validation}
            onSubmit={submit}
        >
            {({ isSubmitting, isValid }) => (

                <FormBox>
                    <Row>
                        <Field
                            component={TextField}
                            fullWidth={true}
                            name="title"
                            type="text"
                            label="Название"
                        />
                    </Row>
                    <Row>
                        <Field
                            component={TextField}
                            fullWidth={true}
                            name="body"
                            type="textarea"
                            multiline={true}
                            label="Содержание"
                            variant="outlined"
                        />
                    </Row>
                    <Box margin={1}>
                        <Button type='submit' variant="contained" color="primary" fullWidth disabled={isSubmitting || !isValid}>
                            Add post
                        </Button>
                    </Box>
                </FormBox>
            )}
        </Formik>
    </>
})

export default AddPost

