import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";

import Navbar from "./components/MainPage/Navbar";
import Header from "./components/MainPage/Header";
import Statistic from "./components/MainPage/Statistic";
import Step from "./components/MainPage/Step";
import Footer from "./components/MainPage/Footer";

import Dashboard from "./pages/DashBoard";

function Home() {
  return (
    <div className="container">
      <div className="navbar-wrapper">
        <Navbar />
      </div>

      <Header />
      <Statistic />
      <Step />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;