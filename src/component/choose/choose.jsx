import React from "react";
import { Container, Col, Row } from "reactstrap";
import "./choose.css"
import pasta from "../../assets/images/caption.jpg"

const Choose = () => {
    return (
        <section id="choose">
            <Container>
                <Row>
                    <Col lg="6" md="6" >
                        <img src={pasta} alt="" className="w-100"/>
                    </Col>
                    
                    <Col lg="6" md="6">
                        <div className="choose_content">
                            <h2>Hyzmatlar ulgamy bilen tanyş bol</h2>
                            <p>Resto websahypamyz Size aşakdaky hyzmatlary hödürleýär.</p>
                        </div>

                        <div className="features mt-4">
                            <div className="feature1 d-flex align-items-center gap-5">
                                <div className="single_feature">
                                    <span>
                                        <i className="ri-truck-line"></i>        
                                    </span>
                                    <h6>Eltip bermek</h6>
                                </div>
                            

                                <div className="single_feature">
                                    <span className="feature_icon-two">
                                        <i className="ri-money-dollar-circle-line"></i>        
                                    </span>
                                    <h6>Kart arkaly töleg</h6>
                                </div>
                                
                            
                            
                                <div className="single_feature">
                                    <span className="feature_icon-3">
                                        <i className="ri-secure-payment-line"></i>        
                                    </span>
                                    <h6>Öňünden stol sargamak</h6>
                                </div>

                                <div className="single_feature">
                                    <span className="feature_icon-4">
                                        <i className="ri-24-hours-line"></i>        
                                    </span>
                                    <h6>Hiç hili dynç alyşsyz</h6>
                                </div>
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Choose;