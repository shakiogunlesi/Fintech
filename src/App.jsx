import Login from "./components/login";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import InvestPref from "./pages/InvestmentPreference";
import InvestorReg from "./pages/InvestorRegistration";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutUs" element={<AboutPage />} />
        <Route path="/InvestmentPreference" element={<InvestPref />} />
        <Route path="/InvestorRegistration" element={<InvestorReg />} />
      </Routes>
    </>
  );
}

export default App;
