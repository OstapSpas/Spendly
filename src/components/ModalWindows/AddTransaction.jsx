import { useEffect, useState } from "react";
import "../../styles/App.css";
import "../../styles/index.css";
import "../../styles/HistoryPage.css";
import closeBTN from "../../assets/DashBoard-icon/x.svg";

const API_URL = import.meta.env.VITE_API_URL || "";

export default function AddTransaction({ onClose, onAdded, transactionToEdit }) {
    const isEditMode = Boolean(transactionToEdit);

    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [paymentName, setPaymentName] = useState("");
    const [amount, setAmount] = useState("");
    const [method, setMethod] = useState("");
    const [type, setType] = useState("expense");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (transactionToEdit) {
            setDate(transactionToEdit.date?.split("T")[0] || "");
            setCategory(transactionToEdit.category || "");
            setPaymentName(transactionToEdit.payment_name || "");
            setAmount(transactionToEdit.amount ?? "");
            setMethod(transactionToEdit.method || "");
            setType(transactionToEdit.type || "expense");
        } else {
            setDate("");
            setCategory("");
            setPaymentName("");
            setAmount("");
            setMethod("");
            setType("expense");
        }

        setError("");
    }, [transactionToEdit]);

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setLoading(true);

        const token = localStorage.getItem("token");

        const url = isEditMode
            ? `${API_URL}/api/transactions/${transactionToEdit.id}`
            : `${API_URL}/api/transactions`;

        const methodType = isEditMode ? "PUT" : "POST";

        try {
            const res = await fetch(url, {
                method: methodType,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    amount: parseFloat(amount),
                    payment_name: paymentName,
                    method,
                    category,
                    type,
                    transaction_date: date || new Date().toISOString().split("T")[0]
                })
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Error");
                return;
            }

            if (typeof onAdded === "function") {
                onAdded(data);
            }

            onClose();
        } catch (err) {
            setError("Failed to connect to server");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="add-transaction-overlay">
            <div className="add-transaction-modal">
                <div className="add-transaction-header">
                    <div className="add-transaction-title-block">
                        <h2>{isEditMode ? "Edit Transaction" : "Add Transaction"}</h2>
                        <p>
                            {isEditMode
                                ? "Update the details of your transaction."
                                : "Fill in the details to add a new transaction to your history."}
                        </p>
                    </div>

                    <button
                        type="button"
                        className="add-transaction-close"
                        onClick={onClose}
                    >
                        <img src={closeBTN} alt="close" />
                    </button>
                </div>

                {error && <p style={{ color: "red", padding: "0 24px" }}>{error}</p>}

                <form className="add-transaction-form" onSubmit={handleSubmit}>
                    <div className="add-transaction-grid">
                        <div className="add-transaction-field">
                            <label htmlFor="transaction-date">Date</label>
                            <input
                                type="date"
                                id="transaction-date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>

                        <div className="add-transaction-field">
                            <label htmlFor="transaction-type">Type</label>
                            <select
                                id="transaction-type"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                required
                            >
                                <option value="expense">Expense</option>
                                <option value="income">Income</option>
                            </select>
                        </div>

                        <div className="add-transaction-field">
                            <label htmlFor="transaction-category">Category</label>
                            <select
                                id="transaction-category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="">Select category</option>
                                <option value="shopping">Shopping</option>
                                <option value="groceries">Groceries</option>
                                <option value="transport">Transport</option>
                                <option value="medical">Medical</option>
                                <option value="income">Income</option>
                            </select>
                        </div>

                        <div className="add-transaction-field">
                            <label htmlFor="transaction-name">Payment name</label>
                            <input
                                type="text"
                                id="transaction-name"
                                placeholder="Enter payment name"
                                value={paymentName}
                                onChange={(e) => setPaymentName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="add-transaction-field">
                            <label htmlFor="transaction-amount">Amount</label>
                            <input
                                type="number"
                                id="transaction-amount"
                                placeholder="Enter amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                            />
                        </div>

                        <div className="add-transaction-field">
                            <label htmlFor="transaction-method">Method</label>
                            <select
                                id="transaction-method"
                                value={method}
                                onChange={(e) => setMethod(e.target.value)}
                            >
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

                        <button
                            type="submit"
                            className="nav-trial add-transaction-save"
                            disabled={loading}
                        >
                            {loading
                                ? "Saving..."
                                : isEditMode
                                    ? "Save Changes"
                                    : "Add Transaction"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}