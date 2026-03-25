function StepCard({ icon, title, count, description }) {
  return (
    <div className="step-card">
      <div className="step-icon">
        <img className="step-icon-img" src={icon} alt="" />
      </div>

      <div className="step-count">{count}</div>

      <h3 className="step-card-title">{title}</h3>
      <p className="step-card-description">{description}</p>
    </div>
  );
}

export default StepCard;