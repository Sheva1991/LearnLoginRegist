import React from 'react'
import { FieldProps } from "formik";
import classNames from 'classnames'
import styles from './Input.module.scss'
import { PropsType } from './types';

const Input: React.FC<PropsType & FieldProps> = ({
    className,
    placeholder,
    field,
    type
}) => {
    return (
        <input {...field} type={type} className={classNames(styles.root, className)} placeholder={placeholder} />
    )
}

export default Input
