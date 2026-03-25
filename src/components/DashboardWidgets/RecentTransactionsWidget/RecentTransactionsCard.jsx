import btnArrow from "../../../assets/DashBoard-icon/right-arrow.svg";

function formatDate(dateValue) {
  if (!dateValue) return "-";

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return String(dateValue);
  }

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });
}

function formatAmount(amount, type) {
  const value = Number(amount || 0);
  const sign = type === "income" ? "+" : "-";

  return `${sign} ₹${value.toLocaleString("en-IN")}`;
}

function PayIcon({ name }) {
  const safeName = (name || "").trim();

  let short = "TX";

  if (safeName) {
    const words = safeName.split(" ").filter(Boolean);

    if (words.length >= 2) {
      short = `${words[0][0]}${words[1][0]}`.toUpperCase();
    } else {
      short = safeName.slice(0, 2).toUpperCase();
    }
  }

  return <span className="recent-pay-icon">{short}</span>;
}

export default function RecentTransactionsCard({ transactions = [] }) {
  return (
    <div className="recent-card-content">
      <div className="recent-card-header">
        <h2>Recent Transactions</h2>

        <div className="recent-card-actions">
          <button className="recent-card-btn" type="button">
            All accounts <img src={btnArrow} alt="" />
          </button>

          <button className="recent-card-btn" type="button">
            See all <img src={btnArrow} alt="" />
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
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="5" className="recent-empty">
                  No recent transactions yet
                </td>
              </tr>
            ) : (
              transactions.map((transaction) => {
                const amountText = formatAmount(transaction.amount, transaction.type);
                const isPlus = transaction.type === "income";

                return (
                  <tr key={transaction.id}>
                    <td className="recent-date">{formatDate(transaction.date)}</td>

                    <td className={`recent-amount ${isPlus ? "is-plus" : "is-minus"}`}>
                      {amountText}
                    </td>

                    <td>
                      <div className="recent-pay">
                        <PayIcon name={transaction.payment_name} />
                        <span className="recent-pay-name">
                          {transaction.payment_name || "-"}
                        </span>
                      </div>
                    </td>

                    <td className="recent-method">{transaction.method || "-"}</td>
                    <td className="recent-category">{transaction.category || "-"}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}