import LoginPage from "./pages/LoginPage";
import TablePage from "./pages/TablePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex justify-center items-center h-screen bg-[#fafafa]">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/table" element={<TablePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
