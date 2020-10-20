import { createStyles, makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'inline-flex',
            alignSelf: 'flex-start'
        },
        icon: {
            cursor: 'pointer'
        }
    }), { name: 'UploadField' }
);