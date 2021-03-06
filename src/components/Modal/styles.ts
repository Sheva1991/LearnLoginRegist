import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'fixed',
            width: theme.spacing(50),
            backgroundColor: 'rgb(25,118,210)',
            padding: theme.spacing(2, 4, 3),
            top: `50%`,
            left: `50%`,
            transform: `translate(-50%, -50%)`,
            maxHeight: 'calc(100% - 64px)',
            overflowY: 'auto'
        },
    }), { name: 'Modal' }
);