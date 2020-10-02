import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import styles from './App.module.scss'
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Header from 'components/Header';

let theme = createMuiTheme({
  palette: {
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
  },
});
theme = responsiveFontSizes(theme);


const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className={styles.root}>
          <Header />
          <main className={styles.main}>
            <Routes />
          </main>
        </div >
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
