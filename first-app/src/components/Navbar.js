import React, { useContext } from 'react';
import styles from "./Navbar.module.css";

//Link
import { Link } from "react-router-dom";

//Icon
import iconCart from "./icons/cart3.svg";
import iconMenu from "./icons/list-ul.svg";
import iconPerson from "./icons/person-circle.svg";
//Context
import { CartContext } from '../context/CartContextProvider';


const Navbar = () => {
    const {state} = useContext(CartContext)
    return (
        <div className={styles.header}>
            <div className={styles.navbar}>
                <ul className={styles.listNavbar}>
                    <li><Link to="/">Main Shoes</Link></li>
                    <li><Link to="/">Man</Link></li>
                    <li><Link to="/">Women</Link></li>
                    <li><Link to="/">Contact us</Link></li>
                </ul>
                <Link to="/"><img src={iconMenu} alt="menu" className={styles.hamburgerMenu} /></Link>
            </div>
            <div className={styles.icon}>
                <Link to="/signup"><img src={iconPerson} alt="person" className={styles.img} /></Link>
                <div className={styles.iconCounter}>
                <Link to="/shopCart"><img src={iconCart} alt="cart" className={styles.img} /></Link>
                <span>{state.itemsCounter}</span>
                </div>

            </div>


        </div>
    );
};

export default Navbar;