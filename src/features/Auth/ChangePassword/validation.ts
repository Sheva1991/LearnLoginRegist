import * as Yup from 'yup';

export const validation =
    Yup.object().shape({
        password: Yup.string().min(3).max(20).required("Password is required"),
        password_confirmation: Yup.string()
            .oneOf([Yup.ref('password')], 'Confirm password').required('Password confirm is required')
    })


