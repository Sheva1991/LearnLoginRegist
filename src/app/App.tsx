import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { ThemeProvider, CssBaseline, Box } from '@material-ui/core';
import { useStyles } from './styles';
import { Provider } from 'react-redux';
import store from './store';
import { theme } from '../theme/theme';
import AppLoader from '../components/AppLoader/AppLoader';


const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme} >
          <CssBaseline />
          <AppLoader>
            <Box className={classes.root}>
              <Routes />
            </Box>
          </AppLoader>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
