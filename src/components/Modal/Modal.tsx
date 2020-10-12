import React, { useCallback, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import { useStyles } from './styles';
import Paper from '@material-ui/core/Paper';
import { PropsType } from './types';


const SimpleModal: React.FC<PropsType> = ({ btnTitle, children }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = useCallback(() => {
        setOpen(true);
    }, [])

    const handleClose = useCallback(() => {
        setOpen(false);
    }, [])

    return (
        <>
            <Button color='primary' variant="contained" type="button" onClick={handleOpen}>
                {btnTitle}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Paper elevation={3} className={classes.paper}>
                    {children}
                </Paper>
            </Modal>
        </>
    );
}

export default SimpleModal
