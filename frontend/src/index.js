import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./store/CartContext";
import { AuthContextProvider } from './store/AuthContext';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
   <AuthContextProvider>
    <CartContextProvider>
      <App />
      </CartContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
