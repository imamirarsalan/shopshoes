import React, { useState } from 'react';
//Styles 
import styles from "./Search.module.css";

const Search = () => {
    const [text, setText] = useState("");
    
    const changeHandler = event => {    
        setText(event.target.value);
    }
    return (
        <div className={styles.container}>
             <p>Search <span>Product</span></p>
            <div className={styles.search}>
                <input type="text" placeholder="Search..." value={text} onChange={changeHandler} />
            </div>

            
            
        </div>
    );
};

export default Search;