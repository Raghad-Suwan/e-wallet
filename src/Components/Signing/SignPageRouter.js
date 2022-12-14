import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword'
function SignPageRouter() {
    return (
     <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
       
  </div>
  </BrowserRouter>
    );
  }
  export default SignPageRouter;