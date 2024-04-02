import "./style.css";
import CopyLogo from "../../../assets/images/copy.png"
import IMEReferralLogo from "../../../assets/images/IMEReferral.png"

function Referral() {
    return (
        <>
            <main className="main__referral">
                <h2 className="referral__title">My referral</h2>
                <div className="referral__title-underlined"></div>
                <div className="referral__container">
                    <div className="referral__card">
                        <h3 className="referral__card-title">Link referral</h3>
                        <span className="referral__percent">10% affiliate commission</span>
                        <div className="referral__link">
                            <span className="link">https://suimeme.meme/0xed888a5bfd06999bbbe4437f7071b00 76c763d7b3fbfd1fe070c f6fcba7ef665</span>s
                        </div>
                        <button className="copy__button">
                            <span className="copy__text">
                                Copy link
                            </span>
                            <img src={CopyLogo} alt="" />
                        </button>

                        <img className="copy__img" src={IMEReferralLogo} alt="" />

                    </div>
                    <div className="customer">
                        <div className="customer__title">
                            <h3 className="customer__title-main">My Customer</h3>
                            <span className="customer__title-description"> All your referral friends in one place</span>
                        </div>
                        <div className="customer__table">
                            <table className="table">
                                <thead>
                                    <tr className="table__title">
                                        <th>Wallet</th>
                                        <th>Time</th>
                                        <th>Total investment</th>
                                        <th>Your Reward</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="customer__item">
                                        <td className="customer__address">0xbA1...6A4f0</td>
                                        <td className="customer__time">20/05/ 2024 07:59 pm</td>
                                        <td className="customer__investment">
                                            <span className="total__investment">196,594,647.07</span></td>
                                        <td className="customer__reward">$43.65</td>

                                    </tr>
                                    <tr className="customer__item">
                                        <td className="customer__address">0x20B...2gd20</td>
                                        <td className="customer__time">20/05/ 2024 07:59 pm</td>
                                        <td className="customer__investment">
                                            <span className="total__investment">196,594,647.07</span>
                                        </td>
                                        <td className="customer__reward">$43.65</td>

                                    </tr>
                                    <tr className="customer__item">
                                        <td className="customer__address">0x20B...2gd20</td>
                                        <td className="customer__time">20/05/ 2024 07:59 pm</td>
                                        <td className="customer__investment">
                                            <span className="total__investment">196,594,647.07</span></td>
                                        <td className="customer__reward">$43.65</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </main>
        </>

    )
}

export default Referral;