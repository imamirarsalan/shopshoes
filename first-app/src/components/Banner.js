import React from 'react';

//styles 
import styles from "./Banner.module.css";
//imgBanner
import banner from "../image/banner.jpg"

const Banner = () => {
    return (
       
        <div className={styles.banner}>
            <img src={banner} alt="banner"  />
            <div className={styles.container}>
                <button>Modern Shoes</button>
            </div>
                
        </div>

        
    );
};

export default Banner;