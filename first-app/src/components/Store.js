import React, {useContext} from 'react';
//styles
import styles from "./Store.module.css";
//Context
import { ProductContext } from '../context/Products';
//component
import Product from './shared/Product';
const Store = () => {
    const products = useContext(ProductContext);
    return (
        <div className={styles.container}>
            {products.map(item => <Product key={item.id} data={item} />)}
            
        </div>
    );
};

export default Store;