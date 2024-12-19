import Product from "@components/eCommerce/product/Product";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Products() {
  const params = useParams(); // Assuming useParams is a hook provided by react-router-dom
  const dispatch = useAppDispatch();
  const { records } = useAppSelector((state) => state.productsSlice);

  useEffect(() => {
    // Fetch products based on prefix
    let prefix: string;
    if (params.prefix && typeof params.prefix === "string") {
      prefix = params.prefix;
      dispatch(actGetProductPrefix(prefix));
    }
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params.prefix]);

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {records.map((record) => (
          <Col
            xs={3}
            key={record.id}
            className="d-flex justify-content-center my-3"
          >
            <Product {...record} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
