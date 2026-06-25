function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div className="container">

                <span className="navbar-brand fw-bold">
                    <i className="bi bi-box-seam-fill me-2"></i>
                    Inventory Management System
                </span>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <span className="nav-link active">
                                <i className="bi bi-speedometer2 me-1"></i>
                                Dashboard
                            </span>
                        </li>

                        <li className="nav-item">
                            <span className="nav-link">
                                <i className="bi bi-box me-1"></i>
                                Products
                            </span>
                        </li>

                        <li className="nav-item">
                            <span className="nav-link">
                                <i className="bi bi-info-circle me-1"></i>
                                About
                            </span>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;