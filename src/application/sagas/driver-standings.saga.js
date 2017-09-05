import { call, put, takeLatest, cancelled } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { StandingsList } from '../models';
import { DriverStandingsService } from '../services';
import { 
    DriverActions, 
    SeasonActions,
    StandingActions,
    BusyActions
} from '../state';

export function* getSeasonStandings(action) {
    yield put(BusyActions.loadingSeasons(true));
    const {
        standing,
        fromSeason,
        toSeason
    } = action.payload;
    try {        
        const response = yield call(DriverStandingsService.driverStandingsForSeasons, standing, fromSeason, toSeason);                    
        let data = response.MRData.StandingsTable.StandingsLists;            
        var { entities, result } = normalize(data, StandingsList);                 
        yield put(SeasonActions.set(entities.seasons));
        yield put(DriverActions.set(entities.drivers));
        yield put(StandingActions.set(entities.standings));
    } catch (err) {
        //TODO: implement pleasent error UX
        alert(err)        
    } finally {
        yield put(BusyActions.loadingSeasons(false));        
    }            
}

export function* handleGetSeasonStandings() {
    yield takeLatest(DriverActions.getForOverallStandingInSeasons.toString(), getSeasonStandings);
}