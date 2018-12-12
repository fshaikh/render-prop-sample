import React from 'react';
import ReactDOM from 'react-dom';
import Video from './Patterns/render-props/AppVisibility/Video';
import AppVisibilityManager from './Patterns/render-props/AppVisibility/AppVisibilityManager';

const src = 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4';
ReactDOM.render(
    <AppVisibilityManager render={(isActive) => <Video
        width="350"
        src={src}
        type='video/mp4'
        isActive={isActive} />}>
    </AppVisibilityManager>

, document.querySelector('#root'));
