import { createActions, handleActions } from 'redux-actions';

const driverActionCreators = createActions({
    DRIVERS: {
        GET_FOR_OVERALL_STANDING_IN_SEASONS: (standing, fromSeason, toSeason) => ({standing, fromSeason, toSeason}),
        GET_FOR_STANDING_IN_RACES_IN_SEASON: (standing, season) => ({standing, season}),
        SET: (drivers = {}) => (drivers)
    }
});

const actionCreators = driverActionCreators.drivers;

const reducers = handleActions({
    [actionCreators.set.toString()]: (state, action) => (
        Object.assign({}, state, action.payload)
    )
}, {});

export {
    actionCreators,
    reducers
}