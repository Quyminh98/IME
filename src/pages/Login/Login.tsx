import "./style.css"
function Login() {
    return (
        <div className="login__wrap">
            <main className="login__main">
                <form className="login__form" action="" method="">
                    <h3 className="login__title">Login</h3>
                    <div className="login__container">

                        <label className="login__label" htmlFor="uname">Account</label>
                        <input className="login__input" type="text" name="uname" required />

                        <div className="login__password">
                            <label className="login__label" htmlFor="psw">Password</label>
                            <a href="">
                                <span className="forgot__password">Forgot password</span>
                            </a>
                        </div>
                        <input className="login__input" type="password" name="psw" required />
                        <button className="login__button" type="submit">
                            <span className="login__button-text">Enter</span>
                        </button>
                    </div>
                    <div className="register__now">
                        <span className="register__now-text">Do not have an account?
                            <a href="">
                                <span className="register__now-text-highlight">Register now</span>
                            </a>

                        </span>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Login;