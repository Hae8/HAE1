import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline'

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    fontColor: { main: '#0D0D0D' },
    mainColor: { main: '#F2CB05'},
    subColor1: { main: '#1BAFBF' },
    subColor2: { main: '##F2E205' },
    bgColor: { main: '#F2F2F2' },
  }
})

root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();