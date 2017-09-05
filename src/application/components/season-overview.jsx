import React from 'react';
import { connect } from 'react-redux';
import { routes } from '../constants';
import { raceResultsForSeason, worldChampionSelector } from '../selectors';

import { DriverProfile, RaceOverviewCard } from '../components/cards';
import { Link } from 'react-router-dom';
import { BusyWait } from '../components';

const SeasonOverview = ({worldChampion, raceResults, selectedSeasons, activeSeason, isBusy}) => (
    <div className="season-overview clearfix">
        <div className="breadcrumbs">
            <Link to={routes.seasonsRouteWithParams(selectedSeasons.start, selectedSeasons.end)}>
                SEASONS
            </Link>    
            <span>/</span>
            <span>{activeSeason}</span>
        </div>
        <div className="column col-sm-5">
            <h3>World Champion</h3>
            <DriverProfile driver={worldChampion} />
        </div>
        <div className="column col-sm-7">
            <BusyWait isBusy={isBusy} />
            <h3>Races In Season</h3>
            { raceResults.map( (result, index) => (
                <RaceOverviewCard 
                    key={index}
                    result={result} />
            ))}
        </div>
    </div>
);

const selector = state => ({
    raceResults: raceResultsForSeason(state),
    worldChampion: worldChampionSelector(state),
    selectedSeasons: state.queryOpts.selectedSeasons,
    activeSeason: state.queryOpts.activeSeason,
    isBusy: state.busyState.loadingRaces
});

export default connect(selector)(SeasonOverview);