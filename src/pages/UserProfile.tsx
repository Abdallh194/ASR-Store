import { useAppDispatch, useAppSelector } from "@Redux/hooks";
import Login from "./Login";
import { Container } from "react-bootstrap";
import styles from "@styles/Asset/Global.module.css";
import { HiOutlineLogout } from "react-icons/hi";
import { ActiveLogOut } from "@Redux/user/LoginSlice";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowUpOnSquareStack } from "react-icons/hi2";

const {
  UserProfileStyle,
  mainhead,
  maininfo,
  headerContainer,
  headers,
  details,
  mtinmobile,
  dflexMobile,
  checkoutHead,
} = styles;
const UserProfile = () => {
  const { isloggin, NewUser } = useAppSelector((state) => state.login);
  const { CartItem } = useAppSelector((state) => state.Cart);
  const dispatch = useAppDispatch();

  //navigate
  const navigate = useNavigate();

  return (
    <div className={UserProfileStyle}>
      {isloggin ? (
        <Container>
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
          <hr />
          {CartItem.length > 0 ? (
            <Link to="/cart/checkout" className={checkoutHead}>
              Do you want to continue to the payment page{" "}
              <HiArrowUpOnSquareStack />
            </Link>
          ) : null}
        </Container>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default UserProfile;
