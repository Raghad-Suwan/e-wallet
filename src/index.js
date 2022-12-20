import './index.css';
import React from 'react';
import App from './App';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
<<<<<<< HEAD
/*import Home from "./components/Pages/Home/Home";*/
=======
 //import Home from "./components/Pages/Home/Home";
>>>>>>> f0035381a600a688b907db3ef8d3ed4022ab1476
import MonyTransferPage from './components/Pages/Money-Transfer/MonyTransferPage';
import MobileTopUpPage from './components/Pages/Mobile-Top-Up/MobileTopUpPage';
/*import Login from './components/Signing/Login';*/
import Signup from './components/Signing/Signup';
<<<<<<< HEAD
/*import ContactForm from "./components/ContactUs/ContactForm";
=======
 import ContactForm from "./components/ContactUs/ContactForm";
>>>>>>> f0035381a600a688b907db3ef8d3ed4022ab1476
import AboutPage from './components/Pages/About-Us/AboutPage';
import ForgotPassword from './components/Signing/ForgotPassword';*/
import CashInthoughAgents from './components/Pages/Cash-In-though-Agents/CashInthoughAgents';
import Payment from './components/Pages/Payment-of-bills/Payment';
/*import Card from './components/Deposite-Money/Card';*/
import ImportUniversity from './components/Cards_push/University/ImportUniversity';
import ImportTelecom from './components/Cards_push/Telecom/ImportTelecom';
import ImportElectricity from './components/Cards_push/Electricity/ImportElectricity';
import ImportWithdraw from './components/Withdrawa_money/ImportWithdraw';
<<<<<<< HEAD
import CallCards from './components/WalletDesign/CallCards';
import Table from './components/Table/Table';
=======
//import CallCards from './components/WalletDesign/CallCards';
>>>>>>> f0035381a600a688b907db3ef8d3ed4022ab1476

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        {/*<Route path="/" index element={<Home />} />*/}
=======
       {/* <Route path="/" index element={<Home />} />     */}
>>>>>>> f0035381a600a688b907db3ef8d3ed4022ab1476
        <Route path="/sign" element={<Signup />} />
        {/*<Route path="/login" element={< Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
<<<<<<< HEAD
        <Route path="/contact " element={<ContactForm />} />
        <Route path="/about" element={<AboutPage />} />*/}
        <Route path="/cashInthoughAgents" element={<CashInthoughAgents/>} />
        <Route path="/transfermoney" element={<MonyTransferPage />} />
        <Route path="/mobiltop" element={<MobileTopUpPage />} />
        <Route path="/payment" element={<Payment/>} />
        {/*<Route path="/ForgotPassword" element={<ForgotPassword />} />*/}
        <Route path="/wallet" element={<CallCards />} />
=======
          <Route path="/contact " element={<ContactForm />} />  
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cashInthoughAgents" element={<CashInthoughAgents/>} />
        <Route path="/transfermoney" element={<MonyTransferPage />} />
        <Route path="/mobiltop" element={<MobileTopUpPage />} />
        <Route path="/payment" element={<Patment/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
         {/* <Route path="/wallet" element={<CallCards />} />  */}
>>>>>>> f0035381a600a688b907db3ef8d3ed4022ab1476
        <Route path="/wallet-withdraw-money" element={<ImportWithdraw />} />
        {/*<Route path="/wallet-deposit-money" element={<Card />} />*/}
        <Route path="/wallet-pay-bills-electricity" element={<ImportElectricity />} />
        <Route path="/wallet-pay-bills-telecom" element={<ImportTelecom />} />
<<<<<<< HEAD
        <Route path="/wallet-pay-bills-university" element={<ImportUniversity />}/>
        <Route path ='/all-transection' element={<Table/>}/>
      </Routes>
</BrowserRouter>
=======
        <Route path="/wallet-pay-bills-university" element={<ImportUniversity />} />
      </Routes> 
    </BrowserRouter>
>>>>>>> f0035381a600a688b907db3ef8d3ed4022ab1476
  </React.StrictMode>
);
