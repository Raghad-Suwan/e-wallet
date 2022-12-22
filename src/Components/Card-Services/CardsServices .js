import React from 'react';
import { useNavigate } from 'react-router';
import "./services.css";

const CardsServices = (props) => {
    const  navigate = useNavigate(); 
    const routeChange = () =>{ 
        navigate(props.link);
    }
    return (
        <div className='card text-center card_services '>
            <div className='overflow ovver'>
                <img src={props.imgsrc} alt="image1" className='caaard-img-top' />
            </div>
            <div className='card-body text-dark card-body_services'>
                <h4 className='card-title caaard-title'><u>{props.title}</u></h4>
                <p className='card-text text-secondary caaard-textt'>{props.textt}</p>
                <button onClick={routeChange} className='btn btn-outline-dark text-dark buttooon'>Read more</button>
            </div>
        </div>
    )
}
export default CardsServices;