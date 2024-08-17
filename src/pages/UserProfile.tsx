import { useAppDispatch, useAppSelector } from "@Redux/hooks";
import Login from "./Login";
import { Container } from "react-bootstrap";
import styles from "@styles/Asset/Global.module.css";
import { HiOutlineLogout } from "react-icons/hi";
import { ActiveLogOut } from "@Redux/user/LoginSlice";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
const {
  UserProfileStyle,
  mainhead,
  maininfo,
  headerContainer,
  headers,
  details,
  mtinmobile,
  dflexMobile,
} = styles;
const UserProfile = () => {
  const { isloggin, NewUser } = useAppSelector((state) => state.login);
  const { CartItem } = useAppSelector((state) => state.Cart);
  const dispatch = useAppDispatch();

  //navigate
  const navigate = useNavigate();

  //modal states
  const [show, setShow] = useState(CartItem.length > 0 ? true : false);

  const handleClose = () => setShow(false);

  return (
    <div className={UserProfileStyle}>
      {isloggin ? (
        <Container>
          {/* <Link to="/cart/checkout" className={checkoutHead}>
            Do you want to continue to the payment page?
          </Link> */}
          <Modal backdrop="static" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Important note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Do you want to continue to the payment page?
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="danger"
                onClick={() => {
                  handleClose();
                  console.log(handleClose());
                }}
              >
                Close
              </Button>
              <Button
                variant="success"
                onClick={() => {
                  navigate("/cart/checkout");
                }}
              >
                Continue
              </Button>
            </Modal.Footer>
          </Modal>

          <div className={mainhead}>Personal Details</div>
          <div className={maininfo}>
            Please update your data regularly so that you do not miss out on
            news, offers and services.
          </div>
          <div className={`${headerContainer} ${dflexMobile}`}>
            <div className={headers}>Personal Information</div>
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(ActiveLogOut());
                navigate("/");
              }}
            >
              LogOut <HiOutlineLogout />
            </button>
          </div>
          <div className={headerContainer} style={{ marginTop: "35px" }}>
            <div className={mtinmobile}>
              <div className={details}>First Name</div>
              <div className={details}>{NewUser.FirstName}</div>
            </div>
            <div className={mtinmobile}>
              <div className={details}>Last Name</div>
              <div className={details}>{NewUser.LastName}</div>
            </div>
            <div className={mtinmobile}>
              <div className={details}>Customer Classification</div>
              <div className={details}>Regular customer</div>
            </div>
          </div>
          <hr />
          <div className={headerContainer}>
            <div className={mtinmobile}>
              <div className={details}>Email</div>
              <div className={details}>{NewUser.Email}</div>
            </div>
            <div className={mtinmobile}>
              <div className={details}>Phone Number</div>
              <div className={details}>{NewUser.Phone}</div>
            </div>
          </div>
        </Container>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default UserProfile;
