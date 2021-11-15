import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
//styles
import styles from "../shared/ProductDetails.module.css";
//Context
import { ProductContext } from '../../context/Products';
import { CartContext } from '../../context/CartContextProvider';

// icon 
import trashIcon from "../icons/trash.svg"

//function
import { isInCart, quantityCount } from '../function';

const ProductDetails = (props) => {

    const { state ,dispatch } = useContext(CartContext);

    const id = props.match.params.id;
    const data = useContext(ProductContext);
    const product = data[id -1]
    const {img, name, price, category} = product

    return (
        <div className={styles.container}>
            <img src={img} alt="product" />
            <div className={styles.infoProduct}>
                <p>Name: {name}</p>
                <p>Price: {price} $</p>
                <p>Category: {category}</p>
                <div className={styles.buttonContainer}>
                    {quantityCount(state, product.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: product})}>-</button>}
                    {quantityCount(state, product.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "REMOVE_ITEM", payload:product})}><img src={trashIcon} alt="trash" /></button>}
                    {quantityCount(state, product.id) > 0 && <span className={styles.counter} >{quantityCount(state, product.id)}</span>}
                    {
                        isInCart(state, product.id)?
                        <button className={styles.smallButton} onClick={() => dispatch({type:"INCREASE", payload: product})}>+</button>:
                        <button onClick={() => dispatch({type:"ADD_ITEM", payload: product})}>Add to Cart</button>
                        
                    }
                </div>
                <div className={styles.link}>
                    <Link to="/">Back to Shop</Link>
                </div>
            </div>
            
        </div>
    );
};

export default ProductDetails;