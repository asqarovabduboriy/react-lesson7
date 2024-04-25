import React, { useState, useEffect } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import axios from '../../Api/api';
import { FaPlus, FaMinus, FaStar } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import Loading from '../../Loading/Loading';

const Product = () => {
    const [data, setdata] = useState([]);
    const [laoading, setloading] = useState(false)

    useEffect(() => {
        setloading(true)
        axios
            .get('/product')
            .then(res => setdata(res.data.products))
            .catch(err => console.log(err))
            .finally(() => { setloading(false)})

    }, []);

    const incrementCount = (id) => {
        setdata(prevData =>
            prevData.map(item =>
                item.id === id ? { ...item, count: (item.count || 0) + 1 } : item
            )
        );
    };

    const decrementCount = (id) => {
        setdata(prevData =>
            prevData.map(item =>
                item.id === id ? { ...item, count: Math.max((item.count || 0) - 1, 0) } : item
            )
        );
    };

    const card_product = data.slice(0, 9).map((el) => (
        <div className='product_card' key={el.id}>
            <span className='card_badge'>{el.count}</span>
            <div className='icon_container_product'>
                <button>   <FiShoppingCart /></button>
                <button className='heart_btn'>   <IoIosHeartEmpty className='heart_btn' /></button>
            </div>
            <div className='rating_div'>
                <p>{el.rating} <FaStar className='star' /></p>
            </div>
            <div className="img_product">
              <Link to={`/product/${el.id}`}>  <img src={el.images[0]} alt="" width={250} height={250} /></Link>
            </div>
            <div className='product_text_content'>
                <h3>{el.title}</h3>
                <p className='price_product'>{el.price}$</p>
                <p className='count'>count {el.stock}</p>
                <div className='Btn_product'>
                    <button className='button'> Buy now</button>
                    <div className='minus_btn'>
                        <button disabled={el.count === 10} onClick={() => incrementCount(el.id)} className='btn_plus'><FaPlus /></button>
                        <button disabled={el.count === 0} onClick={() => decrementCount(el.id)} className='btn_plus' ><FaMinus /></button>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <div className='container'>
            <div className='product_title'>
                <h1>Product</h1>
            </div>
            <div className='flex_product'>
                {laoading ? <Loading/> :  card_product}
            </div>
        </div>
    );
};

export default Product;
