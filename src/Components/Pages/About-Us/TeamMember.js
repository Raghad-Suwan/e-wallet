import React from "react";
import './About.css';

const TeamMember = (props) => {
    return (
        <div className='col col-md-6 col-sm-12 col-lg-4 p-3 memberItem justify-content-center'>
            <img className='' src={props.src} alt={props.alt} />
            <div className="memberIemText">
                <h3>{props.name}</h3>
                <p className='h5'>computer science apprenticeship student in NNU</p >
            </div>
        </div>
    )
}
export default TeamMember