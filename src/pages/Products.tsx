import { useAppDispatch, useAppSelector } from "@Redux/hooks";
import { CleanUp, GetProductsThunck } from "@Redux/Products/ProductsSlice";
import { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShowProducts from "./ShowProducts";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.Products);
  useEffect(() => {
    const promise = dispatch(GetProductsThunck(params.prefix as string));

    return () => {
      dispatch(CleanUp());
      promise.abort();
    };
  }, [dispatch, params]);

  return (
    <div>
      <div>{params.prefix}</div>
      <ShowProducts AllItems={items} loading={loading} error={error} />
    </div>
  );
};

export default memo(Products);
