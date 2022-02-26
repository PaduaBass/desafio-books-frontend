import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RootProvider from './contexts';
import './themes/global.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RootProvider>
        <App />
      </RootProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
