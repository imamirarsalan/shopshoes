import React from 'react';
import { Link } from 'react-router-dom';

//styles 
import styles from "./Product.module.css";


const Product = ({data}) => {
    
    return (
        <div className={styles.container}>
             
                <img src={data.img} alt="modelShoes" />
                <div className={styles.buttonProduct}>
                    <Link to={`/products/${data.id}`}><button>Order More</button></Link>
                </div>

                

           
            
        </div>
    );
};

export default Product;