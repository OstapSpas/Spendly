import btnArrow from "../../../assets/DashBoard-icon/right-arrow.svg";

export default function DailyLimitCard() {
  const spent = 168;
  const limit = 300;
  const percent = Math.round((spent / limit) * 100);

  return (
    <div className="daily-card-content">
      <div className="daily-card-header">
        <h2>Daily Limit</h2>

        <button className="daily-card-icon-btn" type="button" aria-label="Open">
          <img src={btnArrow} alt="" />
        </button>
      </div>

      <p className="daily-card-sub">
        ₹{spent.toFixed(2)} spent of ₹{limit.toFixed(2)}
      </p>

      <div className="daily-progress">
        <div className="daily-progress-fill" style={{ width: `${percent}%` }} />
      </div>

      <div className="daily-progress-meta">
        <span>{percent}%</span>
      </div>
    </div>
  );
}