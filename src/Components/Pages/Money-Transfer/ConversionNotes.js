import { Link } from "@mui/material";
import React from "react";


function ConversionNotes (){
    return(
<div className="styleNote">
  <h1 className="StelyTitle">NOTES ON MONEY TRANSFER:</h1>
  <ul>
    <li>The recipient must have an active Jawwal Pay wallet </li>
    <li>Make sure you have enough balance to transfer money</li>
    <li>All financial transactions in the Jawwal Pay wallet are performed in Shekels (ILS).</li>
    <li>For information about fees Press Here.</li>
    <li>All financial transactions are done within the limits specified by the Palestine Monetary Authority.</li>
    <li>For support and assistance, please <Link>contact us</Link> or visit the authorized agent closest to you.
 </li>
  </ul>
</div>    
    );
}
export default ConversionNotes;
