import React from 'react';
import { useNavigate } from 'react-router';
import "./services.css";

const CardsServices = (props) => {
    const navigate = useNavigate();
    const routeChange = () => {
        navigate(props.link);
    }
    return (
        <div className='card text-center cardsevices '>
            <div className='overflow oversevices'>
                <img src={props.imgsrc} alt="image1" className='cardsevices-img-top' />
            </div>
            <div className='card-body text-dark cardsevices-bodyy'>
                <h4 className='card-title cardsevices-title'><u>{props.title}</u></h4>
                <p className='card-text cardsevices-textt'>{props.textt}</p>
                <button onClick={routeChange} className='btn btn-outline-dark text-light buttooon'>Read more</button>
            </div>
        </div>
    )
}
export default CardsServices;