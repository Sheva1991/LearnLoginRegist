import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    }), { name: 'Verify' }
);