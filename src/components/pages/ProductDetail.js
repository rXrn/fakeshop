import { Col, Row } from "antd";
import { useLocation } from "react-router-dom";

export const ProductDetail = () => {
  const location = useLocation();
  // console.log(location);
  return (
    <>
      <Row>
        <Col>
          <img
            alt={location.state.title}
            src={location.state.image}
            style={{
              width: 250,
              height: 250,
            }}
          ></img>
          <span>{location.state.title}</span>
        </Col>
      </Row>
    </>
  );
};
