import React from 'react';
import leftarrow from '../../assets/leftarrow.svg'

const Infor = () => {

    const info = ["Белки", "Жиры", "Углеводы", "Ккал"]
    const infonum = [17.23, 7.63, 22.35, 234]

    return (
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
                        src='https://navat.kg/dostavka/files/products/plov-chajhanskij.800x600w.jpg'
                        alt='плов'/>
                    <div className="infor__text">
                        <h3 className="card__title">Плов чайханский</h3>
                        <p className="card__subtitle">
                            Рис лазер, мясо ягненка и теленка, сухофрукты
                        </p>
                        <p className="card__weight">Вес: 3300 г</p>
                        <div className="infor__text-content">
                            <button className="basket">
                                <div className="basket-text"> Корзина</div>
                                <div className="">

                                </div>
                            </button>
                            <p className="card__price">2600 ₽</p>
                        </div>
                            <ul className="infor__list">
                                {/*{*/}
                                {/*    info.map(i => (*/}
                                {/*        <li className="infor__item">*/}
                                {/*            <a href="#" className="infor__link-key">*/}
                                {/*                {i}*/}
                                {/*            </a>*/}
                                {/*        </li>*/}
                                {/*    ))*/}
                                {/*}*/}
                            </ul>
                        <ul className="infor__list">
                            {/*{*/}
                            {/*    infonum.map(i => (*/}
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
    );
};

export default Infor;