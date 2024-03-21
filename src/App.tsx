
import './App.css'
import background from "./assets/images/background.mp4"
import IMElogo from "./assets/images/logo.png"
function App() {
  return (
    <>
      <header className="header">
        <a className="logo">
          <img src={IMElogo} alt="logo" />
        </a>
        <div className="socials__list">
          <a className="socials">Telegram</a>
          <a className="socials">Twitter</a>
        </div>
        <a className="logo logo-hidden">
          <img src={IMElogo} alt="logo" />
        </a>
      </header>

      <video autoPlay muted loop id="myVideo">
        <source src={background} type="video/mp4" />
      </video>

      <div className="main">
        <div className="content">
          <div className="tokenomic">
            <h2 className='tokenomic__title'>Tokenomic:</h2>
            <ul>
              <li>
                <p className='tokenomic__key'>
                  Totla supply:
                </p>
                <p className='tokenomic__value'>
                  520.696.000.000.000
                </p>

              </li>
              <li>
                <p className='tokenomic__key'>
                  Symbol:
                </p>
                <p className='tokenomic__value'>
                  IME
                </p>
              </li>
              <li>
                <p className='tokenomic__key'>
                  Chain:
                </p>
                <p className='tokenomic__value'>
                  Sui
                </p>
              </li>
            </ul>
          </div>

          <div className="description">
            <p className="description__content">No taxes, no bullshit. Simply put, suimeme.meme is only for investors who like to take risks and adventures, not for investors who are faint of heart. LP tokens are burned and there is no owner of the contract.</p>
          </div>

        </div>
      </div>
      <footer className="footer">
        <p className="footer__content">© 2024 | All Rights Reserved - By suimeme.meme</p>
      </footer>
    </>
  )
}

export default App
