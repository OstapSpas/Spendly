import { useEffect, useState } from "react";



import DashboardIcon from "../../assets/DashBoard-icon/dashboard.svg";
import ProfileIcon from "../../assets/DashBoard-icon/user-icon.svg";
import WalletIcon from "../../assets/DashBoard-icon/wallet.svg";
import GoalsIcon from "../../assets/DashBoard-icon/goals.svg";
import BudgetsIcon from "../../assets/DashBoard-icon/money.svg";
import AnalyticsIcon from "../../assets/DashBoard-icon/analytics.svg";
import SettingsIcon from "../../assets/DashBoard-icon/setting.svg";
import MoreIcon from "../../assets/DashBoard-icon/more.svg";
import SupportIcon from "../../assets/DashBoard-icon/question.svg";



// import Sun from "../../assets/img/sun.svg";
// import Moon from "../../assets/img/moon.svg";


export default function SideBar() {

//   const [theme, setTheme] = useState("light");
//   useEffect(() => {
//     document.body.classList.toggle("dark", theme === "dark");
//   }, [theme]);


//     function toggleTheme() {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   }


  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2 className="sidebar-brand">Spendly</h2>
      </div>

      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          <li class="sidebar-item sidebar-item-active">
            <a className="sidebar-link" href="#">
              <img className="sidebar-icon" src={DashboardIcon} alt="" />
              <span>Dashboard</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="#">
              <img className="sidebar-icon" src={ProfileIcon} alt="" />
              <span>Profile</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="#">
              <img className="sidebar-icon" src={WalletIcon} alt="" />
              <span>Wallet</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="#">
              <img className="sidebar-icon" src={GoalsIcon} alt="" />
              <span>Goals</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="#">
              <img className="sidebar-icon" src={BudgetsIcon} alt="" />
              <span>Budgets</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="#">
              <img className="sidebar-icon" src={AnalyticsIcon} alt="" />
              <span>Analytics</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="#">
              <img className="sidebar-icon" src={SettingsIcon} alt="" />
              <span>Settings</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="#">
              <img className="sidebar-icon" src={MoreIcon} alt="" />
              <span>More</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="sidebar-bottom">
        <a className="sidebar-link sidebar-link-muted" href="#">
          <img className="sidebar-icon" src={SupportIcon} alt="" />
          <span>Support</span>
        </a>




      </div>
    </aside>
  );
}