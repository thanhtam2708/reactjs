import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
            <div className="pt-3 position-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            aria-current="page"
                            to="/admin"
                            activeClassName="active"
                            exact
                        >
                            <span data-feather="home" />
                            Quản lý
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/admin/product"
                            activeClassName="active"
                            exact
                        >
                            <span data-feather="shopping-cart" />
                            Sản phẩm
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/admin/product/add"
                            activeClassName="active"
                            exact
                        >
                            <span data-feather="users" />
                            Thêm sản phẩm
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/admin/cate"
                            activeClassName="active"
                            exact
                        >
                            <span data-feather="users" />
                            Danh mục
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
