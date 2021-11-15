import React, { useState, useEffect } from 'react';
import { validate } from './validate';
import { Link } from 'react-router-dom';
import { notify } from './toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//styles
import styles from "../signup/SignUp.module.css";

const SingUp = () => {

    const [data, setData] = useState({
        name: "",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false,
    });
    const [errors, setErrors] = useState({})
    const [touch, setTouch] =  useState({})


    useEffect(()=> {
        setErrors(validate(data, "signup"));

    }, [data, touch])



    const changeHandler = (event) => {
        setData({...data, [event.target.name] : event.target.value})
    }

    const focusHandler = (event) => {
        setTouch({...data, [event.target.name] : true})
    }

    const submitHandler = event => {
        event.preventDefault();

        if (!Object.keys(errors).length){
            notify("success", "You sign up successfully")

        } else {
            notify("error", "Invalid data!")
            setTouch({
                name : true,
                email : true,
                password : true,
                confirmPassword : true,
                isAccepted : true
            })
        }
    }
    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Login</h2>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input className={(errors.name && touch.name) ? styles.uncompleted : styles.formInput} type="email" name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.email && touch.email && <span>{errors.email}</span>}
                </div>
                
                <div className={styles.formField}>
                    <label>Password</label>
                    <input className={(errors.name && touch.name) ? styles.uncompleted : styles.formInput} type="password" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.password && touch.password && <span>{errors.password}</span>}
                </div>
                
                <div className={styles.formButtons}>
                    <Link to="/signup">Signup</Link>
                    <button type="submit">Login</button>

                </div>
                
            </form>
            <ToastContainer />
            
        </div>
    );
};

export default SingUp;