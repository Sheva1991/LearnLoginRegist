import React from 'react'
import { PropsType } from './types'
import { FieldProps } from "formik";
import classNames from 'classnames'
import styles from './Textarea.module.scss'

const Textarea: React.FC<PropsType & FieldProps> = ({
    placeholder,
    className,
    field
}) => {
    return (
        <textarea {...field} className={classNames(styles.root, className)} placeholder={placeholder} />
    )
}

export default Textarea
