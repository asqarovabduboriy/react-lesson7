import React, { useState, useEffect } from 'react'
import './Singilroute.css'
import { useParams } from 'react-router-dom';
import axios from '../../Api/api';
import { FaStar } from "react-icons/fa6";
import Loader from '../../Loading/Loader';

const Singlerout = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loader, setlogin] = useState(false)

    const Stars = [];
    for (let i = 0; i < 5; i++) {
        Stars.push(<FaStar key={i} />);
    }

    useEffect(() => {
        setlogin(true)
        axios
            .get(`/product/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
            .finally(() => { setlogin(false) })
    }, [])
    return (
        <>
            <div className='container'>
                <div className='flex_single_rout'>
                    <div className='smal_warpper'>
                        <div className='samll_div'>
                            {loader ? <Loader /> : <img src={product?.images[1]} alt="" width={150} />}
                        </div>
                        <div className='samll_div'>
                            {loader ? <Loader /> : <img src={product?.images[2]} alt="" width={150} />}
                        </div>
                        <div className='samll_div'>
                            {loader ? <Loader /> : <img src={product?.images[3]} alt="" width={150} />}
                        </div>
                    </div>
                    <div className='big_wrapper'>
                        {loader ? <Loader /> : <img src={product?.images[0]} alt="" width={445} height={400} />}
                    </div>

                    <div className='single_route_text_content'>
                        {loader ? <h2>Loading...</h2> : <h1> {product?.title}</h1>}
                        <div className='stars_wrapper'>
                            {Stars}
                            {loader ? <p>Loading...</p> : <p>{product?.rating}</p>}
                            {loader ? <p>Loading...</p> : <b>count {product?.stock}</b>}
                        </div>
                        {loader ? <p>Loading...</p> : <span>${product?.price}</span>}
                        <div style={{marginTop: '25px', textAlign:'center'}}>
                            {loader ? <p>Loading...</p> : <p className='p_text'>{product?.description}</p>}
                        </div>
                        <div className='line'></div>

                        <div className='form'>
                            <h2>Fill out the form below to place an order</h2>
                            <form className='sinle-rout_form'>
                                <input type="text" placeholder=' example@email.com' />
                                <input type="number" placeholder=' +998 123 45 67' />
                                <button>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Singlerout;