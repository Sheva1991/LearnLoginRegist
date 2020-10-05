import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        btn: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
    }),
);