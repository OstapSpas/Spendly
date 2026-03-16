import "../../styles/App.css";
import "../../styles/index.css";
import "../../styles/HistoryPage.css";
import closeBTN from "../../assets/DashBoard-icon/x.svg";

export default function AddTransaction({ onClose }) {

    
    return (
        <div className="add-transaction-overlay">
            <div className="add-transaction-modal">
                <div className="add-transaction-header">
                    <div className="add-transaction-title-block">
                        <h2>Add Transaction</h2>
                        <p>Fill in the details to add a new transaction to your history.</p>
                    </div>

                    <button
                        type="button"
                        className="add-transaction-close"
                        onClick={onClose}
                    >
                        <img src={closeBTN} alt="close" />
                    </button>
                </div>

                <form className="add-transaction-form">
                    <div className="add-transaction-grid">
                        <div className="add-transaction-field">
                            <label htmlFor="transaction-date">Date</label>
                            <input type="date" id="transaction-date" />
                        </div>

                        <div className="add-transaction-field">
                            <label htmlFor="transaction-category">Category</label>
                            <select id="transaction-category">
                                <option value="">Select category</option>
                                <option value="shopping">Shopping</option>
                                <option value="groceries">Groceries</option>
                                <option value="transport">Transport</option>
                                <option value="medical">Medical</option>
                                <option value="income">Income</option>
                            </select>
                        </div>

                        <div className="add-transaction-field">
                            <label htmlFor="transaction-wallet">Wallet</label>
                            <select id="transaction-wallet">
                                <option value="">Select wallet</option>
                                <option value="main">Main wallet</option>
                                <option value="cash">Cash wallet</option>
                                <option value="savings">Savings</option>
                            </select>
                        </div>

                        <div className="add-transaction-field">
                            <label htmlFor="transaction-name">Payment name</label>
                            <input
                                type="text"
                                id="transaction-name"
                                placeholder="Enter payment name"
                            />
                        </div>

                        <div className="add-transaction-field">
                            <label htmlFor="transaction-amount">Amount</label>
                            <input
                                type="number"
                                id="transaction-amount"
                                placeholder="Enter amount"
                            />
                        </div>

                        <div className="add-transaction-field">
                            <label htmlFor="transaction-method">Method</label>
                            <select id="transaction-method">
                                <option value="">Select method</option>
                                <option value="card">Card</option>
                                <option value="upi">UPI</option>
                                <option value="cash">Cash</option>
                                <option value="wallet">Wallet</option>
                                <option value="bank">Bank transfer</option>
                            </select>
                        </div>
                    </div>

                    <div className="add-transaction-actions">
                        <button
                            type="button"
                            className="add-transaction-cancel"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button type="submit" className="nav-trial add-transaction-save">
                            Add Transaction
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}