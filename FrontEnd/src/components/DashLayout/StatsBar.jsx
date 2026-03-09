import StatsCard from "./StatsCard";

export default function StatsBar() {
    return (
        <div className="statsbar">
            <StatsCard
                title="Total balance"
                stats="+8%"
                money="$ 15,700.00"
                time="Last month"
            />

            <StatsCard
                title="Income"
                stats="+12%"
                money="$ 42,000.00"
                time="Last month"
            />


            <StatsCard
                title="Expense"
                stats="6.3%"
                money="$ 6,222.00"
                time="Last month"
            />


            <StatsCard
                title="Total savings"
                stats="+12.1%"
                money="$ 32,913.00"
                time="Last month"
            />


            <StatsCard
                title="Set goal expense"
                stats="9%"
                money="$ 32,000.00"
                time="Last month"
            />
        </div>
    );
}