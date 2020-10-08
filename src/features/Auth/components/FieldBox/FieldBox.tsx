import React from 'react'
import { Field } from 'formik';
import { useStyles } from './styles';
import { Box } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { PropsType } from './types';

const FieldBox: React.FC<PropsType> = ({ name, type, label, variant }) => {
    const classes = useStyles();
    return (
        <Box margin={1} >
            <Field
                className={classes.root}
                component={TextField}
                name={name}
                type={type}
                label={label}
                variant={variant}
            />
        </Box>
    )
}

export default FieldBox
