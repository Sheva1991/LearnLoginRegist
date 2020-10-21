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
        loader: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '50vh'
        }
    }), { name: 'DetailsPost' }
);