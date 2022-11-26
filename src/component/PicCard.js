import React, { Component } from 'react';
import './PicCard.css';
// import Card from 'react-bootstrap/Card';

const PicCard=()=>{
    return (
<>
        <div className='card  text-dark'>
           <div className='body-card'>
                <img className='card-img' src=".image/jawwalpay.png" alt="Card image"></img>
                    <div className='card-img-overlay'>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text">Last updated 3 mins ago</p>
                    </div>  
            </div>
        </div>

        <div className='card  text-dark'>
           <div className='body-card'>
                <img className='card-img' src=".image/jawwalpay.png" alt="Card image"></img>
                    <div className='card-img-overlay'>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text">Last updated 3 mins ago</p>
                    </div>  
            </div>
        </div>

        <div className='card  text-dark'>
           <div className='body-card'>
                <img className='card-img' src=".image/jawwalpay.png" alt="Card image"></img>
                    <div className='card-img-overlay'>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text">Last updated 3 mins ago</p>
                    </div>  
            </div>

        </div>
        </>
    );
}
export default PicCard;
 {/* <Card classNameName="card bg-dark text-white">
          <Card.Img src="./src/component/image/jawwalpay.png" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card> */}