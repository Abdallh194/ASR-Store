import { useAppSelector } from "@Redux/hooks";
import { memo, useEffect, useState } from "react";
import styles from "./Styles/Basket.module.css";
//icons
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
const { cartBasket, ChangingCartQuantity } = styles;

const Basket = () => {
  //redux
  const { CartItem } = useAppSelector((s) => s.Cart);

  //animation;
  const [isAnimate, setIsAnimate] = useState(false);
  useEffect(() => {
    if (!CartItem.length) {
      return;
    }
    setIsAnimate(true);
    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [CartItem]);
  const QuantitClass = `${cartBasket} ${isAnimate ? ChangingCartQuantity : ""}`;

  console.log("Basket Loading");
  return (
    <>
      <Link to="/cart" className={QuantitClass} cart-length={CartItem.length}>
        <TiShoppingCart />
      </Link>
    </>
  );
};

export default memo(Basket);
