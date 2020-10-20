import { FieldProps } from 'formik'
import React, { useState } from 'react'
import { Typography, Box } from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { useStyles } from './styles';

const UploadFileField: React.FC<FieldProps> = ({ field, form, ...props }) => {
    const classes = useStyles()
    const [isFileTooLarge, setFileTooLarge] = useState(false)
    const [error, setError] = useState('')

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/jpeg, image/png",
        onDrop: acceptedFiles => {
            setFileTooLarge(false)
            if (acceptedFiles.length > 0) {
                console.log(acceptedFiles[0]);
                form.setFieldValue("avatar", acceptedFiles[0].name);
            }
        },
        multiple: false,
        maxFiles: 1,
        maxSize: 1048576,
        onDropRejected: rejectedFiles => {
            if (rejectedFiles.length > 0) {
                setFileTooLarge(true)
                setError(rejectedFiles[0].errors[0].message)
            }

        }
    });



    return (
        <Box width={1} {...getRootProps({ className: "dropzone" })} className={classes.root}>
            <input {...field} value={''} {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                    <AddAPhotoIcon className={classes.icon} />
                )}
            {field.value &&
                <Typography variant="body1" component="p">
                    ${field.value}
                </Typography>
            }
            {isFileTooLarge && (
                <Typography variant="body1" color='secondary' component="p">
                    {error}
                </Typography>
            )}
        </Box>

    )
}

export default UploadFileField





