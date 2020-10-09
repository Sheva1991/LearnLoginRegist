import { createMuiTheme } from '@material-ui/core/styles';

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
        },
        MuiFormLabel: {
            root: {
                color: '#fff',
                fontSize: '16px'
            }
        }
    }
});