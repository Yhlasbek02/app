import React, {Fragment} from "react";

import Header from "../component/header/Header";
import HeroSlider from "../component/slider/slider";
import PopularMenu from "../component/popular/popular";
import Choose from "../component/choose/choose";
import Menu from "../component/menu/menu";
import Testimonials from "../component/testimonial/testimonial";



const Home = () => {
    return (
        <Fragment>
            <Header />
            <HeroSlider />
            <Choose />
            <PopularMenu />
            <Menu />
            <Testimonials />
        </Fragment>
    )
}

export default Home;