import React from 'react';
import { Route,Switch } from 'react-router-dom';
//Components
import Navbar from './components/Navbar';
import SingUp from './components/signup/SingUp';
import Landing from './components/Landing';
import Login from './components/signup/Login'
import ProductDetails from './components/shared/ProductDetails';
import Footer from './components/Footer';
import CartContextProvider from './context/CartContextProvider';
import ShopCart from './components/ShopCart';
//Context
import Products from './context/Products';


const App = () => {
    return (
        <CartContextProvider>
        <Products>
           <Navbar /> 
           <Switch>
               <Route path="/products/:id" component={ProductDetails} />
               <Route path="/shopCart" component={ShopCart} />
               <Route path="/signup" component={SingUp} />
               <Route path="/login" component={Login} />
               <Route path="/" component={Landing} />
           </Switch>
           <Footer />

       </Products>

      </CartContextProvider>
    );
};

export default App;