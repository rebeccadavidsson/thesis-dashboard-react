import React from 'react';
import ReactPlayer from 'react-player'

const VideoPlayer = () => {
    return (
        <div className="react-player-wrapper" >
            <ReactPlayer
                className='react-player'
                width='100%'
                height="100%"
                controls={true}
                url={'https://youtu.be/cs4lHu95CiI'} />
        </div>
    )
}
export default VideoPlayer;