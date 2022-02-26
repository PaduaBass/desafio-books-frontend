import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RootProvider from './contexts';
import './themes/global.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes';

ReactDOM.render(
  <React.StrictMode>
    <RootProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </RootProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
