import {
  ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid,
} from "recharts";

import btnArrow from "../../../assets/DashBoard-icon/right-arrow.svg";

const data = [
  { month: "01", income: 50000, expense: 20000 },
  { month: "02", income: 30000, expense: 18000 },
  { month: "03", income: 42000, expense: 24000 },
  { month: "04", income: 25000, expense: 17000 },
  { month: "05", income: 91000, expense: 26000 },
  { month: "06", income: 98000, expense: 30000 },
];

export default function MoneyFlowChart() {
  return (
    <div className="money-flow-content">
      <div className="money-flow-header">
        <div className="money-flow-text">
          <h2>Money Flow</h2>
        </div>

        <div className="money-flow-action">
          <button className="money-flow-account-btn" type="button">
            All accounts <img src={btnArrow} alt="" />
          </button>
          <button className="money-flow-date-btn" type="button">
            This year <img src={btnArrow} alt="" />
          </button>
        </div>
      </div>

      <div className="money-flow-chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barCategoryGap={22}
            barGap={8}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="4 8" />

            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />

            <Tooltip />
            <Legend iconType="circle" />

            <Bar
              dataKey="income"
              fill="var(--chart-income, #6D5EF7)"
              radius={[10, 10, 0, 0]}
              barSize={18}
            />
            <Bar
              dataKey="expense"
              fill="var(--chart-expense, #E9E7FF)"
              radius={[10, 10, 0, 0]}
              barSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}