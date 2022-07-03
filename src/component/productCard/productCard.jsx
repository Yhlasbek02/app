import React from "react";
import "./productcard.css"


const ProductCard = (props) => {

const {title, imgUrl} = props.item
    return (
        <div className="single-product">
            <div className="product_image">
                <img src={imgUrl} alt="" className="w-100" />
            </div>

            <div className="product_content">
                <div className="rating text-center">
                    <span><i className="ri-star-s-fill"></i></span>
                    <span><i className="ri-star-s-fill"></i></span>
                    <span><i className="ri-star-s-fill"></i></span>
                    <span><i className="ri-star-s-fill"></i></span>
                    <span><i className="ri-star-s-fill"></i></span>
                </div>

                <h6>{title}</h6>
                <div className="d-flex align-items-center justify-content-between">
                    
                    <span className="shopping_icon"><i className="ri-eye-line"></i></span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;