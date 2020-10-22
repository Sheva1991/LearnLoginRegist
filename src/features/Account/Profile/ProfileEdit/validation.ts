import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const checkSize = (size: number): boolean => {
    let valid = true
    if (size) {
        const sizeConverted = size / 1024 / 1024
        if (sizeConverted > 1) {
            valid = false
        }
    }
    return valid
}

const checkType = (type: string): boolean => {
    let valid = true
    if (!['image/jpeg', 'image/png'].includes(type)) {
        valid = false
    }
    return valid
}

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
        // avatar: Yup.object().shape({
        //     size: Yup.mixed().test('is-correct-file', 'VALIDATION_SIZE', checkSize),
        //     type: Yup.mixed().test('is-big-file', 'VALIDATION_TYPE', checkType),
        // }).required('A file is required')
    })




