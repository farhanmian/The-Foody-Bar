import React, { Fragment, useEffect, useState } from 'react';
import classes from './YoutubeVideo.module.css';

function YoutubeVideo(props) {
    const [videoId, setVideoId] = useState();
    const [showVideo, setShowVideo] = useState(false);

    const toggleShowVideoHandler = () => {
        const doesShow = showVideo;
        setShowVideo(!doesShow);
    }


    useEffect(() => {
        const fetchVideoId = async (search) => {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${process.env.REACT_APP_VIDEO_API_KEY}`);
            const data = await response.json();
            setVideoId(data.items[0].id.videoId);
        }
        fetchVideoId(props.search)
    }, [props.search])

    return (
        <Fragment>

            <button onClick={toggleShowVideoHandler} className={classes.Button}>{!showVideo ? 'Watch Video' : 'Hide Video'}</button>

            {showVideo &&
                <iframe className={classes.VideoContainer} style={{ display: 'block', margin: 'auto', marginTop: '2rem', border: '1px solid rgb(155, 154, 154)', padding: '.5rem', borderRadius: '3px' }} src={`http://www.youtube.com/embed/${videoId}`}
                    title="Watch Recipe Video"
                    display="initial"
                    position="relative"
                    frameBorder="0"
                />
            }
        </Fragment>
    );
}

export default YoutubeVideo;