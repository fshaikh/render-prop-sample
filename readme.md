## Motivation
I was browsing espncricinfo.com and came across "25 Questions" section where they invite a cricketer and ask him 25 questions. I was watching the video which featured the great Sir Viv Richards. When I clicked the video, a video ad started playing first. I saw the length of the video ad to be around 30-40 seconds and it was about australian tourism. Not too keen on watching the video, I switched the browser window to do some other work. The feature video didnt start playing even after a couple of minutes so I switched back to the espncricinfo website and saw the video was actually paused and started playing again.
  This kind of piqued my interest as to how the video is getting paused and played again when the user is not having the browser tab as active. I started researching on this and came across HTML5 Page Visibility API.

### Page Visibility API
Here is the code which implements the same using HTML5 video and page visibility API. When the user is active on the page, video keeps playing. When the user switches the app (for eg: ALT+TAB, CTRL+TAB, CTRL+T or minimize), the video stops playing.

```html
<!DOCTYPE <!DOCTYPE html>
<html>
<head>
    <script src="pageVisibility.js"></script>
</head>
<body>
        <video controls width="350">
                <source src="./media/video.mp4"
                        type="video/mp4">
            </video>
</body>
</html>
```

```javascript
let video;
document.addEventListener('DOMContentLoaded',function(event){
    document.addEventListener("visibilitychange", ()=>handleVisibilityChange(document.hidden));
    window.addEventListener('blur',() => handleVisibilityChange(true))
    window.addEventListener('focus',() => handleVisibilityChange(false))
    video = document.querySelector('video');
});


function handleVisibilityChange(hidden) {
    hidden ? video.pause() : video.play()
}
```

### React Implementation using render props
I wanted to implement the same in React by creating 2 components:
Video Component which takes the src url and plays or pauses the video based on the isActive props
AppVisibility Component which encapsulates the Page Visibility API

Since render props is a great pattern for implementing component behaviour reuse, I decided to implement the same. Below is the calling site code.
```javascript
const src = 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4';
ReactDOM.render(
    <AppVisibilityManager render={(isActive) => <Video
        width="350"
        src={src}
        type='video/mp4'
        isActive={isActive} />}>
    </AppVisibilityManager>

, document.querySelector('#root'));
```

