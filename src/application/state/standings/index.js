import { createActions, handleActions } from 'redux-actions';

const standingActionCreators = createActions({
    STANDINGS: {        
        SET: (standings = {}) => (standings)
    }
});

const actionCreators = standingActionCreators.standings;

const reducers = handleActions({
    [actionCreators.set.toString()]: (state, action) => (
        Object.assign({}, state, action.payload)
    )
}, {});

export {    
    actionCreators,
    reducers
}
