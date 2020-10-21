import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        root: {
            maxWidth: '50%',
            margin: 'auto'
        },
        media: {
            height: 250,
        },
        btn: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
    }), { name: 'DetailsPost' }
);