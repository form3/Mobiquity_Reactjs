import { CancelToken } from 'axios';
import { CANCEL } from 'redux-saga';
import { qs } from 'qs';

import baseHttp from './baseHttp';

//This Http class wraps a provider (in this an axios instance)
//and sets up cancellation in the context of sagas (where all network requests should occur in this application)
//as well as throttling mechinism to respect the api guidlines for Ergast

class Http {
    constructor(httpProvider) {
        this._provider = httpProvider
    }

    get(url = '', args = {}) {
        const source = CancelToken.source();        
        let request = this._provider.get(url, {            
            cancelToken: source.token
        });
        request[CANCEL] = () => source.cancel();            
        return request;
    }

    //only implementing 'get' for now, as that all that is required for the current application
    //the above 'pattern' can be easily implemented across other http methods as needed

}

const http = new Http(baseHttp);

export default http;