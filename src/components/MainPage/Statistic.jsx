import StatsCard from "./Stats-card";

function Statistic () {
    return (
    <section className="statistic-section">
      <div className="statistic-content">
            <StatsCard 
                title = "10,000+"
                description = "Active Users"
            />

            <StatsCard 
                title = "99.2 %"
                description = "AI Accuracy"
            />

            <StatsCard 
                title = "15 hrs"
                description = "Saved/Month"
            />

            <StatsCard 
                title = "$2.4M"
                description = "Saved in Taxes"
            />
      </div>
    </section>
    );
}

export default Statistic;