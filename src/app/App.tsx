import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { ThemeProvider, CssBaseline, Box } from '@material-ui/core';
import { theme, useStyles } from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Box className={classes.root}>
          <Routes />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
