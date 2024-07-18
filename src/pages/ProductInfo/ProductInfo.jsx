import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import Navbar from "../../components/Navbar/Navbar";
import Menu from "../../components/Menu/Menu";
import Contact from "../../components/Contact/Contact";

import leftarrow from "../../assets/leftarrow.svg";
import basketImg from "../../assets/Buy.png";

const ProductInfo = () => {
	let param = useParams();
	const [product, setProduct] = useState({});

	useEffect(() => {
		axios(`http://localhost:4444/products/${param.id}`).then(({ data }) =>
			setProduct(data)
		);
	}, [param.id]);

	const info = ["Белки", "Жиры", "Углеводы", "Ккал"];

	return (
		<main>
			<Navbar />
			<section className="product">
				<div className="container">
					<div className="product__link">
						<Link to={-1}>
							<div className="product__link-image">
								<img
									src={leftarrow}
									alt="leftarrow"
									className="product__icon"
								/>
							</div>
							<h6 className="product__desk">Вернуться назад</h6>
						</Link>
					</div>
					<div className="product__content">
						<img src={product.images} alt={product.title} />
						<div className="product__text">
							<h3 className="card__title">{product.title}</h3>
							<p className="card__subtitle">{product.subtitle}</p>
							<p className="card__weight">Вес: {product.weight} г</p>
							<div className="product__text-content">
								<button className="basket">
									<div className="basket-text">Корзина</div>
									<div className="">
										<img src={basketImg} alt="" />
									</div>
								</button>
								<p className="card__price">{product.price} ₽</p>
							</div>
							<div className="border">
								<ul className="product__list">
									{info.map((i) => (
										<li key={i} className="product__item product__link-key">{i}</li>
									))}
								</ul>
							</div>
							<ul className="product__list">
								{product.info?.map((i) => (
									<li key={i} className="product__item product__link-key">
										{i}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
			<Menu category={product.category} />
			<Contact />
		</main>
	);
};

export default ProductInfo;
