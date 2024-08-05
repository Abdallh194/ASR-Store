import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css";
import { motion } from "framer-motion";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";
const {
  Header,
  LogoHeader,
  Logo,
  cartBasket,
  NavbarContainer,
  NavbarStyles,
  Brand,
  Link,
  LinkNoMargin,
} = styles;
function CollapsibleExample() {
  return (
    <header className={Header}>
      <div className={LogoHeader}>
        <div className={Logo}>
          <motion.img
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            src="/logo.png"
            alt="logo"
            width={100}
            height={80}
            className="img-fluid"
          />
          <span className="mx-2">ASR Store</span>
        </div>
        <div className={cartBasket} cart-length="0">
          <TiShoppingCart />
        </div>
      </div>
      <div className={NavbarContainer}>
        <Navbar collapseOnSelect expand="lg" className={NavbarStyles}>
          <Navbar.Brand className={Brand} href="/">
            ASR Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} className={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} className={Link} to="/about">
                About Us
              </Nav.Link>
              <Nav.Link as={NavLink} className={Link} to="/categories">
                Categories
              </Nav.Link>
              <Nav.Link as={NavLink} className={Link} to="/contact">
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav>
              <NavLink className={LinkNoMargin} to="login">
                Login
              </NavLink>
              <NavLink className={LinkNoMargin} to="register">
                Register
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}

export default CollapsibleExample;
