import React from 'react';
import Card3 from './Card3';
import './Card3.css';

const CardImport=()=>{
    return (
<div className="container text-center containCard ">
  <div className="row align-items-start g-5 h-30 rroowwss">
    <div className="col-12 col-lg-4 ">
      < Card3 title="A User-Friendly App" textt=" Our app is user-friendly and fast, and offers exclusive benefits and numerous services. You can establish your own account and control settings or check transactions at any point in time."/>
    </div>
    <div className="col-12 col-lg-4 ">
      < Card3 title="24/7 Support"  textt="You will find many ways to communicate with the support team which is available 24/7. Try calling us on 1700555555, Message us on WhatsApp, Facebook, our website, or other means."/>
    </div>
    <div className="col-12 col-lg-4">
      < Card3 title="100% Secure"  textt="Your Money is 100% safe! when you use your own, uncirculated PIN code, entering it with every transaction. The app also has a record of all transactions."/>
    </div>
    </div>
    </div>
    );
}
export default CardImport;
