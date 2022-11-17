import S from '../App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { playVideo, clearVideos, removeVideo, updateTitle, } from '../redux/YoutubePlayer/YoutubePlayerSlice';
import { Button } from '@mui/material';
import { button } from './PlayerView';
import { IYoutubePlayerState } from '../redux/rootReducer';

const VideosList = () => {
    const dispatch = useDispatch();
    const { videos } = useSelector((state: IYoutubePlayerState) => state.youtube);

    const getDuration = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds - minutes * 60;
        return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`
    }

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p className={S.title}>Videos</p>
                <div style={{}}>
                    <Button sx={button} color="primary" variant="contained" onClick={() => dispatch(clearVideos({}))}>Clear All Videos</Button>
                    <Button sx={button} color="primary" variant="contained" onClick={() => dispatch({
                        type: "getVideosList"
                    })}>Fetch Videos</Button>

                </div>
            </div>
            {videos.map(video =>

                <div key={video.id} className={S.videoTile} style={{ boxShadow: '0 2px 15px #fff' }}>
                    <div onClick={() => dispatch(playVideo(video))}>
                        <img width={200} src={video?.metadata!.thumbnailUrl} alt={video?.metadata!.title} />
                    </div>
                    <div onClick={() => dispatch(playVideo(video))} className={S.metadata}>
                        <p>{video?.metadata!.title}</p>
                        <p>Duration</p>
                        <p>{getDuration(video?.metadata!.duration)}</p>
                        {video.played && <p>Played</p>}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Button sx={button} color="primary" variant="contained" onClick={() => dispatch(removeVideo(video))}>
                            <i className="fa fa-trash" style={{ fontSize: 24, color: 'orange' }}></i> &nbsp;&nbsp;Remove</Button>
                        <Button sx={button} color="primary" variant="contained" onClick={() => dispatch(updateTitle(video))}>
                            <i className="fa fa-edit" style={{ fontSize: 24, color: 'white' }}></i> &nbsp;&nbsp;Update Title</Button>
                    </div>
                </div>

            )}

        </div>
    );
}

export default VideosList;
