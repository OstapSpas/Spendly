import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/index.css";
import "../styles/App.css";
import "../styles/AuthPage.css";

import arrowBtn from "../assets/DashBoard-icon/right-arrow.svg";

// Адреса бекенду
const API_URL = "http://localhost:3000";

export default function AuthPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const [mode, setMode] = useState("login");

    // Стан для полів форми
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (location.state && location.state.mode) {
            setMode(location.state.mode);
        }
    }, [location.state]);

    function handleBack() {
        navigate(-1);
    }

    // Логін
    async function handleLogin(e) {
        e.preventDefault(); // зупиняємо перезавантаження сторінки
        setError("");
        setLoading(true);

        try {
            const res = await fetch(`${API_URL}/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Помилка логіну");
                return;
            }

            // Зберігаємо токен і дані юзера
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            // Переходимо на дашборд
            navigate("/dashboard");
        } catch (err) {
            setError("Не вдалось підключитись до сервера");
        } finally {
            setLoading(false);
        }
    }

    // Реєстрація
    async function handleRegister(e) {
        e.preventDefault();
        setError("");

        if (password !== passwordRepeat) {
            setError("Паролі не співпадають");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch(`${API_URL}/api/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, name, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Помилка реєстрації");
                return;
            }

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            navigate("/dashboard");
        } catch (err) {
            setError("Не вдалось підключитись до сервера");
        } finally {
            setLoading(false);
        }
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
                            onClick={() => { setMode("login"); setError(""); }}
                        >
                            Log In
                        </button>
                        <button
                            type="button"
                            className={`auth-switch-btn ${mode === "signup" ? "is-active" : ""}`}
                            onClick={() => { setMode("signup"); setError(""); }}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Показуємо помилку якщо є */}
                    {error && (
                        <p style={{ color: "red", textAlign: "center", marginBottom: "8px" }}>
                            {error}
                        </p>
                    )}

                    {mode === "login" ? (
                        <form className="auth-form" onSubmit={handleLogin}>
                            <div className="auth-field">
                                <label htmlFor="login-email">Email address</label>
                                <input
                                    id="login-email"
                                    type="email"
                                    placeholder="name@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="auth-field">
                                <label htmlFor="login-password">Password</label>
                                <input
                                    id="login-password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
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

                            <button type="submit" className="auth-submit" disabled={loading}>
                                {loading ? "Loading..." : "Log In"}
                            </button>
                        </form>
                    ) : (
                        <form className="auth-form" onSubmit={handleRegister}>
                            <div className="auth-field">
                                <label htmlFor="register-name">Full name</label>
                                <input
                                    id="register-name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="auth-field">
                                <label htmlFor="register-email">Email address</label>
                                <input
                                    id="register-email"
                                    type="email"
                                    placeholder="name@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="auth-field">
                                <label htmlFor="register-password">Password</label>
                                <input
                                    id="register-password"
                                    type="password"
                                    placeholder="Create a password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="auth-field">
                                <label htmlFor="register-password-repeat">Confirm password</label>
                                <input
                                    id="register-password-repeat"
                                    type="password"
                                    placeholder="Repeat your password"
                                    value={passwordRepeat}
                                    onChange={(e) => setPasswordRepeat(e.target.value)}
                                    required
                                />
                            </div>

                            <label className="auth-check auth-check-wide">
                                <input type="checkbox" required />
                                <span>I agree to the Terms and Privacy Policy</span>
                            </label>

                            <button type="submit" className="auth-submit" disabled={loading}>
                                {loading ? "Loading..." : "Create Account"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}