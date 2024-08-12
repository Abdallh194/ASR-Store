import { Col, Row } from "react-bootstrap";
import ContentLoader from "react-content-loader";

const ProductsSkeleton = () => {
  const ProductsLoopSkeleton = Array(20)
    .fill(0)
    .map((_, idx) => (
      <Col md={6} lg={3} key={idx}>
        <ContentLoader
          speed={2}
          width={320}
          height={552}
          viewBox="0 0 320 552"
          backgroundColor="#e6e6e669"
          foregroundColor="#ffffff"
        >
          <rect x="175" y="9" rx="3" ry="3" width="117" height="30" />
          <circle cx="156" cy="223" r="146" />
          <circle cx="25" cy="19" r="15" />
          <rect x="17" y="388" rx="0" ry="0" width="284" height="27" />
          <rect x="32" y="435" rx="0" ry="0" width="248" height="17" />
          <rect x="107" y="438" rx="0" ry="0" width="29" height="0" />
          <rect x="165" y="495" rx="0" ry="0" width="126" height="49" />
          <rect x="24" y="514" rx="0" ry="0" width="100" height="12" />
          <rect x="230" y="540" rx="0" ry="0" width="0" height="1" />
        </ContentLoader>
      </Col>
    ));
  return <Row>{ProductsLoopSkeleton}</Row>;
};

export default ProductsSkeleton;
