import React from 'react';

import Navbar from '../../components/Navbar/Navbar'
import Menu from '../../components/Menu/Menu'
import Info from '../../components/Info/Info';
import Contact from '../../components/Contact/Contact';

const Home = () => {
    return (
        <main>
            <Navbar/>
            <Menu category="закуски"/>
            <Menu category="первые блюда"/>
            <Menu category="мангал"/>
            <Contact/>
            <Info/>
        </main>
    );
};

export default Home;