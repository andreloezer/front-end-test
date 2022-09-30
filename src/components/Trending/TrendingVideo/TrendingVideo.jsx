import { Fragment, useRef, useEffect, useState } from 'react';

import './TrendingVideo.css';

const TrendingVideo = (props) => {

    const [ progressBarWidth, setProgressBarWidth ] = useState(0);

    const UPDATE_DELAY = 100;
    
    const videoEl = useRef();

    // Update progress bar
    useEffect(() => {
        setInterval(() => {
            const currentTime = videoEl.current.currentTime;
            const duration = videoEl.current.duration;
            const currentProgress = 100 - ((duration - currentTime) / duration * 100);

            setProgressBarWidth(currentProgress);
        }, UPDATE_DELAY);
    }, []);

    // Update video progress
    const progressbarClickHandler = (event) => {
        const barWidth = event.target.clientWidth;
        const clickedX = event.clientX;

        const newProgress = 100 - ((barWidth - clickedX) / barWidth * 100);
        const newVideoTime = newProgress * videoEl.current.duration / 100;

        videoEl.current.currentTime = newVideoTime;
        setProgressBarWidth(newProgress);
    };

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
                style={{width: `${progressBarWidth}%`}}
                className={progressBarClass}
            ></hr>
            <hr
                className="progressBarClickable"
                onClick={progressbarClickHandler}
            />
        </Fragment>
    );
};

export default TrendingVideo;
