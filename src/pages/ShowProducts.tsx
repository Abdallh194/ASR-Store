//icons
import { TiShoppingCart } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";

//mui
import { IconButton, Rating, Tooltip } from "@mui/material";

//styles
import {
  Col,
  Container,
  Form,
  FormControl,
  Row,
  Spinner,
} from "react-bootstrap";
import styles from "@styles/Asset/Global.module.css";
const {
  ShowItems,
  ProductCard,
  discount,
  imgcontainer,
  head,
  price,
  FavIcon,
  Button,
  buyBtn_Price,
  topMemu,
  row,
  form,
  searchBtn,
  formInput,
  basket,
  Haert,
} = styles;
import { AddItemToCard, AddItemToFavList } from "@Redux/Cart/CartSlice";
import { memo } from "react";

import Basket from "@components/feedback/Basket";
import { Link } from "react-router-dom";
import useProducts from "@hooks/useProducts";
import LoadingComp from "@components/feedback/LoadingComp";
import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";

type TItem = {
  AllItems: {
    id: string;
    images: string;
    title: string;
    price: number;
    cat_prefix: string;
    Quantity?: number;
    discount: string;
  }[];
  loading: "pending" | "succeeded" | "failed";
  error: string | null;
};
const ShowProducts = ({ AllItems, loading, error }: TItem) => {
  const { FavItem, dispatch, isDisabled, setisDisabled, CartItem } =
    useProducts();

  return (
    <LoadingComp status={loading} error={error} type="products">
      <div className={ShowItems}>
        <Container style={{ maxWidth: "1700px" }}>
          <div className={topMemu}>
            <div className={head}>Shop Our Products</div>
            <Form className={form}>
              <FormControl
                type="text"
                className={formInput}
                style={{ height: "55px" }}
                placeholder="Are you looking for a specific product?"
              />
              <div style={{ textDecoration: "none" }} className={searchBtn}>
                Search
              </div>
            </Form>
          </div>
          <Row className={row}>
            {AllItems.length > 0 ? (
              AllItems.map((e) => (
                <Col md={6} lg={3} key={e.id} className={ProductCard}>
                  <div className="d-flex justify-content-between">
                    <Tooltip title="Add to favourites">
                      <IconButton
                        onClick={() => {
                          dispatch(AddItemToFavList(e));
                        }}
                      >
                        <FaHeart className={FavIcon} />
                      </IconButton>
                    </Tooltip>
                    <div className={discount}>discount : {e.discount}</div>
                  </div>
                  <div className={imgcontainer}>
                    <img src={e.images} alt={e.title} className="img-fluid" />
                  </div>
                  <div className={head}>{e.title}</div>
                  <Rating
                    name="simple"
                    value={5}
                    style={{ direction: "ltr" }}
                  />

                  <div className={buyBtn_Price}>
                    <div className={price}>Price : {e.price} $</div>

                    <button
                      className={Button}
                      onClick={() => {
                        dispatch(AddItemToCard(e));
                        setisDisabled(true);
                      }}
                      disabled={isDisabled}
                    >
                      {isDisabled ? (
                        <>
                          <Spinner animation="border" size="sm" /> Loading ...
                        </>
                      ) : (
                        <>
                          Add to cart
                          <TiShoppingCart />
                        </>
                      )}
                    </button>
                  </div>
                </Col>
              ))
            ) : (
              <LottieHandler type="empty" message="There Is No Products" />
            )}
          </Row>
        </Container>
      </div>
      {CartItem.length > 0 && (
        <div className={basket}>
          <Basket />
        </div>
      )}

      {FavItem.length > 0 && (
        <Link to="/fav" className={Haert} cart-length={FavItem.length}>
          <FaHeart />
        </Link>
      )}
    </LoadingComp>
  );
};

export default memo(ShowProducts);
