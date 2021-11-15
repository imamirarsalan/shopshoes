import React, { useState,createContext} from 'react';
//styles
// import styles from "./Product.module.css"
//image
import shoes1 from  "../image/shoes1.jpg";
import shoes2 from  "../image/shoes2.jpg";
import shoes3 from  "../image/shoes3.jpg";
import shoes4 from  "../image/shoes4.jpg";
import shoes5 from  "../image/shoes5.jpg";
import shoes6 from  "../image/shoes6.jpg";
import shoes7 from  "../image/shoes7.jpg";
import shoes8 from  "../image/shoes8.jpg";
import shoes9 from  "../image/shoes9.jpg";
import shoes10 from  "../image/shoes10.jpg";
import shoes11 from  "../image/shoes11.jpg";
import shoes12 from  "../image/shoes12.jpg";

//Context
export const ProductContext = createContext();

const Products = ({children}) => {

    const [products] = useState([
        {id:1, img:shoes1, name : "Boot Black" , price: 290 ,  category:"Boot Women"},
        {id:2, img:shoes2, name : "Boot Black" , price: 310 , category:"Boot Women"},
        {id:3, img:shoes3, name : "Boot white" , price: 320, category:"Boot Women"},
        {id:4, img:shoes4, name : "Short Boot Black" , price: 290, category:"Boot Women"},
        {id:5, img:shoes5, name : "Boot Luxury" , price: 290, category:"Boot Women"},
        {id:6, img:shoes6, name : "Boot Black" , price: 349, category:"Boot Women"},
        {id:7, img:shoes7, name : "Short Boot" , price: 310, category:"Boot Man"},
        {id:8, img:shoes8, name : "Shoes High Heeled" , price: 259, category:"Shoes Women"},
        {id:9, img:shoes9, name : "Shoes High Heeled" , price: 359, category:"Shoes Women"},
        {id:10, img:shoes10, name : "Normal Shoes" , price: 169, category:"Shoes Man"},
        {id:11, img:shoes11, name : "Normal Shoes" , price: 215, category:"Shoes Man"},
        {id:12, img:shoes12, name : "Normal Shoes" , price: 215, category:"Shoes Man"},

    ])

   


    return (
        <div>
            <ProductContext.Provider value={products}>
                {children}

            </ProductContext.Provider>
            
        </div>
    );
};

export default Products;