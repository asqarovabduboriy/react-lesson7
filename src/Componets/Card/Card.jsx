import React from 'react'
import './card.css'
import { LuMoveRight } from "react-icons/lu";
import img1 from '../../assets/img/Image (1).png'
import img2 from '../../assets/img/Image (2).png'
import img3 from '../../assets/img/Image (3).png'

const Card = () => {
    const card = [
        {
            id: 1,
            title: "Why you have to digitalize in 2021",
            discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
            img: img1
        },
        {
            id: 2,
            title: "Our internal process and longerm vision",
            discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
            img: img2
        },
        {
            id: 3,
            title: "Helping the next generation of leaders",
            discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
            img: img3
        }
    ]

    let cards = card?.map((el) => (
        <div className="card_cards" key={el.id}>
            <div className='card_img'>
                <img src={el.img} alt="" />
            </div>
            <div className='card'>
                <h3>{el.title}</h3>
                <p>{el.discription}</p>

                <div className="btn_card">
                    <button>
                        Learn More
                    </button>
                    <LuMoveRight className='rigth_icon' />
                </div>

            </div>
        </div>
    ))

    return (
        <>
            <div className='bg_color'>
                <div className='container'>
                    <div className='card_title'>
                        <h1>Latest Blog & News</h1>
                    </div>
                    <div className="card_flex">
                        {cards}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card