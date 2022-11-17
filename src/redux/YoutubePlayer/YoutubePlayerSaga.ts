import { takeEvery, all, call, put } from 'redux-saga/effects';
import { RecommendationInfo } from '../../gRPC/rooms/models_pb';
import { getRecommendations } from '../../services';
import { addVideos } from './YoutubePlayerSlice';

interface IRecommendationsList {
    recommendationsList: RecommendationInfo.AsObject[]
}

export interface ResponseGenerator{
    config?:any,
    data?:IRecommendationsList,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string,
    recommendationsList: RecommendationInfo.AsObject[]
}

function* getVideos() {
    try {
        const data:ResponseGenerator = yield call(getRecommendations);
        if (data) {
            const videosList = data.recommendationsList.filter((info: RecommendationInfo.AsObject) => info.position >= 0 && info.position < 100);
            yield put(addVideos(videosList));
        }
    } catch (error) {
        console.error(error);
    }
}

function* watchForVideos() {
    yield takeEvery('getVideosList', getVideos);
}

export default function* YoutubePlayerSaga() {
    yield all([
        watchForVideos()
    ])
}
