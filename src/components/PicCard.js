import React from 'react';
import './PicCard.css';
//import Card from 'react-bootstrap/Card';
const PicCard=(props)=>{
    return (
        <div className="card text-light">
           <div className="body-card fluid">     
                 <img className="card-img d-white " src={ props.src} alt="Card image"/>
                    <div className="card-img-overlay"> 
                      <div className="card-content">
                          <h5 className="card-title">{props.title}</h5>
                          <p className="card-text">{props.content}</p> 
                          <p className="card-text">{props.footer}</p>
                          {/* <button type="button" class="btn btn-outline-light">Read more</button>*/}
                      
                      </div>
                    </div>         
            </div>
        </div>
    );
}
export default PicCard;
