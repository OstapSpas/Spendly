import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const budgetData = [
  { name: "Cafe",            value: 4000,  color: "#0F172A" },
  { name: "Entertainment",   value: 6500,  color: "#CBD5E1" },
  { name: "Investments",     value: 8200,  color: "#6D5EF7" },
  { name: "Food & Groceries",value: 9000,  color: "#E5E7EB" },
  { name: "Traveling",       value: 4300,  color: "#9CA3AF" },
];

const total = budgetData.reduce((sum, x) => sum + x.value, 0);

export default function BudgetCard() {
  const highlight = budgetData.find((x) => x.name === "Investments") ?? budgetData[0];
  const percent   = Math.round((highlight.value / total) * 100);

  return (
    <div className="budget-card-content">
      <div className="budget-card-header">
        <h2>Budget</h2>
      </div>

      <div className="budget-card-body">

        {/* LEFT: список категорій */}
        <ul className="budget-card-list">
          {budgetData.map((item) => (
            <li className="budget-card-item" key={item.name}>
              <span className="budget-card-dot" style={{ background: item.color }} />
              <span className="budget-card-name">{item.name}</span>
            </li>
          ))}
        </ul>

        {/* RIGHT: donut-чарт */}
        <div className="budget-card-chart">

          {/* Recharts */}
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={budgetData}
                dataKey="value"
                nameKey="name"
                innerRadius={44}
                outerRadius={62}
                paddingAngle={4}
                stroke="transparent"
              >
                {budgetData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Текст по центру */}
          <div className="budget-card-center">
            <p className="budget-card-center-label">Total for month</p>
            <p className="budget-card-center-value">{total.toLocaleString()}</p>
          </div>

          {/* Бейдж знизу праворуч */}
          <div className="budget-card-badge">
            <span className="budget-card-badge-percent">{percent}%</span>
            <span className="budget-card-badge-value">{highlight.value.toLocaleString()}</span>
          </div>

        </div>
      </div>
    </div>
  );
}