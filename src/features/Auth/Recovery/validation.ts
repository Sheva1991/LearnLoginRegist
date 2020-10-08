import * as Yup from 'yup';

export const validation =
    Yup.object().shape({
        email: Yup.string().email("Email not valid").required("Email is required")
    })


