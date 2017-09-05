import { createSelector } from 'reselect';
import { createRange } from '../utils'

const selectedYears = state => createRange(state.queryOpts.selectedSeasons.start, state.queryOpts.selectedSeasons.end)
const seasons = state => state.seasons;
const standings = state => state.standings;
const drivers = state => state.drivers;

const worldChampForSeason = (year, standings, drivers) => {
    let results = standings[`1-${year}`];            
    if(typeof results === 'undefined') {
        return undefined;
    }            
    let driver = drivers[results.Driver];
    if(typeof driver === 'undefined') {
        return undefined;
    }
    driver.results = {
        points: results.points,
        wins: results.wins,
    }
    return driver;
}

const selectedSeasonsResults = createSelector(
    [selectedYears, seasons, standings, drivers],
    (selectedYears, seasons, standings, drivers) => {
        return selectedYears.map( year => {   
            let season = seasons[year];
            if(typeof season === 'undefined') {
                return null;
            }            
            let champ = worldChampForSeason(year, standings, drivers);
            if(typeof champ === 'undefined') {
                return null;
            }                                               
            return {
                year: season.season,                
                driver: champ
            }             
        }).filter( item => item !== null);
    }
)

export {
    selectedSeasonsResults,
    worldChampForSeason
}