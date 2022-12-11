import React from "react";
import AboutPage from "./components/Pages/About-Us/AboutPage";
import "./App.css";
import{BrowserRouter, Routes, Route} from 'react-router-dom';

import MonyTransferPage from './components/Pages/Money-Transfer/MonyTransferPage';
import MarchentBills from './components/Pages/Marchent-bilss/MarchentBills';
import MobileTopUpPage from './components/Pages/Mobile-Top-Up/MobileTopUpPage';
import CashInthoughAgents from './components/Pages/Cash-In-though-Agents/CashInthoughAgents';
import Login from './components/Signing/Login';
import Signup from './components/Signing/Signup';
import Home from "./components/Pages/Home/Home";
import ContactForm from "./components/ContactUs/ContactForm";
import Pic from "./components/Moving-Card/Pic";
import Footer from "./components/Footer/Footer";
import CardImport from "./components/Properties/CardImport";


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
        <Route path="/" index element={<Home/>} />
        <Route path="/sign" element ={<Signup />} />
        <Route path="/Contact " element={<ContactForm/>} />
        <Route path="/about" element ={<AboutPage/>} />
        <Route path="/login" element ={< Login/>} />
        <Route path="/cashInthoughAgentst" element={<CashInthoughAgents/>} />
        <Route path="/trancfer" element={<MonyTransferPage/>} />
        <Route path="/mobiltop" element={<MobileTopUpPage/>} />
        <Route path="/bills" element={<MarchentBills/>} />
      </Routes>
  </BrowserRouter> */}
</div>
  );
}
export default App;