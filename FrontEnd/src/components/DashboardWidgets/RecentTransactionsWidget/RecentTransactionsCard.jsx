import btnArrow from "../../../assets/DashBoard-icon/right-arrow.svg";

const rows = [
  { date: "25 Jul 12:30", amount: "- ₹800", name: "YouTube", method: 'VISA "**3254"', category: "Subscription" },
  { date: "26 Jul 15:00", amount: "- ₹4,500", name: "Flipkart", method: "UPI", category: "Shopping" },
  { date: "27 Jul 9:00", amount: "- ₹450", name: "Rajesh Tehoe", method: "UPI", category: "Restaurants" },
  { date: "29 Jul 10:30", amount: "- ₹700", name: "Zomato", method: "UPI", category: "Food Delivery" },
  { date: "30 Jul 16:45", amount: "+ ₹42,000", name: "Salary Credit", method: "NEFT", category: "Income" },
];

function PayIcon({ name }) {
  const short =
    name === "YouTube" ? "YT" :
    name === "Flipkart" ? "FK" :
    name === "Zomato" ? "ZO" :
    name === "Salary Credit" ? "₹" : "RT";

  return <span className="recent-pay-icon">{short}</span>;
}

export default function RecentTransactionsCard() {
  return (
    <div className="recent-card-content">
      <div className="recent-card-header">
        <h2>Recent Transactions</h2>

        <div className="recent-card-actions">
          <button className="recent-card-btn" type="button">
            All accounts <img src={btnArrow} alt="" />
          </button>

          <button className="recent-card-btn" type="button">
            see all <img src={btnArrow} alt="" />
          </button>
        </div>
      </div>

      <div className="recent-table-wrap">
        <table className="recent-table">
          <thead>
            <tr>
              <th>DATE</th>
              <th>AMOUNT</th>
              <th>PAYMENT NAME</th>
              <th>METHOD</th>
              <th>CATEGORY</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r) => (
              <tr key={`${r.date}-${r.name}`}>
                <td className="recent-date">{r.date}</td>
                <td className={`recent-amount ${r.amount.trim().startsWith("+") ? "is-plus" : "is-minus"}`}>
                  {r.amount}
                </td>

                <td>
                  <div className="recent-pay">
                    <PayIcon name={r.name} />
                    <span className="recent-pay-name">{r.name}</span>
                  </div>
                </td>

                <td className="recent-method">{r.method}</td>
                <td className="recent-category">{r.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}