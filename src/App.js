import React from "react";
<<<<<<< HEAD




//import Signup from './components/Signup';
//import ContactForm from './components/ContactForm';
//import Image from './components/Header';
// import './components/ContactForm.css';
import "./components/Services/services.css";

import Cards from "./components/Services/CardsServices ";
import img1 from "./components/image/deposit1.jpg";
import img2 from "./components/image/Transformation.jpg";
import img3 from "./components/image/Withdrawal.jpg";
import img4 from "./components/image/paay.jpg";
import img5 from "./components/image/invoice.png";




// import Navbar from './Components/Navbar';
// import ContactForm from './components/Con


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
 <div className="container-fluid d-flex justify-content-center">
        <section className="row">
            <div className="col-md-4">
            <Cards
                imgsrc={img1}
                title="Money withdrawal"
                textt="You can withdraw any amount of money from your e-wallet at any time ... "
            />
            </div>
            <div className="col-md-4">
            <Cards
                imgsrc={img2}
                title="Money transfer "
                textt="Transferring money to your family and friends is now easier, faster, and ..."
            />
            </div>
            <div className="col-md-4">
            <Cards
                imgsrc={img3}
                title="Deposite money "
                textt="Feeding your account by depositing money into your e-wallet when visiting one of ..."
            />
            </div>
            <div className="col-md-4">
            <Cards
                className="card44"
                imgsrc={img4}
                title="Pay for merchants"
                textt="Paying merchants, shops, and even restaurants is now easier and faster!..."
            />
            </div>
            <div className="col-md-4">
            <Cards
                imgsrc={img5}
                title="Pay bills"
                textt="Now, through your e-wallet, you can pay your bills and save them directly and.."
            />
            </div>
        </section>
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
  );
}
export default App;

 
>>>>>>> 3a6eaa73b81a9a5c117c6b8119edcc34fe9153a7





</div>
);
}
export default App;

       