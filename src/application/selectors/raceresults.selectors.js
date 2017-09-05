import { createSelector } from 'reselect';
import { worldChampForSeason } from './season.selectors';

const selectedYear = state => state.queryOpts.activeSeason;
const seasons = state => state.seasons;
const standings = state => state.standings;
const races = state => state.races;
const raceResults = state => state.raceResults;
const drivers = state => state.drivers;

const raceResultsForSeason = createSelector(
    [selectedYear, seasons, standings, races, raceResults, drivers],
    (selectedYear, seasons, standings, races, raceResults, drivers) => {
        let season = seasons[selectedYear];        
        if(typeof season === 'undefined') {
            return [];
        }
        if(!Array.isArray(season.Races)) {
            return [];
        }

        let worldChamp = worldChampForSeason(season.season, standings, drivers);
        if(typeof worldChamp === 'undefined') {
            return [];
        }

        return season.Races.map( raceId => {
            let race = races[raceId]; 
            if(typeof race === 'undefined') {
                return null
            }
            let raceResultId = race.Results[0]; //retrieving first index as we are interested only in the first place result
            let result = raceResults[raceResultId];
            if(typeof result === 'undefined') {
                return null
            }            
            let driver = drivers[result.Driver];
            if(typeof driver === 'undefined') {
                return null
            }
            
            driver.isWorldChampion = driver.driverId === worldChamp.driverId;

            return {                
                date: race.date,
                raceName: race.raceName,
                round: race.round,
                season: race.season,
                time: race.time,
                url: race.url,                               
                winner: driver
            }
        }).filter( item => item !== null);
    }
);

const worldChampionSelector = createSelector(
    [selectedYear, standings, drivers],
    (selectedYear, standings, drivers) => {
        let worldChamp = worldChampForSeason(selectedYear, standings, drivers);
        if(typeof worldChamp === 'undefined') {
            return {}
        }
        return worldChamp;
    }
)

export {
    raceResultsForSeason,
    worldChampionSelector
}