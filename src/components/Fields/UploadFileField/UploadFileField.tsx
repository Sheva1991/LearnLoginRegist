import { FieldProps } from 'formik'
import React, { ChangeEvent } from 'react'
import { TextField as MuiTextField } from '@material-ui/core'
import { OutlinedTextFieldProps, TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField';

const UploadFileField: React.FC<FieldProps & OutlinedTextFieldProps & MuiTextFieldProps> = ({ field, form, ...props }) => {
    const meta = form.getFieldMeta(field.name)
    const error = meta?.touched && !!meta.error

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        form.setFieldValue(field.name, event.currentTarget.files);
    }

    return (
        <MuiTextField fullWidth={true} type='file' {...field} value={''} error={error}
            onChange={handleChange} helperText={error ? meta.error : undefined}  {...props} />
    )
}

export default UploadFileField




