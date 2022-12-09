import React from "react";
<<<<<<< HEAD
import { Nav } from "react-bootstrap";
import{BrowserRouter, Routes, Route} from 'react-router-dom';

//import "./App.css";
//import "./components/services/services.css";


//import Signup from './components/Signup';
//import ContactForm from './components/ContactForm';
//import Image from './components/Header';
//import './components/ContactForm.css';
// import "./services.css";

// import Cards from "./Components/CardsServices ";
// import img1 from "./Components/deposit1.jpg";
// import img2 from "./Components/Transformation.jpg";
// import img3 from "./Components/Withdrawal.jpg";
// import img4 from "./Components/للدفع.jpg";
// import img5 from "./Components/فاتورة.png";
import Payment from "./components/marchent-bilss/Payment";
import PayMentOfBills from "./components/marchent-bilss/PayMentOfBills";
import StepsToPay from "./components/marchent-bilss/StepsToPay";
//import PAY from "./components/marchent-bilss/Pay";
//import Shopping from "./components/marchent-bilss/Shopping";
//import STEPS from "./components/marchent-bilss/Steps";
//import SearchBar from "./components/searchbar/SearchBar";


=======
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
import Card from "./components/Deposite/Card";
import Card3 from "./components/Properties/Card3";
>>>>>>> 3a6eaa73b81a9a5c117c6b8119edcc34fe9153a7

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Payment />
      <PayMentOfBills />
      <StepsToPay />

    </div>
=======
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
     <Card3/>
</div>
>>>>>>> 3a6eaa73b81a9a5c117c6b8119edcc34fe9153a7
  );
}
export default App;

 




