function StatsCard({ title, description }) {
  return (
    <div className="stats-card">
      <h3 className="stats-card-title">{title}</h3>
      <p className="stats-card-text">{description}</p>
    </div>
  );
}

export default StatsCard;  