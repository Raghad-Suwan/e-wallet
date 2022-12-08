import './index.css';
import React from 'react';              //import react library 
import ReactDOM from 'react-dom/client';//import reactdom library 
import App from './App';                //import main file (App) all work on it
//import{BrowserRouter, Routes, Route} from 'react-router-dom';

// export default function App() {
//   return ( 
// <div></div>
// <BrowserRoter>
//     
//       <Routes>
//       <Route path="/" index element={<Home />} />
//       <Route path="/sign" element ={<Signup />} />
//       <Route path="/Contact " element={<Contact />} />
//       <Route path="/about" element ={<About />} />
//       <Route path="/login" element ={<Signup />} />

//       <Route path="/paybills" element={<Paybills />} />
//       <Route path="/marchent" element={<Marchent />} />
//       <Route path="/trancfer" element={<MonyTransferPage/>} />
//       <Route path="/mobiltop" element={<MobileTopUpPage/>} />
//       <Route path="/digital" element={<Conect/>} />
//       </Routes>
//      
//      </BrowserRoter>
//    );
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
