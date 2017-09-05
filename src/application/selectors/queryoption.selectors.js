import { createSelector } from 'reselect';

const selectOptsForSeasons = createSelector(
    state => state.queryOpts,
    queryOpts => queryOpts.seasons.map( season => ({ value: season, label: season }))
);

export {
    selectOptsForSeasons
}