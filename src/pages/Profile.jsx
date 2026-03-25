import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/App.css";
import "../styles/index.css";
import "../styles/Profile.css";

import TopBar from "../components/DashLayout/TopBar";
import SideBar from "../components/DashLayout/SideBar";
import UserIMG from "../assets/DashBoard-icon/user-icon.svg";

const API_URL = import.meta.env.VITE_API_URL || "";

export default function Profile() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: ""
    });

    const [loadingUser, setLoadingUser] = useState(true);
    const [profileError, setProfileError] = useState("");

    const [phone, setPhone] = useState("");
    const [timezone, setTimezone] = useState("Europe/Bratislava");
    const [currency, setCurrency] = useState("EUR");
    const [language, setLanguage] = useState("English");

    useEffect(() => {
        async function fetchMe() {
            const token = localStorage.getItem("token");

            if (!token) {
                navigate("/auth");
                return;
            }

            try {
                setLoadingUser(true);
                setProfileError("");

                const res = await fetch(`${API_URL}/api/auth/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const data = await res.json();

                if (!res.ok) {
                    localStorage.removeItem("token");
                    navigate("/auth");
                    return;
                }

                setUser({
                    name: data.name || "",
                    email: data.email || ""
                });
            } catch (err) {
                setProfileError("Failed to load profile data");
            } finally {
                setLoadingUser(false);
            }
        }

        fetchMe();
    }, [navigate]);

    return (
        <div className="dashboard-layout">
            <SideBar />

            <div className="dashboard-main">
                <TopBar user={user} loadingUser={loadingUser} />

                <div className="dashboard-content">
                    <div className="profile-content">
                        {profileError && (
                            <p style={{ color: "red", marginBottom: "16px" }}>
                                {profileError}
                            </p>
                        )}

                        <div className="profile-bar profile-card">
                            <div className="profile-bar-text">
                                <h2>Settings</h2>
                                <p>Manage your profile, security and personal preferences in one place</p>
                            </div>
                            <button className="nav-trial" type="button">
                                Save Changes
                            </button>
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

                                        <button className="profile-basic-data-btn nav-trial" type="button">
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
                                                value={loadingUser ? "Loading..." : user.name}
                                                onChange={(e) =>
                                                    setUser((prev) => ({
                                                        ...prev,
                                                        name: e.target.value
                                                    }))
                                                }
                                            />
                                        </div>

                                        <div className="profile-field">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                className="profile-input"
                                                type="email"
                                                id="email"
                                                value={loadingUser ? "Loading..." : user.email}
                                                onChange={(e) =>
                                                    setUser((prev) => ({
                                                        ...prev,
                                                        email: e.target.value
                                                    }))
                                                }
                                            />
                                        </div>

                                        <div className="profile-field">
                                            <label htmlFor="phone">Phone number</label>
                                            <input
                                                className="profile-input"
                                                type="text"
                                                id="phone"
                                                placeholder="+421 ..."
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </div>

                                        <div className="profile-field">
                                            <label htmlFor="timezone">Time Zone</label>
                                            <input
                                                className="profile-input"
                                                type="text"
                                                id="timezone"
                                                value={timezone}
                                                onChange={(e) => setTimezone(e.target.value)}
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

                                    <button className="nav-trial" type="button">
                                        Change password
                                    </button>
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
                                            value={currency}
                                            onChange={(e) => setCurrency(e.target.value)}
                                        />
                                        <datalist id="currency-item">
                                            <option value="USD" />
                                            <option value="EUR" />
                                            <option value="UAH" />
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
                                            value={language}
                                            onChange={(e) => setLanguage(e.target.value)}
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