import React, { useEffect } from 'react';
import S from './App.module.css';
import VideosList from './Views/VideosList';
import { useDispatch, useSelector } from 'react-redux';
import PlayerView from './Views/PlayerView';
import { IYoutubePlayerState } from "./redux/rootReducer";

function App() {
	const dispatch = useDispatch();
	const { playerData } = useSelector((state: IYoutubePlayerState) => state.youtube);

	useEffect(() => {
		dispatch({
			type: "getVideosList",
			payload: {}
		});
	}, []);

	return (
		<div className={S.app}>
			{playerData ?
				<PlayerView />
				: <VideosList />
			}
		</div>
	);
}

export default App;
