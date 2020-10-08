import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import { useStyles } from './styles';
import Paper from '@material-ui/core/Paper';
import { PropsType } from './types';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}



const SimpleModal: React.FC<PropsType> = ({ btnTitle, children }) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button color='primary' variant="contained" type="button" onClick={handleOpen}>
                {btnTitle}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Paper style={modalStyle} elevation={3} className={classes.paper}>{children}</Paper>
            </Modal>
        </>
    );
}

export default SimpleModal
