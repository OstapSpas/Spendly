import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/index.css";
import "../styles/App.css";
import "../styles/AuthPage.css";

import arrowBtn from "../assets/DashBoard-icon/right-arrow.svg";

export default function AuthPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const [mode, setMode] = useState("login");

    useEffect(() => {
        if (location.state && location.state.mode) {
            setMode(location.state.mode);
        }
    }, [location.state]);

    function handleBack() {
        navigate(-1);
    }

    return (
        <section className="auth-page">
            <div className="auth-shell">
                <button type="button" className="auth-back" onClick={handleBack}>
                    <img src={arrowBtn} alt="" className="auth-back-icon" />
                    <span>Back</span>
                </button>

                <div className="auth-card">
                    <div className="auth-brand">
                        <div className="auth-brand-badge">O</div>
                        <div className="auth-brand-text">
                            <h1>{mode === "login" ? "Welcome back" : "Create account"}</h1>
                            <p>
                                {mode === "login"
                                    ? "Log in to manage your finances in one place."
                                    : "Join Spendly and start tracking your money smarter."}
                            </p>
                        </div>
                    </div>

                    <div className={`auth-switch ${mode === "signup" ? "is-register" : ""}`}>
                        <span className="auth-switch-indicator" />

                        <button
                            type="button"
                            className={`auth-switch-btn ${mode === "login" ? "is-active" : ""}`}
                            onClick={() => setMode("login")}
                        >
                            Log In
                        </button>

                        <button
                            type="button"
                            className={`auth-switch-btn ${mode === "signup" ? "is-active" : ""}`}
                            onClick={() => setMode("signup")}
                        >
                            Sign Up
                        </button>
                    </div>

                    {mode === "login" ? (
                        <form className="auth-form">
                            <div className="auth-field">
                                <label htmlFor="login-email">Email address</label>
                                <input
                                    id="login-email"
                                    type="email"
                                    placeholder="name@email.com"
                                />
                            </div>

                            <div className="auth-field">
                                <label htmlFor="login-password">Password</label>
                                <input
                                    id="login-password"
                                    type="password"
                                    placeholder="Enter your password"
                                />
                            </div>

                            <div className="auth-row">
                                <label className="auth-check">
                                    <input type="checkbox" />
                                    <span>Remember me</span>
                                </label>

                                <button type="button" className="auth-link-btn">
                                    Forgot password?
                                </button>
                            </div>

                            <button type="submit" className="auth-submit">
                                Log In
                            </button>
                        </form>
                    ) : (
                        <form className="auth-form">
                            <div className="auth-field">
                                <label htmlFor="register-name">Full name</label>
                                <input
                                    id="register-name"
                                    type="text"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="auth-field">
                                <label htmlFor="register-email">Email address</label>
                                <input
                                    id="register-email"
                                    type="email"
                                    placeholder="name@email.com"
                                />
                            </div>

                            <div className="auth-field">
                                <label htmlFor="register-password">Password</label>
                                <input
                                    id="register-password"
                                    type="password"
                                    placeholder="Create a password"
                                />
                            </div>

                            <div className="auth-field">
                                <label htmlFor="register-password-repeat">Confirm password</label>
                                <input
                                    id="register-password-repeat"
                                    type="password"
                                    placeholder="Repeat your password"
                                />
                            </div>

                            <label className="auth-check auth-check-wide">
                                <input type="checkbox" />
                                <span>I agree to the Terms and Privacy Policy</span>
                            </label>

                            <button type="submit" className="auth-submit">
                                Create Account
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}