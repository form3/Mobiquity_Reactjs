import { handleGetSeasonStandings } from './driver-standings.saga';
import { sagaRouter } from './router.saga';

export default function* rootSaga() {
    yield [        
        handleGetSeasonStandings(),
        sagaRouter()
    ]
}