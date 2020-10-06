import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { ThemeProvider, CssBaseline, Box } from '@material-ui/core';
import { theme, useStyles } from './styles';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme} >
          <CssBaseline />
          <Box className={classes.root}>
            <Routes />
          </Box>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
