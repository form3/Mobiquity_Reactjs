import React from 'react';

import { Link } from 'react-router-dom';
import Card from './card';

const SeasonChampCard = ({seasonYear, driver, url, className}) => (
    <Card className={['season-overview-card', className].join(' ').trim()}>
        <Link to={url}>         
            <div className="title">
                <h2>{seasonYear}</h2>  
            </div> 
            <div className="content">
                <h4>{driver.givenName} {driver.familyName}</h4>
                <p>Nationality: {driver.nationality}</p>
            </div>
        </Link>
    </Card>
)

export default SeasonChampCard;

