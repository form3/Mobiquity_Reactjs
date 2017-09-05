import http from './http';
import { ergastAPI } from '../constants';


export default class RaceResultsService {
    
    static resultsForRacesInSeason(position = 1, season) {            
        if(typeof season === 'undefined') {
            let err = new Error('Invalid season/race year provided.');
            return Promise.reject(err);
        }
        const request = `/${season}/${ergastAPI.RESULTS}/${position}`;
        return http.get(request);
    }
}