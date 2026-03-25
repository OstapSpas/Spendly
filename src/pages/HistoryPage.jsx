import { useEffect, useState } from "react";
import "../styles/App.css";
import "../styles/index.css";
import "../styles/HistoryPage.css";

import arrowBtn from "../assets/DashBoard-icon/right-arrow.svg";
import SideBar from "../components/DashLayout/SideBar";
import AddTransaction from "../components/ModalWindows/AddTransaction";

const API_URL = import.meta.env.VITE_API_URL || "";



export default function HistoryPage() {


    const [transactions, setTransactions] = useState([]);
    const [loadingTransactions, setLoadingTransactions] = useState(true);
    const [transactionsError, setTransactionsError] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deletingId, setDeletingId] = useState(null);

    const [editingTransaction, setEditingTransaction] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);


    async function fetchTransactions() {
        const token = localStorage.getItem("token");

        try {
            setLoadingTransactions(true);
            setTransactionsError("");

            const res = await fetch(`${API_URL}/api/transactions`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = await res.json();

            if (!res.ok) {
                setTransactionsError(data.error || "Failed to load transactions");
                return;
            }

            setTransactions(data);
        } catch (err) {
            setTransactionsError("Failed to connect to server");
        } finally {
            setLoadingTransactions(false);
        }
    }


    useEffect(() => {
        fetchTransactions();
    }, []);


    function handleTransactionAdded() {
        fetchTransactions();
    }


    async function handleDeleteTransaction(id) {
        const token = localStorage.getItem("token");

        try {
            setDeletingId(id);
            setTransactionsError("");

            const res = await fetch(`${API_URL}/api/transactions/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = await res.json();

            if (!res.ok) {
                setTransactionsError(data.error || "Failed to delete transaction");
                return;
            }

            setTransactions((prev) => prev.filter((transaction) => transaction.id !== id));
        } catch (err) {
            setTransactionsError("Failed to connect to server");
        } finally {
            setDeletingId(null);
        }
    }

function handleOpenModal() {
    setEditingTransaction(null);
    setIsEditModalOpen(false);
    setIsModalOpen(true);
}
    function handleCloseModal() {
        setIsModalOpen(false);
    }


function handleOpenEditModal(transaction) {
    setIsModalOpen(false);
    setEditingTransaction(transaction);
    setIsEditModalOpen(true);
}

    function handleCloseEditModal() {
        setEditingTransaction(null);
        setIsEditModalOpen(false);
    }
    return (
        <div className="dashboard-layout">
            <SideBar />

            <div className="dashboard-main">
                {/* <TopBar /> */}

                <div className="dashboard-content">
                    <div className="history-content">
                        <div className="history-page-header history-card">
                            <div className="history-page-header-text">
                                <h1>History</h1>
                                <p>Track activity, recent payments and transaction details.</p>
                            </div>
                        </div>

                        <div className="history-filters history-card">
                            <div className="history-filters-left">
                                <button className="history-filter-btn" type="button">
                                    <span>Status</span>
                                    <img src={arrowBtn} alt="arrow" className="history-filter-arrow" />
                                </button>

                                <button className="history-filter-btn" type="button">
                                    <span>Payment method</span>
                                    <img src={arrowBtn} alt="arrow" className="history-filter-arrow" />
                                </button>

                                <button className="history-filter-btn" type="button">
                                    <span>Date</span>
                                    <img src={arrowBtn} alt="arrow" className="history-filter-arrow" />
                                </button>

                                <button className="history-filter-btn" type="button">
                                    <span>Amount</span>
                                    <img src={arrowBtn} alt="arrow" className="history-filter-arrow" />
                                </button>

                                <button className="history-filter-btn" type="button">
                                    <span>Category</span>
                                    <img src={arrowBtn} alt="arrow" className="history-filter-arrow" />
                                </button>
                            </div>

                            <button
                                className="nav-trial history-add-btn"
                                type="button"
                                onClick={handleOpenModal}
                            >
                                Add Transaction
                            </button>
                        </div>

                        <div className="history-table-card history-card">
                            <div className="history-month-row">
                                <div className="history-month-text">
                                    <h2>August</h2>
                                    <span>2025</span>
                                </div>

                                <p className="history-month-total">+ ₹90,500.28</p>
                            </div>

                            <div className="history-table-wrapper">
                                <div className="history-table-header">
                                    <span>Date</span>
                                    <span>Amount</span>
                                    <span>Payment name</span>
                                    <span>Method</span>
                                    <span>Category</span>
                                    <span>Action</span>
                                </div>

                                <div className="history-table-body">
                                    {loadingTransactions ? (
                                        <div className="history-table-row">
                                            <span>Loading...</span>
                                            <span>-</span>
                                            <span>-</span>
                                            <span>-</span>
                                            <span>-</span>
                                            <span>-</span>
                                        </div>
                                    ) : transactionsError ? (
                                        <div className="history-table-row">
                                            <span>{transactionsError}</span>
                                            <span>-</span>
                                            <span>-</span>
                                            <span>-</span>
                                            <span>-</span>
                                            <span>-</span>
                                        </div>
                                    ) : transactions.length === 0 ? (
                                        <div className="history-table-row">
                                            <span>No transactions yet</span>
                                            <span>-</span>
                                            <span>-</span>
                                            <span>-</span>
                                            <span>-</span>
                                            <span>-</span>
                                        </div>
                                    ) : (
                                        transactions.map((transaction) => (
                                            <div
                                                key={transaction.id}
                                                className={`history-table-row ${transaction.type === "income" ? "history-table-row-accent" : ""
                                                    }`}
                                            >
                                                <span>{transaction.date?.split("T")[0]}</span>
                                                <span>
                                                    {transaction.type === "income" ? "+" : "-"} ₹{transaction.amount}
                                                </span>
                                                <span>{transaction.payment_name}</span>
                                                <span>{transaction.method || "-"}</span>
                                                <span>{transaction.category || "-"}</span>
                                                <span className="history-action-buttons">
                                                    <button
                                                        type="button"
                                                        className="history-edit-btn"
                                                        onClick={() => handleOpenEditModal(transaction)}
                                                    >
                                                        Edit
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className="history-delete-btn"
                                                        onClick={() => handleDeleteTransaction(transaction.id)}
                                                        disabled={deletingId === transaction.id}
                                                    >
                                                        {deletingId === transaction.id ? "Deleting..." : "Delete"}
                                                    </button>
                                                </span>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {isModalOpen && <AddTransaction onClose={handleCloseModal} />} */}
            {/* <AddTransaction onClose={handleCloseModal} onAdded={handleTransactionAdded} /> */}
            {isModalOpen && (
                <AddTransaction
                    onClose={handleCloseModal}
                    onAdded={handleTransactionAdded}
                />
            )}

            {isEditModalOpen && (
            <AddTransaction
                onClose={handleCloseEditModal}
                onAdded={handleTransactionAdded}
                transactionToEdit={editingTransaction}
            />
            )}
        </div>
    );
}