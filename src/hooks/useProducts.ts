import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@Redux/hooks";

const useProducts = () => {
  const { FavItem, CartItem } = useAppSelector((state) => state.Cart);
  const dispatch = useAppDispatch();
  const [isDisabled, setisDisabled] = useState(false);

  useEffect(() => {
    if (!isDisabled) {
      return;
    }
    setisDisabled(true);
    const debounce = setInterval(() => {
      setisDisabled(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [isDisabled]);
  return { FavItem, dispatch, isDisabled, setisDisabled, CartItem };
};

export default useProducts;
