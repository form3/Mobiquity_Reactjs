import createBrowserHistory from 'history/createBrowserHistory';
import qs from 'qs';

const history = createBrowserHistory();

const createRange = (start, end) => {    
    let range = [];
    for(start;start <= end;start++) {
        range.push(start);        
    }
    return range;
}

//parseURLParams expects the query string params from a URL - ex: location.search
const parseURLParams = (params = '') => {
    let search = params.replace(/^\?/, '');
    return qs.parse(search);
}

export {
    history,
    createRange,
    parseURLParams
}