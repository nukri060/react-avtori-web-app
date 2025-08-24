import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import "./App.css"
import "./index.css"
function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
  );
}

export default App;
