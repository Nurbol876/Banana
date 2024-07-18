import React from 'react';

const InfoCard = ({ img, title }) => {
    return (
        <div className='info__card'>
            <img className='info__icon' src={img} alt={title}/>
            <h4 className="info__card-title">
                {title}
            </h4>
        </div>
    );
};

export default InfoCard;