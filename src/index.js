import  React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { AuthContextProvider } from './Components/Main/AuthContext';
import { ThemeContextProvider } from './DarkModeContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
   <AuthContextProvider>
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
   </AuthContextProvider>
    </BrowserRouter>
);

