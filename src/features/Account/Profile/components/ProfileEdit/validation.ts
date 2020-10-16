import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validation =
    Yup.object().shape({
        name: Yup.string().min(3).max(255).required("Name is required"),
        surname: Yup.string().min(3).max(255).required("Surname is required"),
        birthday: Yup.date().min(new Date('01-01-1945')).max(new Date()).required(),
        phone: Yup.object().shape({
            code: Yup.string().min(2).max(6).required("code is required"),
            number: Yup.string().max(10).matches(phoneRegExp, 'Phone number is not valid'),
        }),
        address: Yup.object().shape({
            state: Yup.string().min(3).max(255).required("state is required"),
            city: Yup.string().min(3).max(255).required("city is required"),
        }),

    })


