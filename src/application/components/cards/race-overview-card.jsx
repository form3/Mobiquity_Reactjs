import React from 'react';

import Card from './card';
import DriverProfile from './driver-profile';

const RaceOverviewCard = ({result, className}) => (
    <Card className={
        ['race-overview-card',
        result.winner.isWorldChampion ? 'world-champ' : '',  
        className].join(' ').trim()}>         
        <div className="title">
            <h2>{result.raceName}</h2>  
            <a href={result.url}>Race Wikipedia Page</a>
        </div> 
        <div className="content">
            <div className="position-label">
                <p>1st Place</p>
                <p>Finisher</p>
            </div>
            <DriverProfile driver={result.winner} hideResults={true} />
        </div>        
    </Card>
)

export default RaceOverviewCard;

