import React from "react";
import "./App.css";
import SignPageRouter from './components/Signing/SignPageRouter';
import TelecomImport from "./components/Cards_push/Telecom/ImportTelecom";
import ElectricityImport from "./components/Cards_push/Electricity/ImportElectricity";
import UniversityImport from "./components/Cards_push/University/ImportUniversity";

function App() {
  return (
    <div className="App">
      <UniversityImport />
      <ElectricityImport />
      <TelecomImport />
      <SignPageRouter />
      </div>


  );
}
export default App;
