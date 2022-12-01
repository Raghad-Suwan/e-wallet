import React, { Component } from 'react';
import './SocialMed.css';

function SocialMed(props) {
    return(
  
<div className='media'>
    <div className='button'>
        <div className='icon'>
            <i className={props.iconn} >
                <a href={props.link}></a>
            </i>
        </div>
        <span>{props.name}</span>
    </div>
</div>
    );
}
export default SocialMed;
