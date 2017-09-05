import { createActions, handleActions } from 'redux-actions';

const busyStateActionCreators = createActions({
    BUSYSTATE: {                
        LOADING_SEASONS: (busy = false) => (busy),
        LOADING_RACES: (busy = false) => (busy),
        LOADING_WORLD_CHAMP: (busy = false) => (busy),
    }
});

const actionCreators = busyStateActionCreators.busystate;

const reducers = handleActions({
    [actionCreators.loadingSeasons.toString()]: (state, action) => (
        Object.assign({}, state, {loadingSeasons: action.payload})
    ),
    [actionCreators.loadingRaces.toString()]: (state, action) => (
        Object.assign({}, state, {loadingRaces: action.payload})
    ),
    [actionCreators.loadingWorldChamp.toString()]: (state, action) => (
        Object.assign({}, state, {loadingWorldChamp: action.payload})
    )
}, {
    loadingSeasons: false,
    loadingRaces: false,
    loadingWorldChamp: false
});

export {    
    actionCreators,
    reducers
}