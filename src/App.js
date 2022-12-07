
import React from 'react';
//import PicCard from './components/PicCard';
//import About from './components/About';
import './App.css';
import Pay from './components/pay/Pay';
import PAYMENTOFBILLS from './components/pay/PayMentOfBills';
import SearchBar from './components/searchbar/SearchBar';
import StepsToPay from './components/pay/StepsToPay';
import PAY from './components/marchent/PAY';
import STEPS from './components/marchent/STEPS';
import Shopping from './components/marchent/Shopping';
//import ContactForm from './components/ContactForm';
//import Image from './components/Header';
//import FirstCard from './components/FirstCard';
//import Signform from './components/Signup';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <PAY />
      <PAYMENTOFBILLS />
      <Pay />
      <STEPS />
      <Shopping />
      <StepsToPay />
    </div>
  );
}
export default App;

