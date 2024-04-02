import IMElogo from "../../assets/images/logo.png";
import AvatarLogo from "../../assets/images/Vector.svg"
import { PATH_HOME, PATH_REFERRAL, PATH_TRANSACTION } from "../../routes/paths";
import "./style.css"
import { useNavigate } from "react-router-dom";

function HeaderProfile() {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="header-left">
                <a className="logo" onClick={() => navigate(PATH_HOME)}>
                    <img src={IMElogo} alt="logo" />
                </a>
                <div className="socials__list">
                    <a className="socials" onClick={() => navigate(PATH_HOME)}>Home</a>
                    <a className="socials" onClick={() => navigate(PATH_TRANSACTION)}>Transaction</a>
                    <a className="socials" onClick={() => navigate(PATH_REFERRAL)}>My referral</a>
                </div>
            </div>
            <div className="header-right">
                <div className="profile__info">
                    <img src={AvatarLogo} alt="" />
                    <span className="profile__name">Esther Howard</span>
                </div>
            </div>
        </header>
    )

}

export default HeaderProfile;
