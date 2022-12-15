import React from "react";
import "./App.css";
import SignPageRouter from './components/Signing/SignPageRouter';

//import ContactForm from './components/ContactUs/ContactForm';
//import Signup from './components/Signing/Signup';
import ChartsAndDraw from './components/WalletDesign/ChartsAndDraw';
import Menue from './components/WalletDesign/Menue';
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
       <Route path="/bills" element={<MarchentBills/>}/>
      </Routes>
     </BrowserRouter> */}
        <Menue/>
<ChartsAndDraw/> 

     
</div>

  );
}
export default App;

