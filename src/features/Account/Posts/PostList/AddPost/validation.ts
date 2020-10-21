import * as Yup from 'yup';

export const validation =
    Yup.object().shape({
        name: Yup.string().min(4).max(255).required("Title is required"),
        text: Yup.string().min(80).max(1000).required("Body is required"),
    })