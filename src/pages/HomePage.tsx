import { useAppDispatch, useAppSelector } from "@Redux/hooks";
import { GetAllProductsThunck } from "@Redux/Products/ProductsSlice";
import { memo, useEffect } from "react";
//styles
import { Col, Container, Row } from "react-bootstrap";
import styles from "@styles/Asset/Global.module.css";
const {
  HomePageSytyles,
  InfoCard,
  ImageCard,
  topHead,
  MainHead,
  BtmHead,
  desc,
  read,
  img1,
  img2,
  start,
} = styles;
import { motion } from "framer-motion";
import ShowProducts from "./ShowProducts";
import Categories from "./Categories";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { AllItems } = useAppSelector((state) => state.Products);
  const { loading, error } = useAppSelector((state) => state.Products);

  useEffect(() => {
    dispatch(GetAllProductsThunck());
  }, [dispatch]);

  return (
    <>
      <div className={HomePageSytyles}>
        <Container style={{ maxWidth: "1600px" }}>
          <Row>
            <Col xs={12} md={12} lg={6} className={InfoCard}>
              <div className={topHead}>YOU CAN NOT MISS IT</div>
              <div className={MainHead}>
                <motion.span
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  Black Friday
                </motion.span>
              </div>
              <div className={BtmHead}>UP TO 50% OFF</div>
              <div className={desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates repellendus minus alias, dolore pariatur sunt
                deserunt
              </div>
              <div className="btns d-flex">
                <div className={read}>
                  <span>Read More </span>
                </div>
                <div className={start}>
                  <span>Start Shopping</span>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={6} className={ImageCard}>
              <div className={img1}>
                <motion.img
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  src="/home_01.png"
                  alt="home_01"
                  width={400}
                  height={500}
                  className="img-fluid"
                />
              </div>
              <div className={img2}>
                <motion.img
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  src="/home_02.png"
                  alt="home_02"
                  width={450}
                  height={500}
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Categories />
      <ShowProducts AllItems={AllItems} loading={loading} error={error} />
    </>
  );
};

export default memo(HomePage);
