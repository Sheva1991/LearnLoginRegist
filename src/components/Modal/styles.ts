import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: theme.spacing(50),
            backgroundColor: 'rgb(25,118,210)',
            padding: theme.spacing(2, 4, 3),
        },
    }), { name: 'Modal' }
);