import { FieldProps } from 'formik'
import React from 'react'
import { Select as MuiSelect, SelectProps } from '@material-ui/core'
import { OutlinedTextFieldProps, TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
export interface TextFieldProps extends FieldProps, Omit<MuiTextFieldProps, 'name' | 'value' | 'error'> {
}

const SelectField: React.FC<TextFieldProps & SelectProps & OutlinedTextFieldProps> = ({ field, form, meta, ...props }) => {
    const error = form.touched[field.name] && !!form.errors[field.name]
    return (
        <MuiSelect id="select" {...field} value={field.value || ''} error={error} onChange={field.onChange}
            onBlur={field.onBlur} {...props}>
            <MenuItem value="+7">+7</MenuItem>
            <MenuItem value="+380">+380</MenuItem>
        </MuiSelect>
    )
}

export default SelectField
