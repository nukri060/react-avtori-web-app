import { Routes, Route } from "react-router-dom";
import HeaderLayout from "./pages/Layouts/HeaderLayout";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { About } from "../../about";


import "./App.css";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route element={<HeaderLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<About/>}/>
      </Route>
    </Routes>
  );
}

export default App;
  