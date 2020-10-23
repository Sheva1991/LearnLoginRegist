import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        buttons: {
            display: 'flex',
            alignSelf: 'flex-end'
        }
    }), { name: 'ProfileInfo' }
);