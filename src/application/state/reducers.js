import { combineReducers } from 'redux';

import { reducers as drivers } from './drivers';
import { reducers as seasons } from './seasons';
import { reducers as races } from './races';
import { reducers as standings } from './standings';
import { reducers as queryOpts } from './queryopts';
import { reducers as raceResults } from './raceResults';
import { reducers as busyState } from './busystate';

const rootReducer = combineReducers({
    drivers,
    seasons,
    races,
    standings,
    raceResults,
    queryOpts,
    busyState
});

export default rootReducer;