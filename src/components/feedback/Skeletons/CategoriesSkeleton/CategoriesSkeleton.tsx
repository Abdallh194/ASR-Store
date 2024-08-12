import { Col, Row } from "react-bootstrap";
import ContentLoader from "react-content-loader";

const CategoriesSkeleton = () => {
  const SkeletonLoop = Array(6)
    .fill(0)
    .map((_, idx) => (
      <Col key={idx} xs={6} md={4} lg="2">
        <ContentLoader
          speed={2}
          width={287}
          height={156}
          viewBox="0 0 287 156"
          backgroundColor="#e6e6e669"
          foregroundColor="#ffffff"
        >
          <rect x="163" y="84" rx="3" ry="3" width="117" height="12" />
          <circle cx="80" cy="80" r="72" />
        </ContentLoader>
      </Col>
    ));
  return <Row>{SkeletonLoop}</Row>;
};

export default CategoriesSkeleton;
