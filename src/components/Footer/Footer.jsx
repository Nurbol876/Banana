import React from 'react';
import {Link} from "react-router-dom";
import arrow from '../../assets/arrow.svg'

const Footer = () => {

    const arr = ['О ресторане','Условия доставки', 'Возврат товара', 'Акции'];

    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__content">
                    <div className="footer__arrow">
                        <a href="#">
                            <img src={arrow} alt="arrow"/>
                        </a>
                    </div>
                    <div className="footer__info">
                        <h2 className="logo">
                            LOGOS
                        </h2>
                        <p className="footer__desk">
                            © ООО СК «АПШЕРОН» <br/>
                            Все права защищены. 2010-2020
                        </p>
                        <p className="footer__subtitle">
                            Пользовательское соглашение
                        </p>
                        <p className="footer__subtitle">
                            Карта сайта
                        </p>
                        <p className="footer__subtitle">
                            Политика конфиденциальности
                        </p>
                    </div>
                    <ul className="footer__list">
                        {
                            arr.map((item) => (
                                <ul key={item} className="header__item">
                                    <Link to={item}>
                                        {item}
                                    </Link>
                                </ul>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;