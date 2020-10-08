import React from 'react'
import { Form } from 'formik';
import { useStyles } from './styles';

const FormBox: React.FC = ({ children }) => {
    const classes = useStyles();
    return (
        <Form className={classes.root}>
            {children}
        </Form>
    )
}

export default FormBox
