import IMElogo from "../../assets/images/logo.png";
import { PATH_LOGIN, PATH_REGISTER, PATH_TRANSACTION } from "../../routes/paths";
import { useNavigate } from "react-router-dom";


function Header() {
    const navigate = useNavigate();
    return (
        <header className="header">
            <div className="header-left">
                <a className="logo">
                    <img src={IMElogo} alt="logo" />
                </a>
                <div className="socials__list">
                    <a className="socials">Telegram</a>
                    <a className="socials">Twitter</a>
                </div>
            </div>
            <div className="header-right">
                <button className="button-login" onClick={() => navigate(PATH_LOGIN)}>Login</button>
                <button className="button-register" onClick={() => navigate(PATH_REGISTER)}>Register</button>
                <button className="button-app" onClick={() => navigate(PATH_TRANSACTION)}>Go to App</button>
            </div>

        </header>
    )

}
export default Header;