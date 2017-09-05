import React from 'react';
import { connect } from 'react-redux';
import { selectedSeasonsResults } from '../selectors';
import { routes } from '../constants';

//Components
import { SeasonChampCard } from '../components/cards';
import { BusyWait } from '../components';

const ChampionList = ({seasons, isBusy}) => (    
    <div className="champion-list clearfix">
        <BusyWait isBusy={isBusy} />
        {seasons.map( (season, index) =>(
            <div key={ index } className="col-xs-12 col-sm-6 col-md-3">
                <SeasonChampCard                    
                    seasonYear={ season.year }
                    driver={ season.driver }
                    url={ `${routes.SEASON_OVERVIEW}${season.year}` }/>
            </div>
        ))}
    </div>
);

const selector = state => ({
    seasons: selectedSeasonsResults(state),
    isBusy: state.busyState.loadingSeasons
})

export default connect(selector)(ChampionList);