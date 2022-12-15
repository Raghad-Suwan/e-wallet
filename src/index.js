import './index.css';
import React from 'react';              
import App from './App';                
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
=======
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from "./components/Pages/Home/Home";

import MonyTransferPage from './components/Pages/Money-Transfer/MonyTransferPage';
import MobileTopUpPage from './components/Pages/Mobile-Top-Up/MobileTopUpPage';
import CashInthoughAgents from './components/Pages/Cash-In-though-Agents/CashInthoughAgents';
import Login from './components/Signing/Login';
import Signup from './components/Signing/Signup';
import ContactForm from "./components/ContactUs/ContactForm";
import AboutPage from './components/Pages/About-Us/AboutPage';
import Marchent from './components/Pages/Pay-to-Merchants/Marchent';
//import ChartsAndDraw from './components/WalletDesign/ChartsAndDraw';
//import Menue from './components/WalletDesign/Menue';

>>>>>>> e50a2af6ea52199e725a4a81b92e43d4d02b6777

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
         <App/>
=======
        <App/>
    <BrowserRouter>
        <Routes>
        {/* <Route path="/" index element={<Home/>} /> */}
        <Route path="/sign" element ={<Signup />} />
        <Route path="/contact " element={<ContactForm/>} />
        <Route path="/about" element ={<AboutPage/>} />
        <Route path="/login" element ={< Login/>} />
        <Route path="/cashInthoughAgentst" element={<CashInthoughAgents/>} />
        <Route path="/transfer" element={<MonyTransferPage/>} />
        <Route path="/mobiltop" element={<MobileTopUpPage/>} />
        {/* <Route path="/bills" element={<Marchent/>} /> */}
        </Routes>
      </BrowserRouter>
>>>>>>> e50a2af6ea52199e725a4a81b92e43d4d02b6777
  </React.StrictMode>
          // <Menue/>
          // <ChartsAndDraw/> 
);

