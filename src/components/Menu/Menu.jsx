import axios from "axios";
import React, { useEffect, useState } from "react";

import basketImg from "../../assets/Buy.png";
import { Link } from "react-router-dom";

const Menu = ({ category }) => {
    
	const [menu, setMenu] = useState([]);

	useEffect(() => {
		axios("http://localhost:4444/products").then(({ data }) => setMenu(data));
	}, []);

	return (
		<section className="menu">
			<div className="container">
				<h2 className="menu__title">{category}</h2>
			</div>
			<div className="menu__row">
				{menu
					.filter((el) => el.category?.toLowerCase() === category?.toLowerCase())
					.map((item) => (
						<div key={item.id} className="card">
							<div className="card__image">
								<Link to={`/product/${item.id}`}>
									<img src={item.images} alt={item.title} />
								</Link>
							</div>
							<div className="card__content">
								<div className="card__text">
									<div className="card__name">
										<h3 className="card__title">{item.title}</h3>
										<p className="card__weight">Вес: {item.weight} г</p>
									</div>
									<p className="card__subtitle">{item.subtitle}</p>
								</div>
								<div className="card__bottom">
									<p className="card__price">{item.price} ₽</p>
									<button className="basket">
										<div className="basket-text">Корзина</div>
										<div className="">
											<img src={basketImg} alt="" />
										</div>
									</button>
								</div>
							</div>
						</div>
					))}
			</div>
		</section>
	);
};

export default Menu;
