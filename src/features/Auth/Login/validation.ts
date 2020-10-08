import * as Yup from 'yup';

export const validation =
    Yup.object().shape({
        email: Yup.string().email("Email not valid").required("Email is required"),
        password: Yup.string().min(6).max(20).required("Password is required"),
    })


