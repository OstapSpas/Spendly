import { useEffect, useState } from "react";
import Bell from "../../assets/DashBoard-icon/bell.svg";
import Setting from "../../assets/DashBoard-icon/setting.svg";
import User from "../../assets/DashBoard-icon/user-icon.svg";



import Sun from "../../assets/img/sun.svg";
import Moon from "../../assets/img/moon.svg";

export default function TopBar() {

      const [theme, setTheme] = useState("light");
      useEffect(() => {
        document.body.classList.toggle("dark", theme === "dark");
      }, [theme]);
    
    
        function toggleTheme() {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
      }
    
  return (
    <header className="topbar">
      <div className="topbar-content">
        <div className="topbar-left">
          <h1 className="topbar-title">Hello Aman!</h1>
          <p className="topbar-subtitle">
            Let's simplify the way you manage your finance
          </p>
        </div>

        <div className="topbar-right">
          <button className="topbar-iconbtn" aria-label="Notifications">
            <img className="topbar-icon" src={Bell} alt="" />
          </button>

          <button className="topbar-iconbtn" aria-label="Settings">
            <img className="topbar-icon" src={Setting} alt="" />
          </button>

                  <div className="nav-actions">
            <button
            className="nav-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            >
            <img
                className="nav-theme-icon"
                src={theme === "light" ? Moon : Sun}
                alt=""
            />
            </button>
        </div>

          <div className="topbar-user">
            <img className="topbar-avatar" src={User} alt="" />
            <div className="topbar-usertext">
              <div className="topbar-username">Aman</div>
              <div className="topbar-email">amanbedire@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}