import * as Yup from 'yup';

export const validation =
    Yup.object().shape({
        name: Yup.string().min(4).max(255).required("Title is required"),
        text: Yup.string().min(80).max(1000).required("Body is required"),
        image: Yup.mixed().required()
            .test('is-correct-file', 'VALIDATION_SIZE', (file): boolean => {
                let valid = true
                if (!file) {
                    return true
                }
                if (file.size) {
                    const sizeConverted = file.size / 1024 / 1024
                    if (sizeConverted > 2) {
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
                if (!['image/jpeg', 'image/png', 'image/svg'].includes(file.type)) {
                    valid = false
                }
                return valid
            })
    })