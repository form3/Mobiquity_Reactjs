import { router } from 'redux-saga-router';
import { put, fork, cancel, cancelled, select } from 'redux-saga/effects';

import { history, parseURLParams } from '../utils';
import { routes } from '../constants';
import { DriverActions, QueryActions, RaceResultActions } from '../state';
import { getSeasonStandings } from './driver-standings.saga';
import { getRaceResultsForSeason } from './race-results.saga';

const getStandings = state => state.standings

const routeSagas = {
    [routes.SEASONS] : function* home() {
        let params = parseURLParams(location.search);    
        yield put(QueryActions.setStartSeason(params.start));
        yield put(QueryActions.setEndSeason(params.end));
        let task = yield fork(getSeasonStandings, DriverActions.getForOverallStandingInSeasons(1, params.start, params.end));
        if(yield cancelled()) {
            yield cancel(task);
        }
    }, 
    [routes.SEASONS_OVERVIEW_YEAR_PARAM] : function* seasonOverview(param) {        
        
        yield put(QueryActions.setActiveSeason(param.year));
        
        const standings = yield select(getStandings);        
        if(typeof standings[`1-${param.year}`] === 'undefined') { //the standing relevant to determining world champ is not in the store
            let taskOne = yield fork(getSeasonStandings, DriverActions.getForOverallStandingInSeasons(1, param.year, param.year));
            if(yield cancelled()) {
                yield cancel(taskOne);
            }
        }        
        
        let taskTwo = yield fork(getRaceResultsForSeason, RaceResultActions.getResultsForSeason(1, param.year));
        if(yield cancelled()) {
            yield cancel(taskTwo);
        }
    }
}

export function* sagaRouter() {
    yield fork(router, history, routeSagas);
}

