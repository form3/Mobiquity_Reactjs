import { call, put, takeLatest, cancelled } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { RaceTable } from '../models';
import { RaceResultsService } from '../services';
import { 
    DriverActions, 
    RaceResultActions,
    RaceActions,
    SeasonActions,
    BusyActions
} from '../state';

export function* getRaceResultsForSeason(action) {
    yield put(BusyActions.loadingRaces(true));
    const {
        standing,        
        season
    } = action.payload;    
    try {        
        const response = yield call(RaceResultsService.resultsForRacesInSeason, standing, season);        
        let data = response.MRData.RaceTable;                
        var { entities, result } = normalize(data, RaceTable);                                         
        yield put(SeasonActions.set(entities.seasons));
        yield put(RaceActions.set(entities.races));
        yield put(RaceResultActions.set(entities.raceResults));
        yield put(DriverActions.set(entities.drivers));                        
    } catch (err) {
        //TODO: implement pleasent error UX
        alert(err)
    } finally {
        yield put(BusyActions.loadingRaces(false));
    }    
}

export function* handleRaceResultsForSeason() {
    yield takeLatest(RaceResultActions.getResultsForSeason.toString(), getRaceResultsForSeason);
}