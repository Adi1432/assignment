import "./App.css";
import Navbar from "./components/Navbar";
import DishInfo from "./components/DishInfo";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/dishinfo/:id" element={<DishInfo />} />
    </Routes>
  );
}

export default App;
