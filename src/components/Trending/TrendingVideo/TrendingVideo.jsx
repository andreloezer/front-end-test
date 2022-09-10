import { Fragment } from 'react';

import './TrendingVideo.css';

const TrendingVideo = (props) => {
    const videoProgress = 29.23;
    const progressBarClass = props.showControls ? 'progress-bar hidden' : 'progress-bar';

    return (
        <Fragment>
            <video
                className='trending-video'
                poster={props.poster}
                autoplay
                controls={props.showControls}
                muted={props.showControls}
            ></video>
            <hr
                style={{width: `${videoProgress}%`}}
                className={progressBarClass}
            ></hr>
        </Fragment>
    );
};

export default TrendingVideo;
