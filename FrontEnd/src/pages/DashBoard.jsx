import TopBar from "../components/DashLayout/TopBar";
import SideBar from "../components/DashLayout/SideBar";
import StatsBar from "../components/DashLayout/StatsBar";



function Dashboard() {
  return (
    <div className="dashboard-layout">
      <SideBar />
      <div className="dashboard-main">
        <TopBar />
        <div className="dashboard-content">
          <StatsBar />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;