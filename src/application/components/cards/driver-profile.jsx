import React from 'react';

import Card from './card';

const DriverProfile = ({driver, className, hideResults = false}) => (
    <Card className={
        ['driver-profile-card',
        driver.isWorldChampion ? 'world-champ' : '',  
        className].join(' ').trim()}>         
        <div className="title">
            <h2>{driver.givenName} {driver.familyName}</h2>  
        </div> 
        <div className="content">
            <p><label>Date of Birth:</label> {driver.dateOfBirth}</p>
            <p><label>Nationality:</label> {driver.nationality}</p>            
            <a target="_blank" href={driver.url}>Wikipedia</a>                        
            {(!driver.results || hideResults) ? null :
                <div className="season-results">
                    <h4>Season Results</h4>
                    <p><label>Wins:</label> {driver.results.wins}</p>
                    <p><label>Points:</label> {driver.results.points}</p>                
                </div>
            }                    
        </div>        
    </Card>
)

export default DriverProfile;

