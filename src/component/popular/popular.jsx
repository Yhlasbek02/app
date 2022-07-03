import React from "react";

import { Container, Row, Col } from "reactstrap";
import { popularMenuFood } from "../../assets/fake_data/products";
import ProductCard from "../productCard/productCard";

const PopularMenu =() => {
    return (
        <section className="pt-0" id="resto">
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        <h2 className="popular_menu-title">Has meşhur restoranlar</h2>
                    </Col>

                    {
                        popularMenuFood.map(item=>(
                            <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                                <ProductCard item={item}></ProductCard>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default PopularMenu;