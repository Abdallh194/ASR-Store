import { useAppSelector } from "@Redux/hooks";
import ShowProducts from "./ShowProducts";

const FavItems = () => {
  const { FavItem, loading, error } = useAppSelector((state) => state.Cart);

  return (
    <div className="FavItem">
      <ShowProducts AllItems={FavItem} loading={loading} error={error} />
    </div>
  );
};

export default FavItems;
