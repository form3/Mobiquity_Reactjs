import { createActions, handleActions, combineActions } from 'redux-actions';
import { ergastAPI } from '../../constants';
import { createRange } from '../../utils';

const queryOptsActionCreators = createActions({
    QUERY: {
        SEASONS: {        
            SET: (seasons = []) => (seasons),
            SET_START_SEASON: (year = ergastAPI.MIN_SEASON_YEAR) => ({start: year}),
            SET_END_SEASON: (year = ergastAPI.MAX_SEASON_YEAR) => ({end: year}),
            SET_ACTIVE_SEASON: (year) => ({activeSeason: year})
        }
    }    
});

const supportedYears = createRange(ergastAPI.MIN_SEASON_YEAR, ergastAPI.MAX_SEASON_YEAR);
const actionCreators = queryOptsActionCreators.query.seasons;
const reducers = handleActions({
    [actionCreators.set.toString()]: (state, action) => (
        Object.assign({}, state, {seasons: action.payload})
    ),
    [combineActions(
        actionCreators.setStartSeason.toString(),
        actionCreators.setEndSeason.toString()
    )]: (state, action) => {        
        let update = Object.assign(state.selectedSeasons, action.payload);
        return Object.assign({}, state, {selectedSeasons: update});
    },
    [actionCreators.setActiveSeason.toString()]: (state, action) => (
        Object.assign({}, state, action.payload)
    )
}, { 
    seasons: supportedYears,
    selectedSeasons: { start: ergastAPI.MIN_SEASON_YEAR, end: ergastAPI.MAX_SEASON_YEAR },
    activeSeason: null
});

export {    
    actionCreators,
    reducers
}