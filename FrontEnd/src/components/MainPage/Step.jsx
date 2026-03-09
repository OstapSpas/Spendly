import StepCard from "../MainPage/Step-card";
import LockIMG from "../../assets/img/lock.svg"
import StarIMG from "../../assets/img/star.svg";
import WalletIMG from "../../assets/img/wallet-minimal.svg";

function Step() {
  return (
    <section className="step-section">
      <div className="section-content">
        <div className="step-text">
          <h2 className="step-heading">How It Works</h2>
          <p className="step-subtitle">
            Get started in minutes and let AI handle your bookkeeping
          </p>
        </div>

        <div className="step-grid">
          <StepCard
            icon={LockIMG}
            count="1"
            title="Connect Your Bank"
            description="Securely link your bank accounts in under 60 seconds using Plaid integration. We support over 10,000 financial institutions worldwide."
          />

          <StepCard
            icon={StarIMG}
            count="2"
            title="AI Does the Work"
            description="Our AI automatically categorizes transactions, scans receipts, and tracks expenses in real-time. Set it and forget it."
          />

          <StepCard
            icon={WalletIMG}
            count="3"
            title="Get Insights"
            description="Receive real-time insights, cash flow forecasts, and tax-ready reports instantly. Make smarter business decisions with AI-powered analytics."
          />
        </div>
      </div>
    </section>
  );
}

export default Step;