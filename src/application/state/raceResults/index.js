import { createActions, handleActions } from 'redux-actions';

const raceResultsActionCreators = createActions({
    RACE_RESULTS: {   
        GET_RESULTS_FOR_SEASON: (standing = 1, season) => ({standing, season}),     
        SET: (results = {}) => (results)
    }
});

const actionCreators = raceResultsActionCreators.raceResults;

const reducers = handleActions({
    [actionCreators.set.toString()]: (state, action) => (
        Object.assign({}, state, action.payload)
    )
}, {});

export {    
    actionCreators,
    reducers
}
