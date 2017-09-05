import http from './http';
import { ergastAPI } from '../constants';


export default class DriverStandingsService {
    //this static service method is seeded with sensible defaults as well as to offer type hinting for expected arguments
    static driverStandingsForSeasons(standing = 1, fromSeason = 2005, toSeason = 2015) {
        if(fromSeason > toSeason) {
            let err = new Error(`Invalid Arguments Error: From season (given ${fromSeason}) must by less than to season (given ${toSeason})`);
            return Promise.reject(err);
        }

        const params = {
            offset : ergastAPI.offsetForYear(fromSeason),
            limit : (toSeason - fromSeason) + 1
        };

        const request = `/${ergastAPI.DRIVER_STANDINGS}/${standing}${ergastAPI.pagingParams(params)}`;
        return http.get(request);
    }
}