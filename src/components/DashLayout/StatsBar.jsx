import StatsCard from "./StatsCard";

function formatMoney(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2
  }).format(Number(value || 0));
}

export default function StatsBar({ summary }) {
  const totalBalance = summary?.totalBalance || 0;
  const totalIncome = summary?.totalIncome || 0;
  const totalExpense = summary?.totalExpense || 0;

  return (
    <div className="statsbar">
      <StatsCard
        title="Total balance"
        stats={totalBalance >= 0 ? "Positive" : "Negative"}
        money={formatMoney(totalBalance)}
        time="Current total"
      />

      <StatsCard
        title="Income"
        stats="+"
        money={formatMoney(totalIncome)}
        time="All transactions"
      />

      <StatsCard
        title="Expense"
        stats="-"
        money={formatMoney(totalExpense)}
        time="All transactions"
      />

      <StatsCard
        title="Total savings"
        stats="Soon"
        money={formatMoney(Math.max(totalBalance, 0))}
        time="Derived value"
      />

      <StatsCard
        title="Set goal expense"
        stats="Soon"
        money={formatMoney(totalExpense)}
        time="Placeholder"
      />
    </div>
  );
}