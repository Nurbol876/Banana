import axios from "axios";
import React, {useEffect, useState} from 'react';
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Menu from "../components/Menu/Menu";
import Contact from "../components/Contact/Contact";
import leftarrow from "../assets/leftarrow.svg";

const ProductInfo = () => {
    const params = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        axios(`http://localhost:4444/products/${params.id}`)
            .then(({ data }) => setProduct(data))
    }, [])

    return (
        <main>
            <Navbar/>
            <section className='infor'>
                <div className="container">
                    <div className="infor__link">
                        <div className="infor__link-image">
                            <img src={leftarrow} alt="leftarrow" className="infor__icon"/>
                        </div>
                        <h6 className="infor__desk">
                            Вернуться назад
                        </h6>
                    </div>
                    <div className="infor__content">
                        <img
                            src={product.images}
                            alt='плов'/>
                        <div className="infor__text">
                            <h3 className="card__title">{product.title}</h3>
                            <p className="card__subtitle">
                                {product.subtitle}
                            </p>
                            <p className="card__weight">Вес: {product.weight} г</p>
                            <div className="infor__text-content">
                                <button className="basket">
                                    <div className="basket-text"> Корзина</div>
                                    <div className="">

                                    </div>
                                </button>
                                <p className="card__price">{product.price} ₽</p>
                            </div>
                            <ul className="infor__list">
                                {/*{*/}
                                {/*    info.map(i => (*/}
                                {/*        <li key={i} className="infor__item">*/}
                                {/*            <a href="#" className="infor__link-key">*/}
                                {/*                {i}*/}
                                {/*            </a>*/}
                                {/*        </li>*/}
                                {/*    ))*/}
                                {/*}*/}
                            </ul>
                            <ul className="infor__list">
                                {/*{*/}
                                {/*    product.info.map(i => (*/}
                                {/*        <li key={i} className="infor__item">*/}
                                {/*            <a href="#" className="infor__link-key">*/}
                                {/*                {i}*/}
                                {/*            </a>*/}
                                {/*        </li>*/}
                                {/*    ))*/}
                                {/*}*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Menu category={"ЗАКУСКИ"}/>
            <Contact/>
        </main>
    );
};

export default ProductInfo;