import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        media: {
            height: 140,
        },
    }), { name: 'DetailsPost' }
);