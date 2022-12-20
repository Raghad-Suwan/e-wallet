import './index.css';
import React from 'react';
import App from './App';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
// import Home from "./components/Pages/Home/Home";
// import MonyTransferPage from './components/Pages/Money-Transfer/MonyTransferPage';
// import MobileTopUpPage from './components/Pages/Mobile-Top-Up/MobileTopUpPage';
// import Login from './components/Signing/Login';
// import Signup from './components/Signing/Signup';
// import ContactForm from "./components/ContactUs/ContactForm";
// import AboutPage from './components/Pages/About-Us/AboutPage';
// import ForgotPassword from './components/Signing/ForgotPassword';
// import CashInthoughAgents from './components/Pages/Cash-In-though-Agents/CashInthoughAgents';
// import Patment from './components/Pages/Payment-of-bills/Patment';
// import Card from './components/Deposite-Money/Card';
// import ImportUniversity from './components/Cards_push/University/ImportUniversity';
// import ImportTelecom from './components/Cards_push/Telecom/ImportTelecom';
// import ImportElectricity from './components/Cards_push/Electricity/ImportElectricity';
// import ImportWithdraw from './components/Withdrawa_money/ImportWithdraw';
// import CallCards from './components/WalletDesign/CallCards';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" index element={<Home />} />
        <Route path="/sign" element={<Signup />} />
        <Route path="/login" element={< Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/contact " element={<ContactForm />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cashInthoughAgents" element={<CashInthoughAgents/>} />
        <Route path="/transfermoney" element={<MonyTransferPage />} />
        <Route path="/mobiltop" element={<MobileTopUpPage />} />
        <Route path="/payment" element={<Patment/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/wallet" element={<CallCards />} />
        <Route path="/wallet-withdraw-money" element={<ImportWithdraw />} />
        <Route path="/wallet-deposit-money" element={<Card />} />
        <Route path="/wallet-pay-bills-electricity" element={<ImportElectricity />} />
        <Route path="/wallet-pay-bills-telecom" element={<ImportTelecom />} />
        <Route path="/wallet-pay-bills-university" element={<ImportUniversity />} /> */}
      </Routes>
    </BrowserRouter>
        <App />
  </React.StrictMode>
);