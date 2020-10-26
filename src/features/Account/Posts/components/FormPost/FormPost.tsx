import React, { memo } from 'react'
import { Field, Formik, FieldProps } from 'formik';
import { Box, Button } from '@material-ui/core';
import { validation } from './validation';
import useMount from 'hooks/useMount';
import FormBox from 'features/Auth/components/FormBox';
import Row from 'features/Auth/components/Row';
import TextField from 'components/Fields/TextField';
import { useDispatch } from 'react-redux';
import UploadFileField from 'components/Fields/UploadFileField';
import { PropsType } from './types';
import { Post } from '../../PostList/types';


const FormPost: React.FC<PropsType> = memo(({ action, id, data, modalClose }) => {
    const mountState = useMount()
    const dispatch = useDispatch()
    const { image, ...post } = data || {}

    const submit = async (values: Post, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        try {
            await dispatch(action(values, id))
        } finally {
            if (mountState.mounted) {
                setSubmitting(false)
                modalClose && modalClose()
            }
        }
    }

    return <>
        <Formik
            initialValues={{ ...post }}
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
                            name="image"
                            type='file'
                            label="Image"
                        >
                            {({ field, form, meta }: FieldProps) => <UploadFileField field={field} form={form} meta={meta}
                                prevImage={image} accept="image/jpeg, image/png, image/svg" maxSize={1048576 * 2} />}
                        </Field>
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

