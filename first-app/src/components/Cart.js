import React, { useContext } from 'react';
//styles
import styles from "./Cart.module.css";
//Context
import { CartContext } from '../context/CartContextProvider';
//icon 
import trashIcon from "./icons/trash.svg";
const Cart = ({data}) => {

    const { dispatch } = useContext(CartContext);
    return (
        <div className={styles.container}>
            <img className={styles.productImg} src={data.img} alt="productImg" />
            <div className={styles.infoProduct}>
                <p>{data.name}</p>
                <p>{data.price} $</p>
            </div>
            <div>
                <p className={styles.quantity}>{data.quantity}</p>
            </div>
            <div className={styles.buttonContainer}>

                {
                    data.quantity > 1 ?
                    <button onClick={() => dispatch({type: "DECREASE", payload: data})}>-</button>:
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: data})}><img src={trashIcon} alt="trash" /></button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: data})}>+</button>

            </div>


            
        </div>
    );
};

export default Cart;