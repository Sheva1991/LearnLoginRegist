import { FieldProps } from 'formik'
import React from 'react'
import { TextField as MuiTextField } from '@material-ui/core'
import { OutlinedTextFieldProps, TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField';

const TextField: React.FC<FieldProps & OutlinedTextFieldProps & MuiTextFieldProps> = ({ field, form, ...props }) => {
    // const [field, meta] = useField(props); 
    const meta = form.getFieldMeta(field.name)
    const error = meta?.touched && !!meta.error
    return (
        <MuiTextField fullWidth={true} {...field} value={field.value || ''} error={error} onChange={field.onChange}
            onBlur={field.onBlur} helperText={error ? meta.error : undefined}  {...props} />
    )
}

export default TextField



// (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length) {
//         form.setFieldValue("file", e.currentTarget.files ? e.currentTarget.files[0] : '');
//     }

