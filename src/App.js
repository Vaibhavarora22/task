import { Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard"
import Dash from "./components/Dash"
function App() {
  return (
    <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Dash" element={<Dash />} />
    </Routes>
    
    
  );
}

export default App;
