import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(2),
            width: '100%',
        },
    }), { name: 'FieldBox' }
);