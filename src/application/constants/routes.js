
const routes = {
    HOME: '/',
    SEASONS: '/seasons',    
    SEASON_OVERVIEW: '/seasons/',
    SEASONS_OVERVIEW_YEAR_PARAM: '/seasons/:year',

    //Helper methods to generate routes with qstring params
    seasonsRouteWithParams(start = null, end = null) {
        let qstring = '';
        if(start !== null) {
            qstring += `start=${start}`
        }
        if (end !== null) {
            qstring += (start !== null) ? '&' : '';
            qstring += `end=${end}`
        }
        return (qstring.length > 0) ? `${routes.SEASONS}?${qstring}` : routes.SEASONS;
    }
}

export default routes;