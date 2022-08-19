import React from 'react';
import './VideoPlayer.css'
import ReactPlayer from 'react-player';
import video1 from '../../../assets/ClassRoom/Video/video2.mp4'

const VideoPlayer = ({ videoref }) => {
    return (
        <div className='video  p-1 bg-purple-900'>
            <ReactPlayer sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation" width='45vw' className='w-full ' height='48vh' controls url={videoref} />
        </div>
    );
};

export default VideoPlayer;