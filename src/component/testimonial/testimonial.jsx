import React from "react";
import { Container, Row, Col } from "reactstrap";
import './testimonial.css'

import testImage from "../../assets/images/kafe.jpg"
import Slider from 'react-slick'

const Testimonials = () => {

    const settings = {
        infinite : true,
        speed : 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed : 3000
    }
    return(
        <section id="comment">
            <Container>
                <Row>
                    <Col lg="8" sm="12" md="12" className="m-auto">
                        <div className="slider_wrapper d-flex align-items-center gap-5">
                            <div className="slider_content w-50">
                            <h2 className="mb-4 ps-3">Müşderilerden gelýän habarlar</h2>
                            <Slider {...settings}>
                                <div>
                                    <div className="single_testimonial">
                                        <p className="review_content">
                                            Örän gowy websahypa eken. Diňe öňe
                                        </p>

                                        <h6>Aman Amanow</h6>
                                    </div>
                                </div>
                                <div>
                                    <div className="single_testimonial">
                                        <p className="review_content">
                                            Gaty gowy websahypa, işimizi ýeňilleşdirdi
                                        </p>

                                        <h6>Maral Nyýazowa</h6>
                                    </div>
                                </div>
                            </Slider>
                            </div>
                            <div className="slider_img">
                                <img src={testImage} alt="" className="w-100" />
                            </div>
                        </div>      
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials;