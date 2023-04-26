import Login from "./components/Login";
import Table from "./components/Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex justify-center items-center h-screen bg-[#fafafa]">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
