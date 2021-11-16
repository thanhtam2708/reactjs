import { NavLink } from "react-router-dom";
import logo from '../../img/logo.png'
import payment from '../../img/payment.png'
export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer__about">
                                <div className="footer__logo">
                                    <a href="#" style={{ marginLeft: -60 }}><img src={logo} alt="" /></a>
                                </div>
                                <p>Khách hàng là trọng tâm của mô hình kinh doanh độc đáo của chúng tôi, bao gồm cả thiết kế.</p>
                                <a href="#"><img src={payment} alt="" /></a>
                            </div>
                        </div>
                        <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                            <div className="footer__widget">
                                <h6>Menu</h6>
                                <ul style={{ padding: 0 }}>
                                    <li className="active ">
                                        <NavLink className="text-decoration-none"
                                            aria-current="page"
                                            to="/"
                                            activeClassName="active"
                                            exact>
                                            <span>Trang chủ</span>
                                        </NavLink>

                                    </li>

                                    <li className="active">
                                        <NavLink className="text-decoration-none"
                                            aria-current="page"
                                            to="/shop"
                                            activeClassName="active"
                                            exact>
                                            <span>Sản phẩm</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="text-decoration-none"
                                            aria-current="page"
                                            to=""
                                            activeClassName="active"
                                            exact>
                                            <span>Blog</span>
                                        </NavLink>
                                    </li>
                                    <li className="active">
                                        <NavLink className="text-decoration-none"
                                            aria-current="page"
                                            to="/contact"
                                            activeClassName="active"
                                            exact>
                                            <span>Liên hệ</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                            <div className="footer__widget">
                                <h6>NewLetter</h6>
                                <div className="footer__newslatter">
                                    <p>Be the first to know about new arrivals, look books, sales &amp; promos!</p>
                                    <form action="#">
                                        <input type="text" placeholder="Your email" />
                                        <button type="submit"><span className="icon_mail_alt" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="text-center col-lg-12">
                            <div className="footer__copyright__text">
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                <p>Copyright ©
                                    2021
                                    All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                </p>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}