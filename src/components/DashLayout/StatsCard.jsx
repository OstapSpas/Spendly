import arrowBtn from "../../assets/DashBoard-icon/right-arrow.svg";

export default function StatsCard({ title, stats, money, time }) {
    return (
        <div className="card-content">
            <div className="card-title">

                <h3>{title}</h3>
                <span>{stats}</span>
            </div>
            <p>{money}</p>
            <div className="card-low-info">
                <p>{time}</p>
                <button className="card-btn">
                    <img className="card-btn-arrow" src={arrowBtn} />
                </button>
            </div>
        </div>

    );
}