import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        box: {
            display: 'flex'
        },
        large: {
            width: theme.spacing(20),
            height: theme.spacing(20),
            marginRight: theme.spacing(2)
        },



    }), { name: 'ProfileInfo' }
);