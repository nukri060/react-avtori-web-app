import { Routes, Route } from "react-router-dom";
import HeaderLayout from "./pages/Layouts/HeaderLayout";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { FAQ } from "./pages/Faq";
import { TermsAndConditions } from "./pages/TermsAndConditions";


import "./App.css";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route element={<HeaderLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
      </Route>
    </Routes>
  );
}

export default App;
  