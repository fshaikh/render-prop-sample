import React from 'react';
import PropTypes from 'prop-types';

export default class Video extends React.Component{
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidMount(){
        this.handleBehavior();
    }

    componentDidUpdate(){
        this.handleBehavior();
    }

    handleBehavior(){
        const video = this.videoRef.current;
        const isActive = this.props.isActive;
        console.log(isActive)
        isActive ? video.play() : video.pause();
    }

    render(){
        return (
            <video controls width={this.props.width} ref={this.videoRef}>
                <source src={this.props.src}
                        type={this.props.type}>
                </source>
            </video>
        );
    }
}

Video.propTypes = {
    width: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
};