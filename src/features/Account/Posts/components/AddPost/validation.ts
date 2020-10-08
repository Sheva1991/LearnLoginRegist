import * as Yup from 'yup';

export const validation =
    Yup.object().shape({
        title: Yup.string().min(3).max(20).required("Title is required"),
        body: Yup.string().min(20).max(400).required("Body is required"),
    })