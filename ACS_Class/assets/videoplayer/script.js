const playPauseBtn = document.querySelector(".play-pause-btn")
const fullScreenBtn = document.querySelector(".full-screen-btn")
const miniPlayerBtn = document.querySelector(".mini-player-btn")
const muteBtn = document.querySelector(".mute-btn")
const speedBtn = document.querySelector(".speed-btn")
const currentTimeElem = document.querySelector(".current-time")
const totalTimeElem = document.querySelector(".total-time")
const previewImg = document.querySelector(".preview-img")
const thumbnailImg = document.querySelector(".thumbnail-img")
const volumeSlider = document.querySelector(".volume-slider")
const videoContainer = document.querySelector(".video-container")
const timelineContainer = document.querySelector(".timeline-container")
const video = document.querySelector("video")

document.addEventListener("keydown", e => {
  const tagName = document.activeElement.tagName.toLowerCase()

  if (tagName === "input") return

  switch (e.key.toLowerCase()) {
    case " ":
      if (tagName === "button") return
    case "k":
      togglePlay()
      break
    case "f":
      toggleFullScreenMode()
      break
    case "i":
      toggleMiniPlayerMode()
      break
    case "m":
      toggleMute()
      break
    case "arrowleft":
    case "j":
      skip(-5)
      break
    case "arrowright":
    case "l":
      skip(5)
      break
    case "c":
      toggleCaptions()
      break
  }
})

// Timeline
timelineContainer.addEventListener("mousemove", handleTimelineUpdate)
timelineContainer.addEventListener("mousedown", toggleScrubbing)
document.addEventListener("mouseup", e => {
  if (isScrubbing) toggleScrubbing(e)
})
document.addEventListener("mousemove", e => {
  if (isScrubbing) handleTimelineUpdate(e)
})

let isScrubbing = false
let wasPaused
function toggleScrubbing(e) {
  const rect = timelineContainer.getBoundingClientRect()
  const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
  isScrubbing = (e.buttons & 1) === 1
  videoContainer.classList.toggle("scrubbing", isScrubbing)
  if (isScrubbing) {
    wasPaused = video.paused
    video.pause()
  } else {
    video.currentTime = percent * video.duration
    if (!wasPaused) video.play()
  }

  handleTimelineUpdate(e)
}

function handleTimelineUpdate(e) {
  const rect = timelineContainer.getBoundingClientRect()
  const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
  const previewImgNumber = Math.max(
    1,
    Math.floor((percent * video.duration) / 10)
  )
  const previewImgSrc = `assets/previewImgs/preview${previewImgNumber}.jpg`
  previewImg.src = previewImgSrc
  timelineContainer.style.setProperty("--preview-position", percent)

  if (isScrubbing) {
    e.preventDefault()
    thumbnailImg.src = previewImgSrc
    timelineContainer.style.setProperty("--progress-position", percent)
  }
}

// Playback Speed
speedBtn.addEventListener("click", changePlaybackSpeed)

function changePlaybackSpeed() {
  let newPlaybackRate = video.playbackRate + 0.25
  if (newPlaybackRate > 2) newPlaybackRate = 0.25
  video.playbackRate = newPlaybackRate
  speedBtn.textContent = `${newPlaybackRate}x`
}


//progess bar
const progressBar = document.getElementById('progress-bar');
video.addEventListener('progress', () => {
  const bufferedEnd = video.buffered.end(0);
  const duration = video.duration;

  if (!isNaN(duration)) {
    // Calculate the percentage of video buffered
    const bufferedPercent = (bufferedEnd / duration) * 100;
    // Update the progress bar width accordingly
    progressBar.style.width = `${bufferedPercent}%`;
  }
});

video.addEventListener('canplaythrough', () => {
  // Hide the progress bar when the video can play without buffering
  progressBar.style.width = '0';
});


// Duration
video.addEventListener("loadeddata", () => {
  totalTimeElem.textContent = formatDuration(video.duration)
})

video.addEventListener("timeupdate", () => {
  currentTimeElem.textContent = formatDuration(video.currentTime)
  const percent = video.currentTime / video.duration
  timelineContainer.style.setProperty("--progress-position", percent)
})

const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
})
function formatDuration(time) {
  const seconds = Math.floor(time % 60)
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600)
  if (hours === 0) {
    return `${minutes}:${leadingZeroFormatter.format(seconds)}`
  } else {
    return `${hours}:${leadingZeroFormatter.format(
      minutes
    )}:${leadingZeroFormatter.format(seconds)}`
  }
}

function skip(duration) {
  video.currentTime += duration
}

// Volume
muteBtn.addEventListener("click", toggleMute)
volumeSlider.addEventListener("input", e => {
  video.volume = e.target.value
  video.muted = e.target.value === 0
})

function toggleMute() {
  video.muted = !video.muted
}

video.addEventListener("volumechange", () => {
  volumeSlider.value = video.volume
  let volumeLevel
  if (video.muted || video.volume === 0) {
    volumeSlider.value = 0
    volumeLevel = "muted"
  } else if (video.volume >= 0.5) {
    volumeLevel = "high"
  } else {
    volumeLevel = "low"
  }

  videoContainer.dataset.volumeLevel = volumeLevel
})

// View Modes
fullScreenBtn.addEventListener("click", toggleFullScreenMode)
miniPlayerBtn.addEventListener("click", toggleMiniPlayerMode)



//fullscreenmode
function toggleFullScreenMode() {
  if (document.fullscreenElement == null) {
    videoContainer.requestFullscreen();
    checkDimensions();
    if (screen.orientation) {
      // Set the orientation to landscape
      screen.orientation.lock("landscape-primary").then(function () {
        console.log("Orientation locked to landscape");
      }).catch(function (error) {
        console.error("Could not lock orientation: " + error);
      });
    } else {
      console.log("Screen.orientation API not supported");
    }
    

  } else {
    document.exitFullscreen();
    let speedBCc = document.querySelector('.lf-speedback-cont');
    speedBCc.setAttribute("style",``);
  }
}






function toggleMiniPlayerMode() {
  if (videoContainer.classList.contains("mini-player")) {
    document.exitPictureInPicture()
  } else {
    video.requestPictureInPicture()
  }
}

document.addEventListener("fullscreenchange", () => {
  videoContainer.classList.toggle("full-screen", document.fullscreenElement)
})

video.addEventListener("enterpictureinpicture", () => {
  videoContainer.classList.add("mini-player")
})

video.addEventListener("leavepictureinpicture", () => {
  videoContainer.classList.remove("mini-player")
})

// Play/Pause
playPauseBtn.addEventListener("click", togglePlay)
video.addEventListener("click", togglePlay)

function togglePlay() {
  video.paused ? video.play() : video.pause()
  
}

video.addEventListener("play", () => {
  videoContainer.classList.remove("paused")
})

video.addEventListener("pause", () => {
  videoContainer.classList.add("paused")
})


//settings
const settingsBtn = document.querySelector(".psettings");
settingsBtn.addEventListener("click",()=>{
  console.log("clicked");
})

function checMobileBehavior() {
  if (window.innerWidth <= 600) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'assets/videoplayer/responsive.css';
    document.head.appendChild(link);
  }
  else{
    var link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.type = 'text/css';
    link2.href = 'assets/videoplayer/style.css';
    document.head.appendChild(link2);
  }
}
checMobileBehavior();



//speed playback animation section
document.addEventListener('DOMContentLoaded', function () {
  var speedSvg = document.querySelector('.right-sp');
  var animatedDivs = document.querySelectorAll('.speed-svg-icons');
  var lastClickTime = 0;

  speedSvg.addEventListener('click', function () {
      var currentTime = new Date().getTime();
      var timeSinceLastClick = currentTime - lastClickTime;

      // Check if it's a double click on mobile (within 500 milliseconds)
      if (timeSinceLastClick <= 500) {
          // Apply the initial animation class for the first animated div
          animatedDivs[0].classList.add('animate-class-1');
          // Set opacity to 0.8 during the animation
          animatedDivs[0].classList.remove('animate-class-1');
          animatedDivs[0].style.opacity = '0.8';
          // After 0.5 seconds, apply the same animation to the second item
          setTimeout(function () {
              animatedDivs[1].classList.add('animate-class-1');
              animatedDivs[1].style.opacity = '0.7';
              animatedDivs[1].classList.remove('animate-class-1');
              animatedDivs[0].style.opacity = '0';
              // After another 0.5 seconds, apply the same animation to the third item
              setTimeout(function () {
                  animatedDivs[2].classList.add('animate-class-1');
                  animatedDivs[2].style.opacity = '0.9';
                  animatedDivs[2].classList.remove('animate-class-1');
                  animatedDivs[1].style.opacity = '0';
                  setTimeout(function () {
                    animatedDivs[2].style.opacity = '0';
                  }, 230);
              }, 200);
          }, 300);

          // Provide instructions or perform additional actions if needed
          skip(5)
          
      }
      
      lastClickTime = currentTime;
  });
});

//left side speed playback animation
document.addEventListener('DOMContentLoaded', function () {
  var speedSvg = document.querySelector('.left-sp');
  var animatedDivs = document.querySelectorAll('.l-speed-svg-icons');
  var lastClickTime = 0;

  speedSvg.addEventListener('click', function () {
      var currentTime = new Date().getTime();
      var timeSinceLastClick = currentTime - lastClickTime;

      // Check if it's a double click on mobile (within 500 milliseconds)
      if (timeSinceLastClick <= 500) {
          // Apply the initial animation class for the first animated div
          animatedDivs[2].classList.add('l-animate-class-1');
          // Set opacity to 0.8 during the animation
          animatedDivs[2].classList.remove('l-animate-class-1');
          animatedDivs[2].style.opacity = '0.8';
          // After 0.5 seconds, apply the same animation to the second item
          setTimeout(function () {
              animatedDivs[1].classList.add('l-animate-class-1');
              animatedDivs[1].style.opacity = '0.7';
              animatedDivs[1].classList.remove('l-animate-class-1');
              animatedDivs[2].style.opacity = '0';
              // After another 0.5 seconds, apply the same animation to the third item
              setTimeout(function () {
                  animatedDivs[0].classList.add('l-animate-class-1');
                  animatedDivs[0].style.opacity = '0.9';
                  animatedDivs[0].classList.remove('l-animate-class-1');
                  animatedDivs[1].style.opacity = '0';
                  setTimeout(function () {
                    animatedDivs[0].style.opacity = '0';
                  }, 230);
              }, 200);
          }, 300);

          // Provide instructions or perform additional actions if needed
          skip(-5)
          
      }
      
      lastClickTime = currentTime;
  });
});


//
function checkDimensions() {
  if (window.innerWidth <= 600) {
  // Get the reference to the target div
  var targetDiv = document.querySelector('.video-container');
  let speedBC = document.querySelector('.lf-speedback-cont');
  var divHeight = targetDiv.offsetHeight;
  let margintodo = (window.innerHeight - divHeight)/2;
  speedBC.setAttribute("style",`height:${divHeight +6}px;margin-top:${margintodo-2.5}px;`);
  }
  else{

  }
}

//play pause animation
const playsvg = `
<div class="p-svg-cont">
<svg class="play-but" viewBox="-3 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>play</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-419.000000, -571.000000)" fill="#ffffff"> <path d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554" id="play" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
</div>
`;
const pausesvg = `
<div class="p-svg-cont">
<svg class="pause-but" viewBox="-1 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>pause [#1006]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-227.000000, -3765.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M172,3605 C171.448,3605 171,3605.448 171,3606 L171,3612 C171,3612.552 171.448,3613 172,3613 C172.552,3613 173,3612.552 173,3612 L173,3606 C173,3605.448 172.552,3605 172,3605 M177,3606 L177,3612 C177,3612.552 176.552,3613 176,3613 C175.448,3613 175,3612.552 175,3612 L175,3606 C175,3605.448 175.448,3605 176,3605 C176.552,3605 177,3605.448 177,3606" id="pause-[#1006]"> </path> </g> </g> </g> </g></svg>
</div>
`;
const svgCont = document.querySelector(".middle-pause");
const ggi =document.querySelector(".video-container");
svgCont.addEventListener("click", function(){
  if(ggi.classList.contains("paused")){
   console.log("playing");
   svgCont.innerHTML=pausesvg;
   setTimeout(function () {
    svgCont.innerHTML="";
    }, 5630);
   togglePlay();
  }
  else{
    console.log("paused");
    svgCont.innerHTML=playsvg;
    
    togglePlay();
  }
})

