import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";

import Navbar from "./components/MainPage/Navbar";
import Header from "./components/MainPage/Header";
import Statistic from "./components/MainPage/Statistic";
import Step from "./components/MainPage/Step";
import Footer from "./components/MainPage/Footer";

import Dashboard from "./pages/DashBoard";
import Profile from "./pages/Profile";
import AuthPage from "./pages/AuthPage";
import HistoryPage from "./pages/HistoryPage";
import ProtectedRoute from "./components/ProtectedRoute";

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
        <Route path="/auth" element={<AuthPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;