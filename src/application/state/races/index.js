import { createActions, handleActions } from 'redux-actions';

const raceActionCreators = createActions({
    RACES: {                
        SET: (races = {}) => (races)
    }
});

const actionCreators = raceActionCreators.races;

const reducers = handleActions({
    [actionCreators.set.toString()]: (state, action) => (
        Object.assign({}, state, action.payload)
    )
}, {});

export {    
    actionCreators,
    reducers
}
