import { NavLink, useNavigate } from "react-router-dom";

import DashboardIcon from "../../assets/DashBoard-icon/dashboard.svg";
import ProfileIcon from "../../assets/DashBoard-icon/user-icon.svg";
import WalletIcon from "../../assets/DashBoard-icon/wallet.svg";
import GoalsIcon from "../../assets/DashBoard-icon/goals.svg";
import BudgetsIcon from "../../assets/DashBoard-icon/money.svg";
import AnalyticsIcon from "../../assets/DashBoard-icon/analytics.svg";
import MoreIcon from "../../assets/DashBoard-icon/more.svg";
import SupportIcon from "../../assets/DashBoard-icon/question.svg";
import HistoryIcon from "../../assets/DashBoard-icon/history-icon.svg";

export default function SideBar() {

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <NavLink to="/dashboard" className="sidebar-brand-link">
          <h2 className="sidebar-brand">Spendly</h2>
        </NavLink>
      </div>

      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "sidebar-link sidebar-link-active" : "sidebar-link"
              }
            >
              <img className="sidebar-icon" src={DashboardIcon} alt="" />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li className="sidebar-item">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "sidebar-link sidebar-link-active" : "sidebar-link"
              }
            >
              <img className="sidebar-icon" src={ProfileIcon} alt="" />
              <span>Profile</span>
            </NavLink>
          </li>

          <li className="sidebar-item">
            <button type="button" className="sidebar-link sidebar-link-disabled">
              <img className="sidebar-icon" src={WalletIcon} alt="" />
              <span>Wallet</span>
            </button>
          </li>

          <li className="sidebar-item">
            <button type="button" className="sidebar-link sidebar-link-disabled">
              <img className="sidebar-icon" src={GoalsIcon} alt="" />
              <span>Goals</span>
            </button>
          </li>

          <li className="sidebar-item">
            <button type="button" className="sidebar-link sidebar-link-disabled">
              <img className="sidebar-icon" src={BudgetsIcon} alt="" />
              <span>Budgets</span>
            </button>
          </li>

          <li className="sidebar-item">
            <button type="button" className="sidebar-link sidebar-link-disabled">
              <img className="sidebar-icon" src={AnalyticsIcon} alt="" />
              <span>Analytics</span>
            </button>
          </li>

          <li className="sidebar-item">
            <NavLink
              to="/history"
              className={({ isActive }) =>
                isActive ? "sidebar-link sidebar-link-active" : "sidebar-link"
              }
            >
              <img className="sidebar-icon" src={HistoryIcon} alt="" />
              <span>History</span>
            </NavLink>
          </li>

          <li className="sidebar-item">
            <button type="button" className="sidebar-link sidebar-link-disabled">
              <img className="sidebar-icon" src={MoreIcon} alt="" />
              <span>More</span>
            </button>
          </li>
        </ul>
      </nav>

      <div className="sidebar-bottom">
        <button type="button" className="sidebar-link sidebar-link-muted">
          <img className="sidebar-icon" src={SupportIcon} alt="" />
          <span>Support</span>
        </button>

        <button
          type="button"
          className="sidebar-link sidebar-link-logout"
          onClick={handleLogout}
        >
          <img className="sidebar-icon" src={MoreIcon} alt="" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}