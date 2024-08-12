import { useAppDispatch, useAppSelector } from "@Redux/hooks";
import { Col, Container, Row } from "react-bootstrap";
import { RiDeleteBin5Fill } from "react-icons/ri";
import "./Styel/Cart.css";
import IconButton from "@mui/material/IconButton";
import CartBill from "@components/CartBill/CartBill";
import { DeleteItemFromCard } from "@Redux/Cart/CartSlice";
import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { CartItem } = useAppSelector((state) => state.Cart);

  const Headers: string[] = [
    "Product Image",
    "Product Name",
    "Quantity",
    "Price",
    "Delete",
  ];

  const HeadersLoop = Headers.map((e) => (
    <Col xs={2} key={Math.random()} className="HeadersStyles">
      {e}
    </Col>
  ));
  const LoopedItems = CartItem.map((item) => (
    <Row key={item.id} className="CartItemsDetailsContainer">
      <Col xs={2} className="CartItemsDetails">
        <img
          src={item.images}
          alt={item.title}
          width={50}
          className="img-fluid"
        />
      </Col>
      <Col xs={2} className="CartItemsDetails">
        {item.title}
      </Col>
      <Col xs={2} className="CartItemsDetails">
        {item.Quantity}
      </Col>
      <Col xs={2} className="CartItemsDetails">
        {item.Quantity} × {item.price}
      </Col>
      <Col xs={2} className="CartItemsDetails" style={{ color: "red" }}>
        <IconButton
          onClick={() => {
            dispatch(DeleteItemFromCard(item.id));
          }}
        >
          <RiDeleteBin5Fill style={{ color: "red" }} />
        </IconButton>
      </Col>
    </Row>
  ));

  return (
    <div className="Cart">
      <Container>
        {CartItem.length > 0 ? (
          <>
            <div className="head">Shopping cart</div>
            <Row>
              <Col md={12} lg={8}>
                <Row className="HeadersContainer">{HeadersLoop}</Row>
                {LoopedItems}
              </Col>
              <Col md={12} lg={4} className="Bill">
                <CartBill CartItem={CartItem} />
              </Col>
            </Row>
          </>
        ) : (
          <LottieHandler type="empty" message="Cart Is Empty" />
        )}
      </Container>
    </div>
  );
};

export default Cart;
