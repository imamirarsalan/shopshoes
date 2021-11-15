import React from 'react';

//styles
import styles from "./Order.module.css";

const Order = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <p>Stop thinking, just </p>
                <p>order a new pairs of</p>
                <p>Ramones</p>
            </div>
            <div className={styles.buttonContainer}>
                <button>Order now</button>
            </div>
            
        </div>
    );
};

export default Order;