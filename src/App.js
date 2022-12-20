// import { Home } from "@mui/icons-material";
import React from "react";
import "./App.css";
// import SignPageRouter from './components/Signing/SignPageRouter';
//import Patment from "./components/Pages/Payment-of-bills/Patment";
//import Marchent from "./components/Pages/Pay-to-Merchants/Marchent";
import Card from "./components/Deposite-Money/Card";
import ImportUniversity from "./components/Cards_push/University/ImportUniversity";
import ImportElectricity from "./components/Cards_push/Electricity/ImportElectricity";

function App() {
  return (
    <>
    <Card />
    <ImportUniversity />
    <ImportElectricity />
    </>
  );
}
export default App;