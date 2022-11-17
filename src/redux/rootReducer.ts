import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import YoutubePlayerSlice, { IYoutubePlayerSliceState } from './YoutubePlayer/YoutubePlayerSlice';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  keyPrefix: 'redux-',
  whitelist: ['settings'],
};

export interface IYoutubePlayerState {
  youtube: IYoutubePlayerSliceState
}

const rootReducer = combineReducers<IYoutubePlayerState>({
  youtube: YoutubePlayerSlice
});

export { rootPersistConfig, rootReducer };