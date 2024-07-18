import React from 'react';
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';

import location from '../../assets/Location.png';
import search from '../../assets/Search.png';
import call from '../../assets/Calling.png';

const Header = () => {

    const {t, i18n} = useTranslation();

    const changesLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
			<header className="header">
				<div className="container">
					<div className="header__content">
						<Link to="/">
							<h1 className="header__title">LOGOS</h1>
						</Link>
						<label className="header__search">
							<div className="header__search-left">
								<img
									className="header__search-location"
									src={location}
									alt=""
								/>
								<input type="text" placeholder={t('header.search')} />
							</div>
							<img className="header__search-icon" src={search} alt="" />
						</label>
						<div className="header__contact">
							<div className="header__contact-icon">
								<img src={call} alt="" />
							</div>
							<div className="header__contact-text">
								<span>{t('header.contact')}:</span>
								<a href="">+7 (917) 510-57-59</a>
							</div>
						</div>
						<div className="header__btns">
							<button
								className={`header__btn ${
									i18n.language === "en" && "header__btn-active"
								}`}
                                onClick={() => changesLanguage('en')}
							>
								EN
							</button>
							<button
								className={`header__btn ${
									i18n.language === "ru" && "header__btn-active"
								}`}
                                onClick={() => changesLanguage('ru')}
							>
								RU
							</button>
						</div>
						<Link to="/basket">
							<button className="basket">
								<div className="basket-text">{t('header.basket')}</div>
								<div className="basket-count">4</div>
							</button>
						</Link>
					</div>
				</div>
			</header>
		);
};

export default Header;