//***********  work malak 


// import React, { Component } from 'react';
// import PicCard from './components/PicCard';
// import About from './components/About';
// import './App.css';
// import ContactForm from './components/ContactForm';
// import Image from './components/Header';

// import Signform from './components/Signup';


//********** deposite


import Adress from './Components/deposite/Adress';
import './Components/deposite/deposit.css';
import Card from './Components/deposite/Card' ;


//********** services


// import './Components/services/services.css';
// import Cards from './Components/services/CardsServices ';
// import img1 from './Components/services/deposit1.jpg';
// import img2 from './Components/services/Transformation.jpg' ;
// import img3 from './Components/services/Withdrawal.jpg';
// import img4 from './Components/services/paay.jpg';
// import img5 from './Components/services/invoice.png';


function App() {
  return (

//   <div className="container-fluid d-flex justify-content-center">
//             <section className="row">
//                 <div className="col-md-4">
//                     <Cards  imgsrc={img1} title="Money withdrawal" textt="You can withdraw any amount of money from your e-wallet at any time ... "/>
//                 </div>
//                 <div className="col-md-4">
//                     <Cards imgsrc={img2} title="Money transfer " textt="Transferring money to your family and friends is now easier, faster, and ..."/>
//                 </div>
//                 <div className="col-md-4">
//                     <Cards imgsrc={img3} title="Deposite money " textt="Feeding your account by depositing money into your e-wallet when visiting one of ..."/>
//                 </div>
                
//                 <div className="card44 col-md-4">
//                     <Cards className='card44' imgsrc={img4} title="Pay for merchants" textt="Paying merchants, shops, and even restaurants is now easier and faster!..."/>
//                 </div>
            
//                 <div className="col-md-4">
//                     <Cards imgsrc={img5} title="Pay bills" textt="Now, through your e-wallet, you can pay your bills and save them directly and.."/>
//                 </div>
              
                
//             </section>
//         </div>  


//********** work malak
//     <div className="App">
//   <Image/>
//   <ContactForm/>


// </div>

//********** deposite

    <div className='app'>
    
    <Adress />
    <Card   />
    
</div>

  );
}
export default App;

