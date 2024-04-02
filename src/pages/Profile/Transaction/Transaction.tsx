
import "./style.css";
import Avatar from "../../../assets/images/avatar-big.svg"
import IMEToken from "../../../assets/images/coin.png"
import SendLogo from "../../../assets/images/money-send.svg"
import ReciveLogo from "../../../assets/images/money-recive.svg"
import SolSymbol from "../../../assets/images/sol-symbol.png"
import ImeSymbol from "../../../assets/images/ime-symbol.png"
import SwapIcon from "../../../assets/images/swap.png"

function Transaction() {
    return (
        <>
            <main className="main__profile">
                <h2 className="profile__title">Transaction</h2>
                <div className="profile__title-underlined"></div>
                <div className="profile__container">
                    <div className="profile__card">
                        <div className="profile__card-info">
                            <img src={Avatar} alt="" />
                            <span className="profile__card-name">Esther Howard</span>
                        </div>
                        <div className="profile__card-detail">
                            <div className="profile__card-item">
                                <span className="profile__card-key">Balance</span>
                                <div className="profile__card-wrap-value">
                                    <img src={IMEToken} alt="" />
                                    <span className="profile__card-value">52,418.61</span>
                                </div>
                            </div>
                            <div className="profile__card-item-underline"></div>

                            <div className="profile__card-item">
                                <span className="profile__card-key">Commission</span>
                                <div className="profile__card-wrap-value">
                                    <img src={IMEToken} alt="" />
                                    <span className="profile__card-value">2,418.61</span>
                                </div>
                            </div>
                            <div className="profile__card-item-underline"></div>

                            <div className="profile__card-item">
                                <span className="profile__card-key">Email</span>
                                <div className="profile__card-wrap-value">
                                    <span className="profile__card-value">ab-bv@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="profile__card-wrap-button">
                            <button className="profile__card-button">
                                <img src={ReciveLogo} alt="" />
                                <span className="profile__card-button-text">Deposit</span>
                            </button>
                            <button className="profile__card-button">
                                <img src={SendLogo} alt="" />
                                <span className="profile__card-button-text">Withdraw</span>
                            </button>
                        </div>

                    </div>
                    <div className="profile__swap">
                        <h3 className="profile__swap-tittle">Calculater</h3>
                        <div className="profile__swap-underline"></div>
                        <div className="profile__swap-content">
                            <h4 className="profile__swap-content-text">
                                From
                            </h4>
                            <div className="swap__content">
                                <div className="swap__value">
                                    <form className="swap__form" action="">
                                        <label className="swap__label" htmlFor="">From:</label>
                                        <input className="swap__input" type="number" />
                                    </form>
                                    <span className="value__text">
                                        $1477.6
                                    </span>
                                </div>
                                <div className="swap__symbol">
                                    <img src={SolSymbol} alt="" />
                                    <span className="swap__symbol-text">SOL</span>
                                </div>
                            </div>
                            <div className="swap__icon">
                                <img src={SwapIcon} alt="" />
                            </div>

                            <h4 className="profile__swap-content-text">
                                To
                            </h4>
                            <div className="swap__content">
                                <div className="swap__value">
                                    <form className="swap__form" action="">
                                        <label className="swap__label" htmlFor="">From:</label>
                                        <input className="swap__input" type="number" />
                                    </form>
                                    <span className="value__text">
                                        $1477.6
                                    </span>
                                </div>
                                <div className="swap__symbol">
                                    <img src={ImeSymbol} alt="" />
                                    <span className="swap__symbol-text">IME</span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}

export default Transaction;