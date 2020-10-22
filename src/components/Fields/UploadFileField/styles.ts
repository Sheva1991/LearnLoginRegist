import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'inline-flex',
            alignSelf: 'flex-start',
            position: 'relative',
            border: 'none',
            outline: 'none',
        },
        icon: {
            cursor: 'pointer'
        },
        large: {
            width: theme.spacing(10),
            height: theme.spacing(10),
        },
        delete: {
            position: 'absolute',
            top: '0',
            right: '0',
            zIndex: 10000,
            cursor: 'pointer'
        }
    }), { name: 'UploadField' }
);
