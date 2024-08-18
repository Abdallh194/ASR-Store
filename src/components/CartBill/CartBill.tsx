import { useAppDispatch, useAppSelector } from "@Redux/hooks";
import { Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "@styles/Asset/Global.module.css";
import { ActivetoCheckut } from "@Redux/user/LoginSlice";
const { Bill, billHeaders, formcontrol, btn, checkoutbtn } = styles;

type TItem = {
  CartItem: {
    id: string;
    images: string;
    title: string;
    price: number;
    cat_prefix: string;
    Quantity: number;
    discount: string;
  }[];
  show: boolean;
};
const CartBill = ({ CartItem, show }: TItem) => {
  const { isloggin } = useAppSelector((state) => state.login);
  const BiilLoopItems = CartItem.map((e) => (
    <div key={e.id} className={`${billHeaders} mt-2`}>
      <div>{e.title}</div>
      <div>${e.price}</div>
    </div>
  ));
  const TotalBillPrice = () => {
    let total = 0;
    CartItem.map((e) => (total += e.price * e.Quantity));
    return total;
  };
  const dispatch = useAppDispatch();
  return (
    <div className={Bill}>
      <Form>
        <FormControl
          className={formcontrol}
          type="text"
          placeholder="Coupon Code"
        />
        <Button className={`${btn} btn`}>Confirm</Button>
      </Form>
      <div className={`${billHeaders} mt-3`}>
        <div>Product Name</div>
        <div>Price</div>
      </div>
      <hr />
      {BiilLoopItems}
      <hr />
      <div className={`${billHeaders} mt-3`}>
        <div>Discount</div>
        <div>$0 </div>
      </div>
      <hr />
      <div className={`${billHeaders} mt-3`}>
        <div>Total</div>
        <div>${TotalBillPrice()} </div>
      </div>

      {show ? (
        isloggin ? (
          <Link to="checkout" className={checkoutbtn}>
            Proceced To CheckOut
          </Link>
        ) : (
          <Link
            to="/login"
            className={checkoutbtn}
            onClick={() => {
              dispatch(ActivetoCheckut());
            }}
          >
            Please Login First
          </Link>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default CartBill;
