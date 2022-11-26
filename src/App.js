// import Adress from './Components/Adress';
// import './App.css';
// import Card from './Components/Card';
import './App.css';
import Cards from './Components/Cards';
import img1 from './Components/deposit1.jpg';
import img2 from './Components/Transformation.jpg';
import img3 from './Components/Withdrawal.jpg';
import img4 from './Components/pay1.jpg';
import img5 from './Components/pay bills.jpg';




function App() {
  return (
    <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Cards  imgsrc={img1} title="Money withdrawal" textt="You can withdraw any amount of money from your e-wallet at any time ... "/>
                    </div>
                    <div className="col-md-4">
                        <Cards imgsrc={img2} title="Money transfer " textt="Transferring money to your family and friends is now easier, faster, and ..."/>
                    </div>
                    <div className="col-md-4">
                        <Cards imgsrc={img3} title="Deposite money" textt="Feeding your account by depositing money into your e-wallet when visiting one of ..."/>
                    </div>
                    <div  className="col-md-4" id='card4'>
                        <Cards  imgsrc={img4} title="Pay for merchants" textt="Paying merchants, shops, and even restaurants is now easier and faster!..."/>
                    </div>
                    <div className="col-md-4">
                        <Cards imgsrc={img5} title="Pay bills" textt="Now, through your e-wallet, you can pay your bills and save them directly and easily, from anywhere.."/>
                    </div>
                    
                    
                </div>
            </div>
  //   <div className='app'>
    
  //   <Adress />
  //   <Card class="card" />
    
  // </div>
  
  );
}

export default App;