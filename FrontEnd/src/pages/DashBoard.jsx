import "../styles/App.css"
import "../styles/index.css"

import TopBar from "../components/DashLayout/TopBar";
import SideBar from "../components/DashLayout/SideBar";
import StatsBar from "../components/DashLayout/StatsBar";
import MoneyFlowChart from "../components/DashboardWidgets/MoneyFlowWidget/MoneyFlowChart";
import BudgetCard from "../components/DashboardWidgets/BudgetWidget/BudgetCard";
import RecentTransactionsCard from "../components/DashboardWidgets/RecentTransactionsWidget/RecentTransactionsCard";

import SavingGoalsCard from "../components/DashboardWidgets/SavingGoalsWidget/SavingGoalsCard";
import DailyLimitCard from "../components/DashboardWidgets/DailyLimitWidget/DailyLimitCard";
function Dashboard() {
  return (
    <div className="dashboard-layout">
      <SideBar />
      <div className="dashboard-main">
        <TopBar />
          <div className="dashboard-content">
            <StatsBar />

            <div className="dashboard-row">
              <div className="dashboard-left">
                <MoneyFlowChart />
                <RecentTransactionsCard />
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