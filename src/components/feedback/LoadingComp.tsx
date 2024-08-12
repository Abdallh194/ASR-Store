import LottieHandler from "./LottieHandler/LottieHandler";
import ProductsSkeleton from "./ProductsSkeleton/ProductsSkeleton";
import CategoriesSkeleton from "./Skeletons/CategoriesSkeleton/CategoriesSkeleton";

type TloadingProps = {
  status: "idel" | "pending" | "succeeded" | "failed";
  error: string | null;
  children: React.ReactNode;
  type?: "products" | "categories";
};

const SkeltonsType = {
  products: ProductsSkeleton,
  categories: CategoriesSkeleton,
};
const LoadingComp = ({
  status,
  children,
  type = "categories",
}: TloadingProps) => {
  const Components = SkeltonsType[type];
  if (status === "pending") {
    return <Components />;
  }
  if (status === "failed") {
    return (
      <div>
        <LottieHandler type="error" message="An unexpected error occurred." />
      </div>
    );
  }

  return <div>{children}</div>;
};

export default LoadingComp;
