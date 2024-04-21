import React from 'react'
import './Abaout.css'
import img from '../../../assets/img/Image (4).png'
import Card from '../../Card/Card'

const About = () => {
    const data = [
        {
            id: 1,
            title: 'Awards received',
            dicription: 'Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.',
            num: '15+',
        },
        {
            id: 2,
            title: 'Clients served',
            dicription: 'Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.',
            num: '500+',
        },
        {
            id: 3,
            title: 'Employees',
            dicription: 'Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.',
            num: '34+',
        },
        {
            id: 4,
            title: 'Custom solutions',
            dicription: 'Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.',
            num: '130+',
        }
    ]

    let textcards = data?.map((el) => (
        <div className='text_cards' key={el.id}>
            <h4>{el.num}</h4>
            <b>{el.title}</b>
            <p>{el.dicription}</p>
        </div>
    ))

    return (
        <>
            <div className='container'>
                <div className='about_flex_div'>
                    <div className='text_content'>
                        <h1>We value human, organizational, and operational intelligence, not just artificial</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
                        <button>Work With Us</button>
                    </div>
                    <div className='img_wrapper_about'>
                        <img src={img} alt="" />
                        <div className='rektangle_about'></div>
                    </div>
                </div>
                <div className='text_content_two'>
                    <h4>The energy of a start-up combined with 30 years of experience</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
                </div>
                <div className='text_cards_wrapper'>
                    {textcards}
                </div>
            </div>
            <Card />
          


        </>

    )
}

export default About;