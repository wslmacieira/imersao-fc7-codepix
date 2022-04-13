import Footer from './Footer'

type Props = {
  children:  React.ReactNode
}

const Layout: React.FunctionComponent = (props: Props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/img/icon_banco.png" alt="" />
            <div>
              <span>Cod - 001</span>
              <h2>BBX</h2>
            </div>
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href='#'>
                  <img src="/img/icon_user.png" alt="" />
                  <p>Proprietário | C/C: Número da conta</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <div className='container'>
          {props.children}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Layout;
