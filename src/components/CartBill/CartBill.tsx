import { Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
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
};
const CartBill = ({ CartItem }: TItem) => {
  const BiilLoopItems = CartItem.map((e) => (
    <div key={e.id} className="billHeaders mt-2">
      <div>{e.title}</div>
      <div>${e.price}</div>
    </div>
  ));
  const TotalBillPrice = () => {
    let total = 0;
    CartItem.map((e) => (total += e.price * e.Quantity));
    return total;
  };
  return (
    <>
      <Form>
        <FormControl type="text" placeholder="Coupon Code" />
        <Button className="btn">Confirm</Button>
      </Form>
      <div className="billHeaders mt-3">
        <div>Product Name</div>
        <div>Price</div>
      </div>
      <hr />
      {BiilLoopItems}
      <hr />
      <div className="billHeaders mt-3">
        <div>Discount</div>
        <div>$0 </div>
      </div>
      <hr />
      <div className="billHeaders mt-3">
        <div>Total</div>
        <div>${TotalBillPrice()} </div>
      </div>
      <Link to="">Proceced To CheckOut</Link>
    </>
  );
};

export default CartBill;
