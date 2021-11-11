import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './Context/AuthContext';
import {BrowserRouter} from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import {NotificationContextProvider} from './Notification/NotificationContext'
import { ShopProvider } from './Context/ShopContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ShopProvider>
    <AuthProvider>
    <NotificationContextProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </NotificationContextProvider>
    </AuthProvider>
    </ShopProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
