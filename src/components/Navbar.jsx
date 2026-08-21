import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav
      className="navbar navbar-expand-lg shop-navbar sticky-top py-3"
      dir="rtl"
    >
      <div className="container">
        <NavLink className="navbar-brand brand-mark m-0" to="/">
          فروش<span>گاه</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#shopNavbarContent"
          aria-controls="shopNavbarContent"
          aria-expanded="false"
          aria-label="باز کردن منو"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="shopNavbarContent">
          <ul className="navbar-nav mx-auto gap-lg-2 mt-3 mt-lg-0 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                محصولات
              </NavLink>
            </li>
          </ul>

          <NavLink
            to="/cart"
            className="cart-badge-btn mt-3 mt-lg-0 mx-auto mx-lg-0 text-decoration-none"
          >
            🛒 سبد خرید
            <span className="badge bg-light text-dark ms-1">
              {totalQuantity}
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
