import React from 'react';
import InfoCard from "./InfoCard";
import onion from "../../assets/onion.svg"
import chef from "../../assets/chef.svg"
import flash from "../../assets/flash.svg"


const Info = () => {
    return (
        <section className='info'>
            <div className="container">
                <div className="info__content">
                    <h3 className="info__title">
                        НАШЕ КАФЕ
                    </h3>
                    <p className="info__subtitle">
                        Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.
                    </p>
                    <button className="info__btn">
                        ПОСМОТРЕТЬ МЕНЮ
                    </button>
                    <div className="info__row">
                        <InfoCard img={onion} title='Свежайшие продукты'/>
                        <InfoCard img={flash} title='Быстрая доставка'/>
                        <InfoCard img={chef} title='Лучшие повора'/>
                        <InfoCard img={onion} title='Свежайшие продукты'/>
                    </div>
                    <div className="bg">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;