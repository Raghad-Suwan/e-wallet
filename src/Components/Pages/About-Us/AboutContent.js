import React from "react";
import './About.css';
const AboutContent = (props) => {
    return (
        <div >
            <p className='h4'>{props.subtitle}</p>
            <p className='text1'>{props.content}</p>
        </div>
        );
}
export default AboutContent;
