import React, {useState, useEffect} from "react";
import { Container, Col, Row } from "reactstrap";
import './menu.css';
import ProductCard from "../productCard/productCard";
import { fastFoodProducts, coffeeProducts, dessertProducts, pizzaProducts, riceProducts, ashgabatProducts } from "../../assets/fake_data/products";

const Menu =() => {

const [filter, setFilter] = useState('RICE-MENU')
const [products, setProducts] = useState(riceProducts)

useEffect(()=>{
    if(filter==='RICE-MENU'){
        setProducts(riceProducts)
    }
    if(filter==='FAST_FOOD'){
        setProducts(fastFoodProducts)
    }
    if(filter==='PIZZA'){
        setProducts(pizzaProducts)
    }
    if(filter==='DESSERT'){
        setProducts(dessertProducts)
    }
    if(filter==='COFFEE'){
        setProducts(coffeeProducts)
    }
    if(filter==='ASHGABAT'){
        setProducts(ashgabatProducts)
    }
    
}, [filter])
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="text-center mb-5">
                        <h3 className="menu_title">Restoranlar</h3>
                    </Col>
                    <Col lg="12" md="12" sm="12"  className="text-center mb-5">
                        <button className={`filter-btn ${filter==='ASHGABAT' ? 'active_btn' : ''}`} onClick={()=> setFilter('ASHGABAT')}>Aşgabat</button>
                        <button id="button" className={`filter-btn ${filter==='FAST_FOOD' ? 'active_btn' : ''}`} onClick={()=> setFilter('FAST_FOOD')}>Ahal</button>
                        <button className={`filter-btn ${filter==='RICE-MENU' ? 'active_btn' : ''}`} onClick={()=> setFilter('RICE-MENU')}>Daşoguz</button>
                        <button className={`filter-btn ${filter==='PIZZA' ? 'active_btn' : ''}`} onClick={()=> setFilter('PIZZA')}>Lebap</button>
                        <button className={`filter-btn ${filter==='DESSERT' ? 'active_btn' : ''}`} onClick={()=> setFilter('DESSERT')}>Balkan</button>
                        <button className={`filter-btn ${filter==='COFFEE' ? 'active_btn' : ''}`} onClick={()=> setFilter('COFFEE')}>Mary</button>
                    </Col>

                    {
                        products.map((item)=>(
                            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">{" "}<ProductCard item={item}></ProductCard></Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Menu;