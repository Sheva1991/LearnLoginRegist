

export const getFiniteValue = (obj: Object) => {
    const formData = new FormData()
    getProp(obj);

    function getProp(o: Object) {
        for (const [key, value] of Object.entries(o)) {
            if (typeof (value) === 'object') {
                getProp(value);
            } else {
                formData.append(key, value);
            }
        }
    }
    return formData
}