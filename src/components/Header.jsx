import HeaderIMG from "../assets/img/iMac-mockup.png";

function Header() {
    return (
        <div className="header-content">
            <div className="header-left">
                <div className="header-heading">
                    <h1>
                        Take Control Of Your <br />
                        Finances With Spendly
                    </h1>
                </div>

                <div className="header-text">
                    <p>
                        Spendly helps you track, plan and understand your money
                        in one simple place. No confusion. No spreadsheets.
                        Just clear financial control.
                    </p>
                </div>

                <div className="header-btn">
                    <button className="nav-trial">Start with Spendly</button>
                </div>
            </div>

            <div className="header-right">
                <div className="header-images">
                    <img
                        className="header-mockUp"
                        src={HeaderIMG}
                        alt="Spendly dashboard mockup"
                    />
                </div>
            </div>
        </div>
    );
}
export default Header;