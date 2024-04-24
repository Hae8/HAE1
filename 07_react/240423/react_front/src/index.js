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
    fontColor: { main: '#8C1B1B' },
    mainColor: { main: '#D97E96'},
    subColor: { main: '#A62D4D' },
    bgColor1: { main: '#BF8F9C' },
    bgColor2: { main: '#F2F2F2' },
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