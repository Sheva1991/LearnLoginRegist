

export const getFiniteValue = (obj: Object) => {
    const formData = new FormData()
    for (const [key, value] of Object.entries(obj)) {
        if (value instanceof File) {
            formData.append(key, value);
        } else if (typeof (value) === 'object') {
            for (const [key1, value1] of Object.entries(value)) {
                formData.append(`${key}[${key1}]`, value1 as string);
            }
        } else {
            formData.append(key, value);
        }
    }
    return formData
}