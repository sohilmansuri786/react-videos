import { all } from 'redux-saga/effects';
import YoutubePlayer from './YoutubePlayer/YoutubePlayerSaga';

function* rootSaga() {
  yield all([
    YoutubePlayer()
  ]);
}

export default rootSaga;