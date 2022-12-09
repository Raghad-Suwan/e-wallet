import React from "react";
import "./App.css";
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import ContactForm from './components/Contact/ContactForm';
import MonyTransferPage from './components/Money-Transfer/MonyTransferPage';
import MarchentBills from './components/Marchent-bilss/MarchentBills';
import MobileTopUpPage from './components/Mobile-Top-Up/MobileTopUpPage';
import CashInthoughAgents from './components/Cash-In-though-Agents/CashInthoughAgents';
import Login from './components/Signing/Login';
import Signup from './components/Signing/Signup';
import AboutPage from './components/About/AboutPage';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/sign" element ={<Signup />} />
        <Route path="/Contact " element={<ContactForm />} />
        <Route path="/about" element ={<AboutPage/>} />
        <Route path="/login" element ={< Login/>} />

        <Route path="/cashInthoughAgentst" element={<CashInthoughAgents />} />
        <Route path="/trancfer" element={<MonyTransferPage/>} />
        <Route path="/mobiltop" element={<MobileTopUpPage/>} />
        <Route path="/bills" element={<MarchentBills/>} />
      </Routes>
     </BrowserRouter>
<Home/>


</div>
  );
}
export default App;

 




