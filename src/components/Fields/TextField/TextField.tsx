import { FieldProps } from 'formik'
import React from 'react'
import { TextField as MuiTextField } from '@material-ui/core'
import { OutlinedTextFieldProps, TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField';
export interface TextFieldProps extends FieldProps, Omit<MuiTextFieldProps, 'name' | 'value' | 'error'> {
}

const TextField: React.FC<TextFieldProps & OutlinedTextFieldProps> = ({ field, form, meta, ...props }) => {
    const error = form.touched[field.name] && !!form.errors[field.name]
    return (
        <MuiTextField fullWidth={true} {...field} value={field.value || ''} error={error} onChange={field.onChange}
            onBlur={field.onBlur} helperText={form.errors[field.name] && form.touched[field.name] && String(form.errors[field.name])} {...props} />
    )
}

export default TextField
