import "../styles/App.css";
import "../styles/index.css";
import "../styles/Profile.css";

import TopBar from "../components/DashLayout/TopBar";
import SideBar from "../components/DashLayout/SideBar";
import UserIMG from "../assets/DashBoard-icon/user-icon.svg";

export default function Profile() {
    return (
        <div className="dashboard-layout">
            <SideBar />

            <div className="dashboard-main">
                {/* <TopBar /> */}

                <div className="dashboard-content">
                    <div className="profile-content">
                        <div className="profile-bar profile-card">
                            <div className="profile-bar-text">
                                <h2>Settings</h2>
                                <p>Manage your profile, security and personal preferences in one place</p>
                            </div>
                            <button className="nav-trial">Save Changes</button>
                        </div>

                        <div className="profile-column">
                            <div className="profile-basic-data profile-card">
                                <div className="profile-basic-data-text">
                                    <h2>Profile</h2>
                                    <p>Basic information used across your Velora account</p>
                                </div>

                                <div className="profile-basic-data-row">
                                    <div className="profile-basic-data-first-block">
                                        <div className="profile-basic-data-img">
                                            <img
                                                src={UserIMG}
                                                alt="user-img"
                                                className="profile-avatar topbar-avatar"
                                            />
                                        </div>

                                        <button className="profile-basic-data-btn nav-trial">
                                            Change photo
                                        </button>
                                    </div>

                                    <div className="profile-form-grid">
                                        <div className="profile-field">
                                            <label htmlFor="name">Name</label>
                                            <input
                                                className="profile-input"
                                                type="text"
                                                id="name"
                                                placeholder="Ekash Sharma"
                                            />
                                        </div>

                                        <div className="profile-field">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                className="profile-input"
                                                type="email"
                                                id="email"
                                                placeholder="ekash.sharma@example.com"
                                            />
                                        </div>

                                        <div className="profile-field">
                                            <label htmlFor="phone">Phone number</label>
                                            <input
                                                className="profile-input"
                                                type="text"
                                                id="phone"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>

                                        <div className="profile-field">
                                            <label htmlFor="timezone">Time Zone</label>
                                            <input
                                                className="profile-input"
                                                type="text"
                                                id="timezone"
                                                placeholder="IST (GMT +5:30)"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="profile-security profile-card">
                                <div className="profile-security-text">
                                    <h2>Security</h2>
                                    <p>Protect your account with a strong password and 2-step verification</p>
                                </div>

                                <div className="profile-security-row">
                                    <div className="profile-field profile-field-password">
                                        <label htmlFor="password">Current password</label>
                                        <input
                                            className="profile-input"
                                            type="password"
                                            id="password"
                                            placeholder="••••••••••••"
                                        />
                                    </div>

                                    <button className="nav-trial">Change password</button>
                                </div>
                            </div>

                            <div className="profile-preference profile-card">
                                <div className="profile-preference-text">
                                    <h2>Preferences</h2>
                                    <p>Choose how Velora looks and works for you</p>
                                </div>

                                <div className="profile-preference-row">
                                    <div className="profile-field">
                                        <label htmlFor="currency">Default currency</label>
                                        <input
                                            className="profile-input"
                                            list="currency-item"
                                            id="currency"
                                            name="currency"
                                            placeholder="INR - Indian Rupee"
                                        />
                                        <datalist id="currency-item">
                                            <option value="Dollar" />
                                            <option value="EUR" />
                                            <option value="UAH" />
                                            <option value="Bit" />
                                            <option value="INR" />
                                        </datalist>
                                    </div>

                                    <div className="profile-field">
                                        <label htmlFor="language">Language</label>
                                        <input
                                            className="profile-input"
                                            list="language-item"
                                            id="language"
                                            name="language"
                                            placeholder="English"
                                        />
                                        <datalist id="language-item">
                                            <option value="English" />
                                            <option value="Ukrainian" />
                                            <option value="Slovak" />
                                            <option value="German" />
                                        </datalist>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}