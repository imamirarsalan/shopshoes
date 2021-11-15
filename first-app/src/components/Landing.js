import React from 'react';

//Components
import Banner from './Banner';
import Search from './Search';
import Store from './Store';
import Logo from './Logo';
import Order from './Order';

const Landing = () => {
    return (
        <div>
            <Banner />
            <Search />
            <Store />
            <Logo />  
            <Order />      
        </div>
    );
};

export default Landing;