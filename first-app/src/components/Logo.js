import React from 'react';

//styles 
import styles from "./Logo.module.css";
//image
import nikeLogo from "./img/nike-logo.jpg"
import reebokLogo from "./img/reebok-logo.jpg"
import adidasLogo from "./img/addidas-logo.png"


const Logo = () => {
    return (
        <div className={styles.container}>
            <p>Logo <span>Shop</span> Shoes</p>
            <div className={styles.logo}>
                <img src={nikeLogo} alt="nike" />
                <img src={reebokLogo} alt="reebok" />
                <img src={adidasLogo} alt="adidas" />
            </div>
            
        </div>
    );
};

export default Logo;