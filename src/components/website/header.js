import '../../css/style.css';
import logo from '../../img/logo.png'
import cart from '../../img/icon/cart.png'
import search from '../../img/icon/search.png'
import { NavLink, useHistory } from 'react-router-dom';
import signup from '../../img/icon/signup.png'
import signin from '../../img/icon/signin.png'
import { NavDropdown } from 'react-bootstrap';
export default function Header() {
    let user = JSON.parse(localStorage.getItem('user'))
    function signOut() {
        localStorage.clear();
        window.location.href = "/"
    }
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="header__logo">
                            <a href=""><img src={logo} alt="" /></a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <nav className="header__menu mobile-menu">
                            <ul>
                                <li className="active ">
                                    <NavLink className="nav-link"
                                        aria-current="page"
                                        to="/"
                                        activeClassName="active"
                                        exact>
                                        <span>Trang chủ</span>
                                    </NavLink>

                                </li>

                                <li className="active">
                                    <NavLink className="nav-link"
                                        aria-current="page"
                                        to="/products"
                                        activeClassName="active"
                                        exact>
                                        <span>Sản phẩm</span>
                                    </NavLink>
                                </li>
                                <li><a href="" className="text-decoration-none">Blog</a></li>
                                <li className="active">
                                    <NavLink className="nav-link"
                                        aria-current="page"
                                        to="/contact"
                                        activeClassName="active"
                                        exact>
                                        <span>Liên hệ</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="header__nav__option">
                            {

                                user ?
                                    <>
                                        <NavDropdown title={user?.user?.name}>

                                            <NavDropdown.Item onClick={signOut}>Đăng xuất</NavDropdown.Item>
                                        </NavDropdown>
                                    </>
                                    :
                                    <>
                                        <a href="#" className="search-switch"><img src={search} alt="" /></a>
                                        <NavLink className=""
                                            aria-current="page"
                                            to="/signup"
                                            activeClassName="active"
                                            exact>
                                            <img src={signup} alt="" width={20} />
                                        </NavLink>
                                        <NavLink className=""
                                            aria-current="page"
                                            to="/signin"
                                            activeClassName="active"
                                            exact>
                                            <img src={signin} alt="" width={20} />
                                        </NavLink>
                                    </>
                            }

                            <a href="#"><img src={cart} alt="" /> </a>
                            <div className="price">$0.00</div>
                        </div>
                        {localStorage.getItem('user-info') ?
                            <NavDropdown title={user && user.name}>
                                <NavDropdown.Item onClick={signOut}>Đăng xuất</NavDropdown.Item>
                            </NavDropdown>
                            : null

                        }

                    </div>
                </div>

            </div>
        </header>

    );
}
