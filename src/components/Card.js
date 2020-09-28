import React from 'react';
import cardImg from '../assets/image/bed.jpeg'
import './card.css'

function Card() {
    return (
        <div className="card">
            <div className="card-img">
                <img src={cardImg} alt="card"/>
                <div className="view-count">
                    See 12 photos
                </div>
            </div>
            <div className="card-body">
                <ul className="card-body-text">
                    <li className="card-body-text-item">
                        <b>&euro;350/month</b>
                        Bills included
                    </li>
                    <li className="card-body-text-item">
                        No deposit required
                    </li>
                    <li className="card-body-text-item">
                       <b>Alquilo habitacion INDIVIDUAL con gastos incluidos.</b>
                    </li>
                </ul>
                <span href="#" className="published">Published this week</span>
            </div>
        </div>
    );
}

export default Card;