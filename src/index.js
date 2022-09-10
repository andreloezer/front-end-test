import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './fonts/BebasNeue Bold.ttf';
import './fonts/BebasNeue Thin.ttf';
import './fonts/BebasNeue-Regular.ttf';
import './fonts/Raleway-Regular.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
