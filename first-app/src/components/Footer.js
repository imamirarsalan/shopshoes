import React, { useState } from 'react';

//styles
import styles from "./Footer.module.css";

const Footer = () => {

    const [email, setEmail] = useState("")

    const emailHandler = event => {
        setEmail(event.target.value);
    }
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p>Rick Ownes</p>
            </div>
            <div className={styles.infoFooter}>
                <div>
                    <h3>Shop</h3>
                    <p>About us</p>
                    <p>Fashion</p>
                    <p>Fit Guide</p>
                    <p>Our stores</p>
                    <p>Collaborations</p>
                </div>
                <div>
                    <h3>Help</h3>
                    <p>Contact us</p>
                    <p>Delivery</p>
                    <p>Return policy</p>
                    <p>Terms of service</p>
                    <p>Privacy policy</p>
                </div>
                <div>
                    <h3>Social</h3>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Telegram</p>
                    <p>Linkedin</p>
                </div>
                <div>
                    <h3>Newsletter</h3>
                    <p>Sign up for our newsletter and receive</p>
                    <p>invintation to ur museum in Venice</p>
                    <div className={styles.input}>
                        <input type="email" placeholder="Your Email" value={email} onChange={emailHandler}   /> 
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;