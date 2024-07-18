import React from 'react';
import {Route, Routes} from "react-router-dom";
import './i18n'

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Basket from "./pages/Basket/Basket";
import Delivery from './pages/Delivery/Delivery';
import Sale from './pages/Sale/Sale';
import Footer from './components/Footer/Footer';
import ProductInfo from './pages/ProductInfo/ProductInfo';


const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/delivery" element={<Delivery/>}/>
                <Route path="/sale" element={<Sale/>}/>
                <Route path="/product/:id" element={<ProductInfo/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default App;