import { createActions, handleActions } from 'redux-actions';

var merge = require('deepmerge')

const seasonActionCreators = createActions({
    SEASONS: {        
        SET: (seasons = {}) => (seasons)
    }
});

const actionCreators = seasonActionCreators.seasons;

const reducers = handleActions({
    [actionCreators.set.toString()]: (state, action) => (
        merge(state, action.payload)
        //Object.assign({}, state, action.payload)
    )
}, {});

export {    
    actionCreators,
    reducers
}
