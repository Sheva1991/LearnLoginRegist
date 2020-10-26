import React, { memo } from 'react'
import { Field, Formik, FieldProps } from 'formik';
import { Button, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { validation } from './validation';
import TextField from 'components/Fields/TextField';
import useMount from 'hooks/useMount';
import { editProfile } from './actions';
import FormBox from 'features/Auth/components/FormBox';
import Row from 'features/Auth/components/Row';
import SelectField from 'components/Fields/SelectField';
import { useStyles } from './styles';
import { selectProfile } from 'features/Auth/selectors';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import UploadFileField from 'components/Fields/UploadFileField';
import { FullProfileFormValues, PropsType } from './types';




const ProfileEdit: React.FC<PropsType> = memo(({ modalClose }) => {
    const classes = useStyles();
    const mountState = useMount()
    const dispatch = useDispatch()
    const history = useHistory()
    const { avatar, ...profile } = useSelector(selectProfile) || {}

    const submit = async (values: FullProfileFormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        try {
            await dispatch(editProfile(values, () => {
                history.push({
                    pathname: ROUTES.account.profileInfo
                })
            }))
        } finally {
            if (mountState.mounted) {
                setSubmitting(false)
                modalClose && modalClose()
            }
        }
    }

    return (
        <Box className={classes.root} p={4}>
            <Formik
                initialValues={profile}
                validationSchema={validation}
                onSubmit={submit}
            >
                {({ isSubmitting, isValid }) => (
                    <FormBox>
                        <Row>
                            <Field
                                name="avatar"
                                type='file'
                                label="Avatar"
                            >
                                {({ field, form, meta }: FieldProps) => <UploadFileField field={field} form={form} meta={meta}
                                    prevImage={avatar} accept="image/jpeg, image/png" maxSize={1048576} />}
                            </Field>
                        </Row>
                        <Row>
                            <Field
                                component={TextField}
                                name="name"
                                type="text"
                                label="Name"
                            />
                        </Row>
                        <Row>
                            <Field
                                component={TextField}
                                name="surname"
                                type="text"
                                label="Surname"
                            />
                        </Row>
                        <Row>
                            <Field
                                component={TextField}
                                name="birthday"
                                label="Birthday"
                                type="date"
                            />
                        </Row>
                        <Row className={classes.phone}>
                            <Field
                                component={SelectField}
                                name="phone.code"
                                label="Код"
                            />
                            <Field
                                component={TextField}
                                name="phone.number"
                                label="Number"
                                type="text"
                            />
                        </Row>
                        <Row>
                            <Field
                                component={TextField}
                                name="address.state"
                                label="State"
                                type="text"
                            />
                        </Row>
                        <Row>
                            <Field
                                component={TextField}
                                name="address.city"
                                label="City"
                                type="text"
                            />
                        </Row>
                        <Button type='submit' variant="contained" color="primary" disabled={isSubmitting || !isValid}>
                            Edit profile
                    </Button>
                    </FormBox>
                )}
            </Formik>
        </Box>
    )
})

export default ProfileEdit

