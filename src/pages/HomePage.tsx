import styles from "@styles/Asset/HomePage.module.css";
import { Col, Container, Row } from "react-bootstrap";
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
// import { motion } from "framer-motion";
const HomePage = () => {
  return (
    <div className={HomePageSytyles}>
      <Container style={{ maxWidth: "1600px" }}>
        <Row>
          <Col xs={12} md={12} lg={6} className={InfoCard}>
            <div className={topHead}>YOU CAN NOT MISS IT</div>
            <div className={MainHead}>
              <span
              // initial={{ x: -30, opacity: 0 }}
              // whileInView={{ x: 0, opacity: 1 }}
              // transition={{ duration: 1.2 }}
              >
                Black Friday
              </span>
            </div>
            <div className={BtmHead}>UP TO 50% OFF</div>
            <div className={desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates repellendus minus alias, dolore pariatur sunt deserunt
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
              <img
                // initial={{ x: 30, opacity: 0 }}
                // whileInView={{ x: 0, opacity: 1 }}
                // transition={{ duration: 1.2 }}
                src="/home_01.png"
                alt="home_01"
                width={400}
                height={500}
                className="img-fluid"
              />
            </div>
            <div className={img2}>
              <img
                // initial={{ x: 30, opacity: 0 }}
                // whileInView={{ x: 0, opacity: 1 }}
                // transition={{ duration: 1.2 }}
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
  );
};

export default HomePage;
