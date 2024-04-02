import './style.css';

function Register() {
    return (
        <div className="register__wrap">
            <main className="register__main">
                <form className="register__form" action="" method="">
                    <h3 className="register__title">Create Account</h3>
                    <div className="register__container">
                        <label className="register__label" htmlFor="firstName">First name</label>
                        <input className="register__input" type="text" name="firstName" required />
                        <label className="register__label" htmlFor="lastName">Last name</label>
                        <input className="register__input" type="text" name="lastName" required />
                        <label className="register__label" htmlFor="email">Email</label>
                        <input className="register__input" type="email" name="email" required />
                        <label className="register__label" htmlFor="psw">Password</label>
                        <input className="register__input" type="password" name="psw" required />
                        <button className="register__button" type="submit">
                            <span className="register__button-text">Enter</span>
                        </button>
                    </div>
                    <div className="login__now">
                        <span className="login__now-text">Do you already have an account?
                            <a href="">
                                <span className="login__now-text-highlight">Login now</span>
                            </a>

                        </span>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Register