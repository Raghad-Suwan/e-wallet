import React from "react";
function ShippingSteps (){
    return(
      <div className="RechargeSteps" >
        
         <h1 className="StyleTitle">STEPS TO RECHARGE MOBILE BALANCE FROM YOUR</h1>
         <h1 className="StyleTitle">E-WALLET:</h1>
         <ul className="StyleSteps">
            <li>From your E-wallet main menu select “Mobile TOP UP”.</li>
            <li>Select the mobile phone Operator.</li>
            <li>Select the transaction you wish to carry out:</li>
            <ul className="StyleTransactions">
            <li>Mobile Top-up</li>
            <li>Purchase internet bundles and packages</li>
            </ul>
           
            <li>After selecting the “Mobile Top Up” transaction, select recipient: Recharge My Number, or Recharge Another Number”.</li>
            <li>If you selected recharging another number, enter that number.</li>
            <li>Enter the amount of balance to be recharged.</li>
            <li>Use any promotional code, if available.</li>
            <li>Enter the E-wallet PIN code.</li>
            <li>Confirm the transaction.</li>
            <li>You will receive a confirmation of the transaction success and an image of the receipt.</li>
         </ul>

      </div>
    );
}
export default ShippingSteps;