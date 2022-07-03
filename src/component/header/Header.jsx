import React, {useRef} from "react";
import "./header.css";
import { Container } from "react-bootstrap";
import CloseButton from "react-bootstrap/esm/CloseButton";
const navLinks = [
    {
        display : 'Esasy',
        url : '#slide'
    },
    {
        display : 'Hyzmatlar',
        url : '#choose'
    },
    {
        display : 'Restoranlar',
        url : '#resto'
    },
    {
        display : 'Kommentariýa',
        url : '#comment'
    },
    {
        display : 'Habarlaşmak',
        url : '#'
    },
]


const Header = () => {


    const menuRef = useRef();
    const menuToggle =() =>{
        menuRef.current.classList.toggle('active_menu')
    } 
    return (
        <header className="head">
            <Container>
                <div className="navigation">
                    <div className="logo">
                        <h2 className="d-flex align-items-center gap-1">
                            <span><i className="ri-restaurant-2-line"></i></span>{" "} Resto
                        </h2>
                    </div>

                    <div className="nav_menu" ref={menuRef}>
                        <div className="nav_list_wrapper  d-flex align-items-center justify-content-between gap-5">
                            <div className="mobile_menu">
                                <span><CloseButton onClick={menuToggle} variant="white" /></span>
                                
                            </div>
                            <ul className="nav_list">
                                {navLinks.map((item, index) => (
                                    <li className="nav_item" key={index}>
                                        <a href={item.url} onClick={menuToggle}>{item.display}</a>
                                    </li>
                                    ))
                                }
                            </ul>

                            <div className="menu_right">
                                <div className="custom_search">
                                    <input type="text" placeholder="Gözle..." />
                                    <span><i className="ri-search-line"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className="cart_icon">
                            <i className="ri-admin-line" />
                            {/* <span className="badge">2</span> */}
                        </span>
                    </div>

                    
                    <div className="mobile_menu">
                        <span><i className="ri-menu-line" onClick={menuToggle}></i></span>
                    </div>
                </div>
            </Container>
        </header>
    )
};

export default Header;