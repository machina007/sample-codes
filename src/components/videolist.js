import React from 'react';
import VideoPlayer from './videoplayer'
const VideoList = (props) =>{
	const videoItems = props.videos.map((video)=>{
		return <VideoPlayer
        onVideoSelect = {props.onVideoSelect}		
		key = {video.etag} 
		video = {video}/>
	});
	return (
	      <ul className = "col-md-4 list-group">
		  {videoItems}    
		  </ul>
	);
};

export default VideoList;