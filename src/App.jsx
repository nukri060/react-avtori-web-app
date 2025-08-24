import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import HeaderLayout from "./pages/Layouts/HeaderLayout";

import "./App.css";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route element={<HeaderLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Route>
    </Routes>
  );
}

export default App;
  