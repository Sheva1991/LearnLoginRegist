import React, { memo, useEffect, useMemo } from 'react'
import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { FormValues } from './types';
import { Box, Button, CircularProgress, Link } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { TextField } from 'formik-material-ui';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './styles';
import { login, authorize } from '../../actions';
import { RootState } from '../../../../app/store';




const LoginForm: React.FC = memo(() => {
    const loading = useSelector((state: RootState) => state.auth.loading)
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            dispatch(authorize(token, () => {
                history.push({
                    pathname: ROUTES.account.main,
                })
            }))
        }
    }, [])

    const mountState = useMemo(
        () => ({
            mounted: false,
        }),
        []
    )

    const submit = async (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        try {
            await dispatch(login(values, () => {
                history.push({
                    pathname: ROUTES.account.main,
                })
            }))
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
        { loading ? <CircularProgress /> :
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
                    <Form className={classes.root}>
                        <Box margin={1} >
                            <Field
                                className={classes.field}
                                component={TextField}
                                name="email"
                                type="email"
                                label="Email"
                            />
                        </Box>
                        <Box margin={1}>
                            <Field
                                className={classes.field}
                                component={TextField}
                                name="password"
                                type="password"
                                label="Password"
                            />
                        </Box>
                        <Box margin={1}>
                            <Button type='submit' variant="contained" color="primary" fullWidth disabled={isSubmitting || !isValid}>
                                Log in
                            </Button>
                        </Box>
                        <Link component={NavLink} to={ROUTES.auth.recoverPassword} color="inherit">Recover Password</Link>
                        <Link component={NavLink} to={ROUTES.auth.registration} color="inherit">Registration</Link>
                    </Form>
                )}
            </Formik>
        }
    </>
})

export default LoginForm

