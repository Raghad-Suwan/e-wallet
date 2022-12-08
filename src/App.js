import React from "react";
<<<<<<< HEAD
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

=======
//import "./App.css";
//import "./services.css";
/*import Cards from "./Components/CardsServices ";
import img1 from "./Components/deposit1.jpg";
import img2 from "./Components/Transformation.jpg";
import img3 from "./Components/Withdrawal.jpg";
import img4 from "./Components/للدفع.jpg";
import img5 from "./Components/فاتورة.png";*/

//import Signup from './components/Signup';
//import ContactForm from './components/contact/ContactForm';
//import Image from './components/contact/Header';
//import './components/contact/ContactForm.css';
// import "./services.css";

// import Cards from "./Components/CardsServices ";
// import img1 from "./Components/deposit1.jpg";
// import img2 from "./Components/Transformation.jpg";
// import img3 from "./Components/Withdrawal.jpg";
// import img4 from "./Components/للدفع.jpg";
// import img5 from "./Components/فاتورة.png";




//import Navbar from './Components/Navbar';
// import ContactForm from './components/Con

 
>>>>>>> 6d7295a664f179e9b7598ff8e232d89d502cc8a9
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

 




