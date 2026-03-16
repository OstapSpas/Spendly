import { useState } from "react";


import "../styles/App.css";
import "../styles/index.css";
import "../styles/HistoryPage.css";


import arrowBtn from "../assets/DashBoard-icon/right-arrow.svg";
import TopBar from "../components/DashLayout/TopBar";
import SideBar from "../components/DashLayout/SideBar";
import AddTransaction from "../components/ModalWindows/AddTransaction";



export default function HistoryPage() {
        const [isModalOpen, setIsModalOpen] = useState(false);

        function handleOpenModal() {
            setIsModalOpen(true);
        }

        function handleCloseModal() {
            setIsModalOpen(false);
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
                                </div>

                                <div className="history-table-body">
                                    <div className="history-table-row">
                                        <span>01 Aug 12:30</span>
                                        <span>- ₹2,500</span>
                                        <span>Amazon Shopping</span>
                                        <span>UPI</span>
                                        <span>E-commerce</span>
                                    </div>

                                    <div className="history-table-row">
                                        <span>02 Aug 10:00</span>
                                        <span>- ₹1,200</span>
                                        <span>Net Banking</span>
                                        <span>Bank transfer</span>
                                        <span>Utilities</span>
                                    </div>

                                    <div className="history-table-row">
                                        <span>03 Aug 17:45</span>
                                        <span>- ₹350</span>
                                        <span>Starbucks Coffee</span>
                                        <span>Card</span>
                                        <span>Food & Beverage</span>
                                    </div>

                                    <div className="history-table-row">
                                        <span>04 Aug 08:00</span>
                                        <span>- ₹1,500</span>
                                        <span>Petrol Station</span>
                                        <span>UPI</span>
                                        <span>Transport</span>
                                    </div>

                                    <div className="history-table-row">
                                        <span>05 Aug 20:15</span>
                                        <span>- ₹600</span>
                                        <span>Movie Tickets</span>
                                        <span>Wallet</span>
                                        <span>Entertainment</span>
                                    </div>

                                    <div className="history-table-row">
                                        <span>06 Aug 14:00</span>
                                        <span>- ₹8,500</span>
                                        <span>Rent Payment</span>
                                        <span>NEFT</span>
                                        <span>Housing</span>
                                    </div>

                                    <div className="history-table-row">
                                        <span>07 Aug 11:30</span>
                                        <span>- ₹499</span>
                                        <span>Netflix Subscription</span>
                                        <span>Auto debit</span>
                                        <span>Subscription</span>
                                    </div>

                                    <div className="history-table-row">
                                        <span>08 Aug 19:30</span>
                                        <span>- ₹400</span>
                                        <span>Local Grocery Store</span>
                                        <span>UPI</span>
                                        <span>Groceries</span>
                                    </div>

                                    <div className="history-table-row history-table-row-accent">
                                        <span>09 Aug 16:00</span>
                                        <span>₹5,000</span>
                                        <span>Bonus Received</span>
                                        <span>IMPS</span>
                                        <span>Income</span>
                                    </div>

                                    <div className="history-table-row">
                                        <span>10 Aug 13:45</span>
                                        <span>- ₹900</span>
                                        <span>Swiggy Order</span>
                                        <span>UPI</span>
                                        <span>Food delivery</span>
                                    </div>

                                    <div className="history-table-row">
                                        <span>11 Aug 09:15</span>
                                        <span>- ₹1,800</span>
                                        <span>Mobile Recharge</span>
                                        <span>Wallet</span>
                                        <span>Utilities</span>
                                    </div>

                                    <div className="history-table-row">
                                        <span>12 Aug 18:00</span>
                                        <span>- ₹5,000</span>
                                        <span>ATM Withdrawal</span>
                                        <span>Cash</span>
                                        <span>Withdrawal</span>
                                    </div>

                                    <div className="history-table-row">
                                        <span>13 Aug 10:45</span>
                                        <span>- ₹2,200</span>
                                        <span>Gym Membership</span>
                                        <span>Card</span>
                                        <span>Health & Fitness</span>
                                    </div>

                                    <div className="history-table-row">
                                        <span>14 Aug 15:30</span>
                                        <span>- ₹1,100</span>
                                        <span>Doctor’s Visit</span>
                                        <span>UPI</span>
                                        <span>Medical</span>
                                    </div>

                                    <div className="history-table-row">
                                        <span>15 Aug 21:00</span>
                                        <span>- ₹750</span>
                                        <span>Book Store</span>
                                        <span>Card</span>
                                        <span>Shopping</span>
                                    </div>

                                    <div className="history-table-row">
                                        <span>16 Aug 11:00</span>
                                        <span>- ₹500</span>
                                        <span>Friend Repayment</span>
                                        <span>UPI</span>
                                        <span>Transfers</span>
                                    </div>

                                    <div className="history-table-row history-table-row-accent">
                                        <span>17 Aug 16:30</span>
                                        <span>₹1,500</span>
                                        <span>Interest Credit</span>
                                        <span>NEFT</span>
                                        <span>Income</span>
                                    </div>

                                    <div className="history-table-row">
                                        <span>18 Aug 13:15</span>
                                        <span>- ₹2,100</span>
                                        <span>Hardware Store</span>
                                        <span>Card</span>
                                        <span>Needs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && <AddTransaction onClose={handleCloseModal} />}
        </div>
    );
}