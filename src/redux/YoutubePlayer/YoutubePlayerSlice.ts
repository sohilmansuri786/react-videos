import { createSlice } from '@reduxjs/toolkit';
import { RecommendationInfo } from '../../gRPC/rooms/models_pb';

export interface IYoutubePlayerSliceState {
    videos: RecommendationInfo.AsObject[];
    playerData: RecommendationInfo.AsObject | null;
}

const initialState: IYoutubePlayerSliceState = {
    videos: [],
    playerData: null
}

const YoutubePlayerSlice = createSlice({
    name: 'youtubePlayer',
    initialState,
    reducers: {
        setInitialState(state) {
            state.videos = initialState.videos;
        },
        addVideos(state, action) {
            state.videos = action.payload;
        },
        clearVideos(state, action) {
            state.videos = [];
        },
        removeVideo(state, action) {
            const index = state.videos?.findIndex(video => video?.id === action.payload?.id);
            let temp = state.videos;
            temp.splice(index, 1);
            state.videos = temp;
        },
        playVideo(state, action) {
            const index = state.videos?.findIndex(video => video?.id === action.payload?.id);
            if (index && action.payload)
                state.videos[index].played = true;
            state.playerData = action.payload;
        },
        updateTitle(state, action) {
            const index = state.videos?.findIndex(video => video?.id === action.payload?.id);
            let input = prompt("Update Title", state.videos[index]?.metadata!.title);
            if (input != null) {
                state.videos[index].metadata.title = input;
            }
        }
    },
});

export default YoutubePlayerSlice.reducer;

// Actions
export const {
    addVideos,
    clearVideos,
    playVideo,
    removeVideo,
    updateTitle
} = YoutubePlayerSlice.actions;
