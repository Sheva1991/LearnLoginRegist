import React, { memo } from 'react'
import { Field, Formik } from 'formik';
import { Button, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { validation } from './validation';
import TextField from 'components/Fields/TextField';
import { FullProfile } from '../../../../../types/types';
import { useMount } from '../../../../../hooks/useMount';
import { editProfile } from './actions';
import { selectProfile } from '../../selectors';
import FormBox from 'features/Auth/components/FormBox';
import Row from 'features/Auth/components/Row';
import SelectField from 'components/Fields/SelectField';
import { useStyles } from './styles';




const ProfileEdit: React.FC = memo(() => {
    const classes = useStyles();
    const mountState = useMount()
    const dispatch = useDispatch()
    const profile = useSelector(selectProfile)

    const submit = async (values: FullProfile, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        try {
            await dispatch(editProfile(values))
        } finally {
            if (mountState.mounted) {
                setSubmitting(false)
            }
        }
    }

    return (
        <Box className={classes.root} p={4}>
            <Formik
                initialValues={{
                    id: profile?.id,
                    name: profile?.name,
                    surname: profile?.surname,
                    birthday: profile?.birthday,
                    avatar: profile?.avatar,
                    phone: {
                        code: profile?.phone.code,
                        number: profile?.phone.number
                    },
                    address: {
                        state: profile?.address.state,
                        city: profile?.address.city
                    }
                }}
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
                        <Row>
                            <Field
                                component={TextField}
                                name="avatar"
                                label="Avatar"
                                type="file"
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

