import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validation =
    Yup.object().shape({
        name: Yup.string().nullable().max(255),
        surname: Yup.string().nullable().max(255),
        birthday: Yup.date().nullable().min(new Date('01-01-1945')).max(new Date()),
        phone: Yup.object().shape({
            code: Yup.string().max(6),
            number: Yup.string().max(10).matches(phoneRegExp, 'Phone number is not valid'),
        }),
        address: Yup.object().shape({
            state: Yup.string().nullable().max(255),
            city: Yup.string().nullable().max(255),
        }),
        avatar: Yup.mixed()
            .test('is-correct-file', 'VALIDATION_SIZE', (file): boolean => {
                let valid = true
                if (!file) {
                    return true
                }
                if (file.size) {
                    const sizeConverted = file.size / 1024 / 1024
                    if (sizeConverted > 1) {
                        valid = false
                    }
                }
                return valid
            })
            .test('is-big-file', 'VALIDATION_TYPE', (file): boolean => {
                let valid = true
                if (!file) {
                    return true
                }
                if (!['image/jpeg', 'image/png'].includes(file.type)) {
                    valid = false
                }
                return valid
            })
    })




