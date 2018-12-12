import React , {useEffect} from 'react';
import PropTypes from 'prop-types';

const VideoFunc = (props) => {
    let videoRef = React.createRef();

    useEffect(() => {
        const video = videoRef.current;
        const isActive = props.isActive;
        isActive ? video.play() : video.pause();
    });

    return (
        <video controls width={props.width} ref={videoRef}>
            <source src={props.src}
                    type={props.type}>
            </source>
        </video>
    );
};

VideoFunc.propTypes = {
    width: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
};

export default VideoFunc