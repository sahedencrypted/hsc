if (!('ontouchstart' in window)) {

console.log('Touch is not supported');
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

miniPlayerBtn.addEventListener("click", toggleMiniPlayerMode)
function toggleMiniPlayerMode() {
  if (videoContainer.classList.contains("mini-player")) {
    document.exitPictureInPicture()
  } else {
    video.requestPictureInPicture()
    onloadlandeascpe=true;
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
  checkplaypause = "playing";
  videoContainer.classList.remove("paused")
})

video.addEventListener("pause", () => {
  checkplaypause ="paused";
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


//fullscreenmode
let vfullbtn = document.querySelector(".vfull-btn")
let vminim =document.querySelector(".vmini-btn")
function toggleopclf(vfisrtdiv,vsecenddiv,vContOfTwo){
  
  vContOfTwo.addEventListener("click", ()=>{
    if(vfisrtdiv.classList.contains("op")){
      vfisrtdiv.classList.remove("op");
      vfisrtdiv.classList.add("cl");
      vsecenddiv.classList.remove("cl");
      vsecenddiv.classList.add("op");
    }
    else if(vfisrtdiv.classList.contains("cl")){
      vfisrtdiv.classList.remove("cl");
      vfisrtdiv.classList.add("op");
      vsecenddiv.classList.remove("op");
      vsecenddiv.classList.add("cl");
    }
  })
}
toggleopclf(vfullbtn,vminim,fullScreenBtn);

fullScreenBtn.addEventListener("click", toggleFullScreenMode)
function toggleFullScreenMode() {
  if (document.fullscreenElement == null) {
    videoContainer.requestFullscreen();
    onloadlandeascpe=false;
    handleOrientationChange();
    if (screen.orientation) {
      // Set the orientation to landscape
      screen.orientation.lock("landscape-primary").then(function () {
        console.log("Orientation locked to landscape");
        handleOrientationChange();
      }).catch(function (error) {
        console.error("Could not lock orientation500: " + error);
        
      });
    } else {
      console.log("Screen.orientation API not supported");
    }
    

  } else {
    document.exitFullscreen();
    onloadlandeascpe=true;
    let speedBCc = document.querySelector('.lf-speedback-cont');
    speedBCc.setAttribute("style",``);
    if (screen.orientation) {
      // Set the orientation back to portrait
      screen.orientation.unlock().then(function () {
        console.log("Orientation unlocked");
      }).catch(function (error) {
        console.error("Could not unlock orientation: " + error);
      });
    } else {
      console.log("Screen.orientation API not supported");
    }
  }
}
//fixing spped back cont over the video
var videoheight="";
var margintodo ="";
var onloadlandeascpe=true;
 function setSpedbackFrameinMiddleinProtate(){
  if (window.innerWidth <= 600) {
    var targetDiv = document.querySelector('.video-container');
    var divHeight = targetDiv.offsetHeight;
    videoheight=divHeight;
    margintodo = (window.innerHeight - videoheight)/2;
    }
 }
function handleOrientationChange() {
  if (window.orientation === 90 || window.orientation === -90) {
    console.log("Device is in landscape mode");
    let speedBC = document.querySelector('.lf-speedback-cont');
    speedBC.setAttribute("style",``);
  } else {
    console.log("Device is not in landscape mode");
    console.log(videoheight);
    if(onloadlandeascpe===false){
      setSpedbackFrameinMiddleinProtate();
      let speedBC = document.querySelector('.lf-speedback-cont');
      speedBC.setAttribute("style",`height:${videoheight +6}px;margin-top:${margintodo-2.5}px;`);
    }
    else{
      
    }
    
  }
}

window.addEventListener("orientationchange", handleOrientationChange);

const oopen =document.querySelector(".op");
const cclose =document.querySelector(".cl");

video.addEventListener('loadeddata', function () {
  const loader =document.querySelector(".loaderrs");
  
  console.log("loaded");
});
video.addEventListener('waiting', function() {
  console.log('Video is buffering...');
});
document.addEventListener('DOMContentLoaded', function() {
  console.log('first time video load');

});
var checkplaypause = "";
let previousValue = document.querySelector('.current-time').innerText;
function trackUpdates() {
  setInterval(function() {
      const currentValue = document.querySelector('.current-time').innerText;
      if (currentValue !== previousValue) {
          console.log('Div value updated:', currentValue);
          previousValue = currentValue;
          video.addEventListener("play", () => {
          })
          if(videoContainer.classList.contains("paused")){
              console.log("animation is stopped due to video is paused")
          }
          
          
      }
      else{
        if(checkplaypause==="playing"){
          console.log("animation will be added");
        }
      }
  }, 1000); // Check every second
}
trackUpdates();

// loading animation
function runForSeconds(seconds) {
  const loaderr = document.querySelector(".loaderrs");
  loaderr.classList.remove("cl");
  loaderr.classList.add("op");
  
  console.log(`Function started with duration: ${seconds} seconds`);
  // Convert seconds to milliseconds
  const duration = seconds * 1000;
  setTimeout(function() {
      loaderr.classList.add("cl");
      loaderr.classList.remove("op");
      console.log(`Function completed after ${seconds} seconds`);
  }, duration);
}

runForSeconds(5);

}