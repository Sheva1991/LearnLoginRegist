import { createMuiTheme, makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    WebkitFontSmoothing: 'auto',
                    height: '100%',
                    fontSize: '16px'
                },
            },
        }
    }
});

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minHeight: '100vh',
            "& .MuiFormLabel-root": {
                color: '#fff'
            },
            "& .Mui-error": {
                color: 'red'
            }
        },
    }),
);