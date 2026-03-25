import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";
import "../styles/index.css";

import TopBar from "../components/DashLayout/TopBar";
import SideBar from "../components/DashLayout/SideBar";
import StatsBar from "../components/DashLayout/StatsBar";
import MoneyFlowChart from "../components/DashboardWidgets/MoneyFlowWidget/MoneyFlowChart";
import BudgetCard from "../components/DashboardWidgets/BudgetWidget/BudgetCard";
import RecentTransactionsCard from "../components/DashboardWidgets/RecentTransactionsWidget/RecentTransactionsCard";
import SavingGoalsCard from "../components/DashboardWidgets/SavingGoalsWidget/SavingGoalsCard";
import DailyLimitCard from "../components/DashboardWidgets/DailyLimitWidget/DailyLimitCard";

const API_URL = import.meta.env.VITE_API_URL || "";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const [summary, setSummary] = useState({
    totalIncome: 0,
    totalExpense: 0,
    totalBalance: 0,
    recentTransactions: []
  });

  const [loadingDashboard, setLoadingDashboard] = useState(true);
  const [dashboardError, setDashboardError] = useState("");

  useEffect(() => {
    async function fetchDashboardData() {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/auth");
        return;
      }

      try {
        setLoadingDashboard(true);
        setDashboardError("");

        const [meRes, summaryRes] = await Promise.all([
          fetch(`${API_URL}/api/auth/me`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }),
          fetch(`${API_URL}/api/dashboard/summary`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
        ]);

        const meData = await meRes.json();
        const summaryData = await summaryRes.json();

        if (!meRes.ok || !summaryRes.ok) {
          localStorage.removeItem("token");
          navigate("/auth");
          return;
        }

        setUser({
          name: meData.name || "",
          email: meData.email || ""
        });

        setSummary({
          totalIncome: Number(summaryData.totalIncome || 0),
          totalExpense: Number(summaryData.totalExpense || 0),
          totalBalance: Number(summaryData.totalBalance || 0),
          recentTransactions: summaryData.recentTransactions || []
        });
      } catch (err) {
        setDashboardError("Failed to load dashboard data");
      } finally {
        setLoadingDashboard(false);
      }
    }

    fetchDashboardData();
  }, [navigate]);

  return (
    <div className="dashboard-layout">
      <SideBar />

      <div className="dashboard-main">
        <TopBar user={user} loadingUser={loadingDashboard} />

        <div className="dashboard-content">
          {dashboardError && (
            <p style={{ color: "red", marginBottom: "16px" }}>{dashboardError}</p>
          )}

          <StatsBar summary={summary} />

          <div className="dashboard-row">
            <div className="dashboard-left">
              <MoneyFlowChart />
              <RecentTransactionsCard transactions={summary.recentTransactions} />
            </div>

            <div className="dashboard-right">
              <BudgetCard />
              <SavingGoalsCard />
              <DailyLimitCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;