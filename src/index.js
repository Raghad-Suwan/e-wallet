import './index.css';
import React from 'react';
import App from './App';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from "./components/Pages/Home/Home";
import MonyTransferPage from './components/Pages/Money-Transfer/MonyTransferPage';
import MobileTopUpPage from './components/Pages/Mobile-Top-Up/MobileTopUpPage';
import Login from './components/Signing/Login';
import Signup from './components/Signing/Signup';
import ContactForm from "./components/ContactUs/ContactForm";
import AboutPage from './components/Pages/About-Us/AboutPage';
import ForgotPassword from './components/Signing/ForgotPassword';
import Marchent from './components/Pay-to-Merchants/Marchent';
import CashInthoughAgents from './components/Pages/Cash-In-though-Agents/CashInthoughAgents';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" index element={<Home />} /> */}
        <Route path="/sign" element={<Signup />} />
        <Route path="/login" element={< Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/contact " element={<ContactForm />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cashInthoughAgents" element={<CashInthoughAgents/>} />
        <Route path="/transfermoney" element={<MonyTransferPage />} />
        <Route path="/mobiltop" element={<MobileTopUpPage />} />
        <Route path="/billsmarchent" element={<Marchent/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);