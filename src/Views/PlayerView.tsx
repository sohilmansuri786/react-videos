import React, { useState } from 'react';
import S from '../App.module.css';
import YouTube, { YouTubePlayer } from 'react-youtube';
import { Button, IconButton, Slider } from '@mui/material';
import { Pause, PlayArrow, VolumeDown, VolumeOff, VolumeUp } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { playVideo } from '../redux/YoutubePlayer/YoutubePlayerSlice';
import { IYoutubePlayerState } from '../redux/rootReducer';

const iconButton = {
	backgroundColor: '#6185BB',
	color: '#000',
	margin: '0 5px',
	'&:hover': {
		backgroundColor: '#6185BB99',
	}
};
const slider = {
	color: '#6185BB',
	margin: '0 15px',
	width: 'calc(100% - 310px)'
}
export const button = {
	backgroundColor: '#6185BB',
	color: '#000',
	fontWeight: '600',
	textTransform: 'uppercase',
	width: 'fit-content',
	margin: '0 5px',
	padding: '4px 12px',
	fontSize: 12
}

const PlayerView = () => {
	const dispatch = useDispatch();
	const { playerData } = useSelector((state: IYoutubePlayerState) => state.youtube);

	const [player, setPlayer] = useState<YouTubePlayer>();
	const [time, setTime] = React.useState(0);
	const [volume, setVolume] = React.useState(50);

	const opts = {
		height: '500px',
		width: '100%',
		playerVars: {
			autoplay: 1,
			controls: 0,
			volume: 30
		},
	};

	const handleSlider = (value: any) => {
		player?.seekTo(value, true);
		setTime(value);
	}

	const handleVolume = (volume: number) => {
		player.setVolume(volume);
		setVolume(volume);
	}

	return (
		<div>
			<YouTube videoId={playerData?.metadata?.sid} opts={opts} title={playerData?.metadata?.title} onReady={(event) => setPlayer(event.target)} />
			<div className={S.controls}>
				<IconButton sx={iconButton} size={'small'} aria-label="play" onClick={() => player?.playVideo()}>
					<PlayArrow fontSize="small" />
				</IconButton>
				<IconButton sx={iconButton} size={'small'} aria-label="pause" onClick={() => player?.pauseVideo()}>
					<Pause fontSize="small" />
				</IconButton>
				<Slider sx={slider} value={time} min={0} max={playerData?.metadata?.duration} onChange={(e, v) => handleSlider(v)} />
				{
					volume === 50 ?
						<IconButton sx={iconButton} size={'small'} aria-label="volume" onClick={() => handleVolume(100)} >
							<VolumeDown fontSize="small" />
						</IconButton>
						:
						volume === 100 ?
							<IconButton sx={iconButton} size={'small'} aria-label="volume" onClick={() => handleVolume(0)} >
								<VolumeUp fontSize="small" />
							</IconButton>
							:
							<IconButton sx={iconButton} size={'small'} aria-label="volume" onClick={() => handleVolume(50)} >
								<VolumeOff fontSize="small" />
							</IconButton>
				}
				<Button sx={button} color="primary" variant="contained" onClick={() => dispatch(playVideo(null))}>Back to Home</Button>
			</div>
		</div >
	);
}

export default PlayerView;
