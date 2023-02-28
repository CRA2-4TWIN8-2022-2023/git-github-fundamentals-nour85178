import React from 'react'
import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { getProductById } from "../service/api";

function ProductDetails() {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const {name} = useParams();
   // const product = products.find((product)=>product.name === name);

   useEffect(() => {
      getProductById(id).then((data) => {
      console.log(data)
      setProduct(data);
      //{product.id !== undefined? <Row>…</Row> : "Product does not exist" }

      });
      
      },[]);


  return (
    <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col md={4}>
            <Card.Img
              variant="top"
              src={require("../assets/images/" + product.img)}
              alt="Product Img"
              height="300"
            />
          </Col>
          <Col md={8}>
          <Row>
          <Col md={12}>
            <h1>{product.name}</h1>
            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <h5>Description</h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>
            {product.description}
            </p>
            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <h5>Price</h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>{product.price} DT</p>

            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <h5>Likes</h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>{product.like}</p>
            </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  )
}

export default ProductDetails