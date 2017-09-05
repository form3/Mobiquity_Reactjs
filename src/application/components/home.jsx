import React from 'react';
import { connect } from 'react-redux';
import { routes } from '../constants';
import { selectOptsForSeasons, selectedSeasons } from '../selectors';
import { QueryActions } from '../state';

//Components
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { Image, AppLogo, BackgroundImage } from '../components/image';


const Home = ({seasonOpts, selectedSeasons, selectStartSeason, selectEndSeason}) => (
    <div className="home-page">            
        <div className="content-wrapper">            
            <BackgroundImage 
                src="f1hero.home.splash.png"
                className="hero-banner">            
                <AppLogo />
                <div className="season-filter">
                    <h3>Search for F1 World Champions</h3>
                    <div className="filter-controls">                        
                        <Select
                            name="startSeason" 
                            placeholder="Starting Season"
                            options={seasonOpts}
                            clearable={false}
                            value={selectedSeasons.start}
                            onChange={ opt => selectStartSeason(opt.value) }
                            />
                        <span>to</span>
                        <Select 
                            name="endSeason"
                            placeholder="Ending Season"
                            options={seasonOpts}
                            clearable={false}
                            value={selectedSeasons.end}
                            onChange={ opt => selectEndSeason(opt.value) }
                            />                         
                    </div>   
                    <Link className={'ui-btn'} to={routes.seasonsRouteWithParams(selectedSeasons.start, selectedSeasons.end)}>Go</Link>             
                </div>            
            </BackgroundImage>
        </div>
    </div>
);

const selector = state => {    
    return {
        seasonOpts: selectOptsForSeasons(state),        
        selectedSeasons: state.queryOpts.selectedSeasons
    }
}

const dispatcher = dispatch => {
    return{
        selectStartSeason: year => {dispatch(QueryActions.setStartSeason(year))},
        selectEndSeason: year => {dispatch(QueryActions.setEndSeason(year))}
    }
}

export default connect(selector, dispatcher)(Home);