import { makeStyles, createStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(() =>
    createStyles({
        root: {
            minHeight: '100vh',
        },
    }), { name: 'App' }
);