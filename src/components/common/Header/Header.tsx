//styles
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css";
import { Form, FormControl } from "react-bootstrap";

//motion
import { motion } from "framer-motion";

//router
import { NavLink } from "react-router-dom";
import Basket from "@components/feedback/Basket";

const {
  Header,
  LogoHeader,
  Logo,

  NavbarContainer,
  NavbarStyles,
  Brand,
  Link,
  LinkNoMargin,
  form,
  formInput,
  searchBtn,
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

        <Form className={form}>
          <FormControl
            type="text"
            className={formInput}
            style={{ height: "55px" }}
            placeholder="Are you looking for a specific product?"
          />
          <div className={searchBtn}>Search</div>
        </Form>
        <Basket />
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
              <Nav.Link as={NavLink} className={LinkNoMargin} to="login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} className={LinkNoMargin} to="register">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}

export default CollapsibleExample;
