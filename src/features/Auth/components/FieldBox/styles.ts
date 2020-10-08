import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: '15px',
            width: '100%',
        },
    }), { name: 'FieldBox' }
);