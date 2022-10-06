import "../../styles/mystyles.css";
import { Col, Layout, Row, Space, Spin } from "antd";
import { Card } from "antd";
import { Img, StyledDiv } from "../../styles/StyledComponents";
import { useEffect, useState } from "react";
import axios from "axios";
import appAxios from "../../services/base-api";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

export const Products = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [post, setPost] = useState([]);
  useEffect(() => {
    appAxios.get("https://fakestoreapi.com/products").then((response) => {
      setLoading(false);
      setPost(response.data);
    });
  }, []);

  const onClickProduct = (product) => {
    // console.log(product);
    navigate("/products/detail", { state: product });
  };

  if (isLoading) {
    return (
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Spin tip="Loading" />
      </div>
    );
  }
  return (
    <>
      <Row>
        <Col>
          <h1>Our Products</h1>
        </Col>
      </Row>
      <Space size={15}>
        <Row gutter={16} justify="start">
          {post.map((product, index) => {
            return (
              <div className="zoom" key={index}>
                <StyledDiv>
                  <Col xs={8} sm={16} md={24} lg={32} span={8}>
                    <Card
                      onClick={() => onClickProduct(product)}
                      hoverable
                      style={{
                        width: 240,
                      }}
                      cover={
                        <div>
                          <Img
                            alt={product.title}
                            src={product.image}
                            // max-width={250}
                            // max-height={250}
                            style={{
                              maxWidth: 250,
                              maxHeight: 300,
                            }}
                          />
                        </div>
                      }
                      key={index}
                    >
                      <Meta
                        title={product.title}
                        // {product.description > 100 ? `${}`}
                        description={
                          product.description.length > 100
                            ? `${product.description.substring(0, 100)}...`
                            : product.description
                        }
                      />
                    </Card>
                  </Col>
                </StyledDiv>
              </div>
            );
          })}
        </Row>
      </Space>
    </>
  );
};

<div className="rounded"></div>;
