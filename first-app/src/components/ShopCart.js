import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import styles from "./ShopCart.module.css"; 
//Context
import { CartContext } from '../context/CartContextProvider';
//Component
import Cart from './Cart';

const ShopCart = () => {

    const { state, dispatch } = useContext(CartContext);
    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}

            </div>
            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                    <p><span>Total Items:</span> {state.itemsCounter} </p>
                    <p><span>Total Payments:</span> {state.total} $</p>
                    <div className={styles.buttonContainer}>
                        <button onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                        <button onClick={() => dispatch({type: "CHECKOUT"})}>Check Out</button>
                        
                    </div>
                </div>
            }
            {
                state.checkout && <div className={styles.complete}>
                    <p>Your Purchase Was Successful Thank You For Your Choice And Trust</p>
                    <Link to="/">shopping from store shop shoes</Link>

                </div>
            }
            {
                !state.checkout && state.itemsCounter === 0 && <div className={styles.complete}>
                    <p>All Products In Your Cart Have Been Removed And Your Cart Is Empty</p>
                    <Link to="/">shopping from store shop shoes</Link>

                </div>
            }
            
        </div>
    );
};

export default ShopCart;