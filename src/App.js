import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FAQ from "./components/FAQ";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import VendorReview from "./pages/VendorReview";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
      <Router>
        <Routes>
          <Route path="/faq" element={<FAQ />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route path="/review" element={<VendorReview />} />

          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
