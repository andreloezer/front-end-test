import { Fragment, useRef, useEffect, useState } from 'react';

import './TrendingVideo.css';

const TrendingVideo = (props) => {

    const [ videoProgress, setVideoProgress ] = useState(0);

    const UPDATE_DELAY = 100;
    
    const videoEl = useRef();

    // Update progress bar
    useEffect(() => {
        setInterval(() => {
            const currentTime = videoEl.current.currentTime;
            const duration = videoEl.current.duration;
            const currentProgress = 100 - ((duration - currentTime) / duration * 100);

            setVideoProgress(currentProgress);
        }, UPDATE_DELAY);
    }, []);

    const progressBarClass = props.showControls ? 'progress-bar hidden' : 'progress-bar';

    // Free to use video downloaded from:
    // https://www.pexels.com/video/a-guitarist-member-of-a-band-playing-the-electric-guitar-3345545/

    return (
        <Fragment>
            <video
                ref={videoEl}
                className='trending-video'
                src='/video.mp4'
                autoPlay
                loop
                controls={props.showControls}
                muted={!props.showControls}
            ></video>
            <hr
                style={{width: `${videoProgress}%`}}
                className={progressBarClass}
            ></hr>
        </Fragment>
    );
};

export default TrendingVideo;
