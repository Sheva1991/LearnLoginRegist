import React, { memo } from 'react'
import { Field, Formik } from 'formik';
import { Box, Button } from '@material-ui/core';
import { validation } from './validation';
import { useMount } from 'hooks/useMount';
import FormBox from 'features/Auth/components/FormBox';
import Row from 'features/Auth/components/Row';
import TextField from 'components/Fields/TextField';
import { Post } from '../types';
import { useDispatch } from 'react-redux';
import UploadFileField from 'components/Fields/UploadFileField';
import { PropsType } from './types';


const FormPost: React.FC<PropsType> = memo(({ action, id, data }) => {
    const mountState = useMount()
    const dispatch = useDispatch()

    const submit = async (values: Post, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        try {
            await dispatch(action(values, id))
        } finally {
            if (mountState.mounted) {
                setSubmitting(false)
            }
        }
    }

    return <>
        <Formik
            initialValues={{ ...data }}
            validationSchema={validation}
            onSubmit={submit}
        >
            {({ isSubmitting, isValid }) => (

                <FormBox>
                    <Row>
                        <Field
                            component={TextField}
                            name="name"
                            type="text"
                            label="Название"
                        />
                    </Row>
                    <Row>
                        <Field
                            component={UploadFileField}
                            name="image"
                            type='file'
                            label="Image"
                        />
                    </Row>
                    <Row>
                        <Field
                            component={TextField}
                            name="text"
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

export default FormPost

