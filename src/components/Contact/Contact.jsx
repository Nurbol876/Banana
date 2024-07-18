import React from 'react';
import mess from '../../assets/Message.svg'
import loc from '../../assets/Location.svg'
import wearehere from '../../assets/wearehere.svg'
import vk from '../../assets/vkontakte-logo.svg'
import vpb from '../../assets/video-play-button.svg'
import facebook from '../../assets/facebook.svg'
import insta from '../../assets/instagram.svg'

const Contact = () => {

    const images = [facebook, vk, vpb, insta]

    return (
        <section className='contact'>
            <div className="container">
                <div className="contact__content">
                    <div className="contact__content-top">
                        <h4 className="contact__title">
                            КОНТАКТЫ
                        </h4>
                    </div>
                    <div className="contact__content-center">
                        <div className='contact__content-center-item'>
                            <img src={loc} alt="icon" className="contact__icon"/>
                            <div className="contact__text">
                                <p className="contact__desk">
                                    Наш адрес:
                                </p>
                                <p className="contact__subtitle">
                                    МО, городской округ Красногорск, село Ильинкое,
                                    Экспериментальная улица, 10
                                </p>
                            </div>
                        </div>
                        <div className='contact__content-center-item'>
                            <img src={mess} alt="icon" className="contact__icon"/>
                            <div className="contact__text">
                                <p className="contact__desk">
                                    Наша почта:
                                </p>
                                <p className="contact__subtitle">
                                    auto.wash@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="contact__content-bottom">
                        <div className="contact__content-bottom-top">
                            <button className="contact__btn">
                                ЗАБРОНИРОВАТЬ СТОЛ
                            </button>
                            <div className="contact__content-bottom-text">
                                <h5 className="contact__title">
                                    +7 (917) 510-57-59
                                </h5>
                                <p className="contact__desk">
                                    Звоните или оставляйте заявку
                                </p>
                            </div>
                        </div>
                        <div className="contact__web">
                            <h5 className="contact__content-bottom-title">
                                Мы в соц сетях:
                            </h5>
                            <ul className="contact__list">
                                {
                                    images.map(i => (
                                        <li key={i} className="contact__item">
                                            <img src={i} alt="iconofweb" className="contact__icon"/>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <img src={wearehere} alt="wearehere" className="contact__location"/>
            </div>
        </section>
    );
};

export default Contact;