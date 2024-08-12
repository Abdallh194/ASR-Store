import { useAppDispatch, useAppSelector } from "@Redux/hooks";
import { GetCategoriesThunk } from "@Redux/Categories/CategoriesSlice";
import { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@styles/Asset/Global.module.css";
import LoadingComp from "@components/feedback/LoadingComp";
import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";

const { Categoris, CategorisCard, LinkStyle, title } = styles;
const Categories = () => {
  const dispatch = useAppDispatch();
  const { recorord, loading, error } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
    if (!recorord.length) {
      dispatch(GetCategoriesThunk());
    }
  }, [dispatch, recorord]);

  return (
    <LoadingComp status={loading} error={error}>
      <div className={Categoris}>
        <Container fluid>
          <Row>
            {recorord.length > 0 ? (
              recorord.map((e) => {
                return (
                  <Col md={4} lg="2" className={CategorisCard} key={e.id}>
                    <Link
                      to={`/categories/products/${e.prefix}`}
                      key={e.id}
                      className={LinkStyle}
                    >
                      <img
                        src={e.image}
                        alt={e.title}
                        width={100}
                        height={80}
                        className="img-fluid"
                      />
                      <div className={title}>{e.title}</div>
                    </Link>
                  </Col>
                );
              })
            ) : (
              <LottieHandler type="empty" message="There Is No Categoreis" />
            )}
          </Row>
        </Container>
      </div>
    </LoadingComp>
  );
};

export default memo(Categories);
