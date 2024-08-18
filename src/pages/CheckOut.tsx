import { useAppSelector } from "@Redux/hooks";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@styles/Asset/Global.module.css";

import Login from "./Login";
import CartBill from "@components/CartBill/CartBill";
import CriditCardPayment from "@components/criditCartPayment/CriditCardPayment";
import Cart from "./Cart";

const { checkoutStyles, PaymentInfo, row } = styles;

const CheckOut = () => {
  const { isloggin, NewUser } = useAppSelector((state) => state.login);
  const { CartItem } = useAppSelector((state) => state.Cart);

  return (
    <div className={checkoutStyles}>
      {CartItem.length > 0 ? (
        isloggin ? (
          <Container style={{ maxWidth: "1500px" }}>
            <Row className={row}>
              <Col md={12} lg={8} className={PaymentInfo}>
                <CriditCardPayment UserEmail={NewUser.Email} />
              </Col>
              <Col md={12} lg={4} className={PaymentInfo}>
                <CartBill CartItem={CartItem} show={false} />
              </Col>
            </Row>
          </Container>
        ) : (
          <Login />
        )
      ) : (
        <Cart />
      )}
    </div>
  );
};

export default CheckOut;
