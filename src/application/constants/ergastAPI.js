
//This object serves the purpose of logically grouping settings/constants related to the ergast api
//so that they may be managed in this file but used throughout the application
const ergastAPI = {
    
    //Constants
    BASE_PATH: '/api',
    SEASON_ONE: 1950,
    F1_SERIES: 'f1',    
    MAX_LIMIT: 1000,

    //API ROUTES
    DRIVER_STANDINGS: 'driverStandings',
    RESULTS: 'results',

    //F1 Hero constants related to API interaction
    MIN_SEASON_YEAR: 2005,
    MAX_SEASON_YEAR: 2015,

    //Helper methods for assembling requests
    offsetForYear: (year = 1950) => {
        return year - ergastAPI.SEASON_ONE;
    },

    pagingParams: (params = {limit: null, offset: null}) => {
        let qstring = '';
        if(params.limit !== null) {
            if(params.limit > ergastAPI.MAX_LIMIT) {
                params.limit = ergastAPI.MAX_LIMIT;
                console.warn(`Limit query parameter exceeds Ergast api maximum. Limit will be set to ${ergastAPI.MAX_LIMIT}.`);
            }
            qstring += `limit=${params.limit}`;
        }

        if(params.offset !== null) {
            if(qstring.length > 0) {
                qstring += '&';
            }
            qstring += `offset=${params.offset}`;
        }
        if(qstring.length > 0) {
            return `?${qstring}`;
        }
    }
};

export default ergastAPI;