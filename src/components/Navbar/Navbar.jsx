import React, {useEffect, useState} from 'react';
import axios from "axios";

const Navbar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios('http://localhost:4444/categories')
            .then(({ data }) => setCategories(data))
    }, [])

    return (
        <nav className="navbar">
            <div className="container">
                <ul className="navbar__list">
                    {categories.map(item => (
                        <li key={item} className="navbar__item">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;