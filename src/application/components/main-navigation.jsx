import React from 'react';
import { connect } from 'react-redux';
import { routes } from '../constants';

//Components
import { Link, Route } from 'react-router-dom';
import { AppLogo, BackgroundImage } from '../components/image';

const MainNavigation = ({selectedSeasons, activeSeason}) => (
    <header className="main-navigation">
        <BackgroundImage 
                src="f1hero.home.splash.png"
                className="nav-banner">                
                <Link to={routes.HOME} className="home-link">
                    <AppLogo />
                </Link>
                <div className="header-text">
                <Route path={routes.SEASONS} exact={true} render={ () => (             
                    <span>   
                        <h2>F1 World Champions</h2>
                        <h4>From {selectedSeasons.start} through {selectedSeasons.end}</h4>                    
                    </span>
                )}/>
                <Route path={routes.SEASONS_OVERVIEW_YEAR_PARAM} exact={true} render={ () => (             
                    <span>   
                        <h2>{activeSeason} Overview</h2>                        
                    </span>
                )}/>
                </div>
        </BackgroundImage>                
    </header>
)

const selector = state => {    
    return {
        selectedSeasons: state.queryOpts.selectedSeasons,
        activeSeason: state.queryOpts.activeSeason
    }
}

export default connect(selector)(MainNavigation);