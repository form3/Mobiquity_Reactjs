/**
 * Include CSS
 * -----------
 * This is here so that we can hot-reload it later with webpack-dev-server.
 * In production, however, this needs to be included from the HTML file as a separate css file.
 */
import styles from './styles'; // eslint-disable-line no-unused-vars

//React 
import React from 'react';
import { render } from 'react-dom';

//React Router and its dependencies
import {
  Router,
  Route,
  Switch
} from 'react-router-dom'

//Redux
import { Provider } from 'react-redux';

//Application History
import { history } from './application/utils';

//The application's Redux Store
import store from './application/store';

//Application Routes (urls)
import { routes } from './application/constants';

//Top level components to be rendered at specific URLs
import { 
    MainNavigation,
    Home,
    ChampionList,
    SeasonOverview
} from './application/components';

render((
    <Provider store={store}>
        <Router history={history}>    
            <div>                    
                <Route path={routes.SEASONS} component={MainNavigation} />
                <Switch>                    
                    <Route path={routes.HOME} exact={true} component={Home} />
                    <Route path={routes.SEASONS} exact={true} component={ChampionList} />
                    <Route path={routes.SEASONS_OVERVIEW_YEAR_PARAM} exact={true} component={SeasonOverview} />                    
                </Switch>            
            </div>
        </Router>
    </Provider>
), document.getElementById('app'));
