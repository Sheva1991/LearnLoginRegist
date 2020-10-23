import { FieldProps } from 'formik'
import React, { useEffect, useMemo, useState } from 'react'
import { Typography, Box, Avatar } from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { useStyles } from './styles';
import { PropsType } from './types';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const UploadFileField: React.FC<FieldProps & PropsType> = ({ field, prevImage, form, meta, accept, maxSize = 1048576 }) => {
    const classes = useStyles()
    const [prevPreview, setPrevPreview] = useState(prevImage)

    const deleteValueFromField = (e: React.SyntheticEvent) => {
        e.stopPropagation()
        form.setFieldValue(field.name, null);
        setPrevPreview(null)
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: accept,
        onDrop: acceptedFiles => {
            if (acceptedFiles.length > 0) {
                form.setFieldValue(field.name, acceptedFiles[0]);
            }
        },
        multiple: false,
        maxFiles: 1,
        maxSize: maxSize,
        onDropRejected: rejectedFiles => {
            if (rejectedFiles.length > 0) {
                form.setFieldError(field.name, rejectedFiles[0].errors[0].message)
            }
        },
    });

    const preview = useMemo(
        () => field.value && URL.createObjectURL(field.value),
        [field.value]
    )

    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview)
            }
        }
    }, [preview])


    return (
        <Box width={1} {...getRootProps()} className={classes.root}>
            <input {...field} value={''} {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                    field.value || prevPreview ?
                        <>
                            <Avatar alt={`${field.name}-preview`} className={classes.large}
                                src={preview ? preview : prevPreview ? prevPreview : ''} />
                            <HighlightOffIcon onClick={deleteValueFromField} className={classes.deleteIcon} />
                        </>
                        : <AddAPhotoIcon />

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





