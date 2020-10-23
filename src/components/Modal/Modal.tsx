import React from 'react';
import Modal from '@material-ui/core/Modal';
import { useStyles } from './styles';
import Paper from '@material-ui/core/Paper';
import { PropsType } from './types';


const SimpleModal: React.FC<PropsType> = ({ modalClose, opened, children }) => {
    const classes = useStyles();

    return (
        <>
            <Modal
                open={opened}
                onClose={modalClose}
            >
                <Paper elevation={3} className={classes.paper}>
                    {children}
                </Paper>
            </Modal>
        </>
    );
}

export default SimpleModal
