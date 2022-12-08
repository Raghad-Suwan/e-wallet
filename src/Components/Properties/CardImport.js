import React from 'react';
import Card3 from './Card3';

const CardImport=(props)=>{
    return (
<div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
      < Card3 title="A User-Friendly App" textt=" Our app is user-friendly and fast, and offers exclusive benefits and numerous services. You can establish your own account and control settings or check transactions at any point in time."/>
    </div>
    <div class="col">
      < Card3 title="24/7 Support"  textt="You will find many ways to communicate with the support team which is available 24/7. Try calling us on 1700555555, Message us on WhatsApp, Facebook, our website, or other means."        />
    </div>
    <div class="col">
      < Card3 title="100% Secure"  textt="Your Money is 100% safe! when you use your own, uncirculated PIN code, entering it with every transaction. The app also has a record of all transactions, ensuring the highest levels of security applied worldwide."/>
    </div>
    </div>
    </div>
    );
}
export default CardImport;
