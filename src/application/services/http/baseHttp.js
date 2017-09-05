import axios from 'axios';
import qs from 'qs';

import cachios from '../cache';
import { ergastAPI } from '../../constants';

//The http module is the core 'low level' network handler intended to be
//leveraged with all services that have depend on making a network request 

let baseHttp = axios.create({
    baseURL: `${ergastAPI.BASE_PATH}/${ergastAPI.F1_SERIES}`,
    timeout: 5000,
    headers: {
        accepts: 'application/json'
    },
    validateStatus: status => {
        return status >= 200 && status < 300
    },
    paramsSerializer: params => {
        return qs.stringify(params);
    }
});


//Utility function that converts standard urls to use the .json url
//Ergast requires to recieve a json response
const jsonURL = (req) => {
    var url = '';
    if(req.indexOf('?') !== -1) {
        let splitUrl = req.split('?')
        url = `${splitUrl[0]}.json?${splitUrl[1]}`;
    } else {
        url = `${req}.json`;
    }
    return url;
}

const simpleCache = {};

//Intercept all requests and add the .json extension
//required to recieve a response in JSON format from the ergast API
//reference: http://ergast.com/mrd/
baseHttp.interceptors.request.use( config => {    
    //TODO: check cache first and resolve early if with data if there is a 'hit'        
    config.url = jsonURL(config.url);
    return config;
}, error => {
    return Promise.reject(error);
});

baseHttp.interceptors.response.use( response => {        
    //TODO: use response interceptor to insert data into cache
    return response.data;    
}, error => {
    return Promise.reject(error);
});

baseHttp = cachios.create(baseHttp);

export default baseHttp;