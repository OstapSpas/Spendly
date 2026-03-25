import btnArrow from "../../../assets/DashBoard-icon/right-arrow.svg";

const goals = [
  { title: "MacBook Pro", valueRight: "3.4 L", percent: 36 },
  { title: "New car", valueRight: "15 L", percent: 42 },
  { title: "New house", valueRight: "70 L", percent: 2 },
];

function ProgressBar({ value }) {
  return (
    <div className="goal-progress">
      <div className="goal-progress-fill" style={{ width: `${value}%` }} />
    </div>
  );
}

export default function SavingGoalsCard() {
  return (
    <div className="saving-card-content">
      <div className="saving-card-header">
        <h2>Saving Goals</h2>

        <button className="saving-card-icon-btn" type="button" aria-label="Open">
          <img src={btnArrow} alt="" />
        </button>
      </div>

      <div className="saving-card-body">
        {goals.map((g) => (
          <div className="goal-item" key={g.title}>
            <div className="goal-top">
              <span className="goal-title">{g.title}</span>
              <span className="goal-right">{g.valueRight}</span>
            </div>

            <div className="goal-middle">
              <span className="goal-percent">{g.percent}%</span>
            </div>

            <ProgressBar value={g.percent} />
          </div>
        ))}
      </div>
    </div>
  );
}