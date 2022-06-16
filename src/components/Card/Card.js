import React from 'react';
import './Card.css';

const Card = ( props ) => {
    return(
        <div className="card-single">
            <div className="card-flex">
                <div className="card-info">
                    <div className="card-head">
                        <span>{props.titleCard}</span>
                        <small>{props.subtitleCard}</small>
                    </div>

                    <h2>{props.valueCard}</h2>

                    <small>{props.percentageCard}</small>
                </div>
                <div className="card-chart sucess">
                    <span className="las la-shopping-cart"></span>
                </div>
            </div>
        </div>
    );
}

export default Card;


