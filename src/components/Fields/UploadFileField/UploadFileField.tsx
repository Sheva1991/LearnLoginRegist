import { FieldProps } from 'formik'
import React from 'react'
import { Typography, Box, Avatar } from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { useStyles } from './styles';
import { PropsType } from './types';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const UploadFileField: React.FC<FieldProps & PropsType> = ({ field, form, meta, accept, multiple, maxSize = 1048576 }) => {
    const classes = useStyles()

    const deleteValueFromField = () => {
        form.setFieldValue(field.name, '');
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: accept,
        onDrop: acceptedFiles => {
            if (acceptedFiles.length > 0) {
                form.setFieldValue(field.name, acceptedFiles[0]);
            }
        },
        multiple: multiple,
        maxFiles: 1,
        maxSize: maxSize,
        onDropRejected: rejectedFiles => {
            if (rejectedFiles.length > 0) {
                form.setFieldError(field.name, rejectedFiles[0].errors[0].message)
            }

        },
    });


    return (
        <Box width={1} {...getRootProps()} className={classes.root}>
            <input {...field} value={''} {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (


                    field.value ?
                        <>
                            <Avatar alt={`${field.name}-preview`} className={classes.large}
                                src={URL.createObjectURL(field.value)} />
                            <HighlightOffIcon onClick={deleteValueFromField} className={classes.delete} />
                        </>
                        : <AddAPhotoIcon className={classes.icon} />

                )}
            {meta.error && (
                <Typography variant="body1" color='secondary' component="p">
                    {meta.error}
                </Typography>
            )}
        </Box>

    )
}

export default UploadFileField





