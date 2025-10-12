import { NavLink } from "react-router-dom";
import Style from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <div className={Style.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={Style.ctaLink}>
            Log in
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PageNav;
