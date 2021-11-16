export default function Header() {
    function signOut() {
        localStorage.clear();
        window.location.href = "/"
    }
    return (
        <header className="p-0 shadow navbar navbar-dark sticky-top bg-dark flex-md-nowrap">
            <a className="px-3 navbar-brand col-md-3 col-lg-2 me-0" href="#">
                Company name
            </a>
            <button
                className="navbar-toggler position-absolute d-md-none collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <input
                className="form-control form-control-dark w-100"
                type="text"
                placeholder="Search"
                aria-label="Search"
            />
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                    <a className="px-3 nav-link" href="#" onClick={signOut}>
                        Đăng xuất
                    </a>
                </div>
            </div>
        </header>
    );
}