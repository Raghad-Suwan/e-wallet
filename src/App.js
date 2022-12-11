import React from "react";

import "./App.css";
<<<<<<< HEAD
//import{BrowserRouter, Routes, Route} from 'react-router-dom';
//import Home from './components/Home/Home';
//import ContactForm from './components/Contact/ContactForm';
//import MonyTransferPage from './components/Money-Transfer/MonyTransferPage';
//import MobileTopUpPage from './components/Mobile-Top-Up/MobileTopUpPage';
//import CashInthoughAgents from './components/Cash-In-though-Agents/CashInthoughAgents';
//import Login from './components/Signing/Login';
//import Signup from './components/Signing/Signup';
//import AboutPage from './components/About/AboutPage';
//import Card from "./components/Deposite/Card";
//import Card3 from "./components/Properties/Card3";
import Hedermarchent from "./components/Pay-to-Merchants/Hedermarchent";
import Payingmarchent from "./components/Pay-to-Merchants/Payingmarchent";
import Stepstopayingmarchent from "./components/Pay-to-Merchants/Stepstopayingmarchent";
//import Headerpayment from "./components/Payment-of-bills/Headerpayment";
//import Paymentbills from "./components/Payment-of-bills/Paymentbills";
//import StepsToPayment from "./components/Payment-of-bills/StepsToPayment";
//mport SearchBar from "./components/searchbar/SearchBar";
=======
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import MonyTransferPage from './components/Pages/Money-Transfer/MonyTransferPage';
import MarchentBills from './components/Pages/Marchent-bilss/MarchentBills';
import MobileTopUpPage from './components/Pages/Mobile-Top-Up/MobileTopUpPage';
import CashInthoughAgents from './components/Pages/Cash-In-though-Agents/CashInthoughAgents';
import Login from './components/Signing/Login';
import Signup from './components/Signing/Signup';
import Home from "./components/Pages/Home/Home";
import ContactForm from "./components/ContactUs/ContactForm";
import AboutPage from "./components/Pages/About-Us/AboutPage";


>>>>>>> 34b1f5a4528e2f11aa6fcbb9d8faa72c49fe5e3f

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Hedermarchent></Hedermarchent>
      <Payingmarchent></Payingmarchent>
      <Stepstopayingmarchent></Stepstopayingmarchent>
  
    </div>
=======
      <BrowserRouter>
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
     </BrowserRouter>
     
     
</div>
>>>>>>> 34b1f5a4528e2f11aa6fcbb9d8faa72c49fe5e3f
  );
}
export default App;