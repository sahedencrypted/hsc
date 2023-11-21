if (!('ontouchstart' in window)) {
var link2 = document.createElement('link');
link2.rel = 'stylesheet';
link2.type = 'text/css';
link2.href = 'assets/videoplayer/style.css';
document.head.appendChild(link2);

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
      skip(-10)
      break
    case "arrowright":
    case "l":
      skip(10)
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
  if (duration < 0) {
    LeftsideSpeedBackAnimation();
  }
  else{
    RightsideSpeedBackAnimation();
  }
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


//settings
const settingsBtn = document.querySelector(".psettings");
settingsBtn.addEventListener("click",()=>{
  console.log("clicked");
})


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


  } else {
    document.exitFullscreen();

  
  }
}
//fix full-mini button on backbutton
document.addEventListener('fullscreenchange', ()=>{
  console.log("hello")
  if(document.fullscreenElement == null){
    console.log(0)
      vfullbtn.classList.remove("cl");
      vfullbtn.classList.add("op");
      vminim.classList.remove("op");
      vminim.classList.add("cl");
    
  }
  
  });
// Play/Pause
var checkplaypause = "paused";
const playpasuefcont = document.querySelector(".play-pause-cont")
const pauseBtnn = document.querySelector(".play-svg-cont")
const PlayBtnn = document.querySelector(".pause-svg-cont")
const controlsCont = document.querySelector(".video-controls-container");
const habijabi = document.querySelector(".lf-speedback-cont");

function PlyPasAnimation(animationCont,animatedChild,closediv){
  closediv.style.display="none";
  animationCont.style.opacity="1";
  animatedChild.classList.add('animated');

  setTimeout(function() {
    closediv.style.display="";
    animationCont.style.opacity="0";
    animatedChild.classList.remove('animated');
  }, 800);
}
habijabi.addEventListener("click", togglePlay)
playPauseBtn.addEventListener("click", togglePlay)

function togglePlay() {
  video.paused ? video.play() : video.pause()
  
}
let myhoverTimeout;
video.addEventListener("play", () => {
  checkplaypause = "playing";
  PlyPasAnimation(playpasuefcont,PlayBtnn,pauseBtnn);
  controlsCont.style.opacity="0"
  videoContainer.classList.remove("paused")
})

video.addEventListener("pause", () => {
  checkplaypause ="paused";
  clearTimeout(myhoverTimeout);
  PlyPasAnimation(playpasuefcont,pauseBtnn,PlayBtnn);
  videoContainer.classList.add("paused")
  controlsCont.style.opacity="1"
  videoContainer.style.cursor="";
})
//hover over video

videoContainer.addEventListener("mouseover", function () {
  console.log("over")
  console.log(checkplaypause)
  if(checkplaypause==="playing"){
  controlsCont.style.opacity="1"
  videoContainer.style.cursor="";
  myhoverTimeout =setTimeout(function() {
    controlsCont.style.opacity="0"
    videoContainer.style.cursor="none";
  }, 3000);
  }
  
});
videoContainer.addEventListener("mouseout", function () {
  console.log("out")
  clearTimeout(myhoverTimeout);
  if(checkplaypause==="playing"){
    controlsCont.style.opacity="0"
  }
  
});


//loading animation
const loaderr = document.querySelector(".loaderrs");
const plyPauseCont = document.querySelector(".play-pause-cont");
const getsrcchangeclick = document.getElementById("pdfs");
const controlbar =document.querySelector(".video-controls-container")

function loadingAnimatinStart(){
  if(checkplaypause === "paused"){
  controlbar.style.opacity = "0";
  plyPauseCont.classList.add("cl");
  loaderr.classList.remove("cl");
  loaderr.classList.add("op");
  console.log("if")
  
  }else{
  plyPauseCont.classList.add("cl");
  loaderr.classList.remove("cl");
  loaderr.classList.add("op");
  console.log("else")
  }
}
function loadingAnimatinStop(){
  if(checkplaypause === "paused"){
  controlbar.style.opacity = "1";
  loaderr.classList.remove("op")
  loaderr.classList.add("cl");
  plyPauseCont.classList.remove("cl");
  }else{
  loaderr.classList.remove("op")
  loaderr.classList.add("cl");
  plyPauseCont.classList.remove("cl");
  }
}
getsrcchangeclick.addEventListener("click",()=>{
  addThisTosrcCahngeEvnt()
})
function addThisTosrcCahngeEvnt(){
   loadingAnimatinStart();
   togglePlay();

}
video.addEventListener('loadeddata', function () {
  loadingAnimatinStop();
});


document.addEventListener('DOMContentLoaded', function() {
  checkplaypause="paused"
  loadingAnimatinStart();
});

video.addEventListener('playing', function() {
  loadingAnimatinStop();
  console.log('Video is playing again after buffering.');
});


video.addEventListener('waiting', function() {
  console.log('Video is buffering...');
  loadingAnimatinStart();
  
});
video.addEventListener('error', (event) => {
  console.error('Video error00000:', event.message);
});



document.addEventListener('keydown', function(e) {
      // Check if the pressed key is the spacebar (keyCode 32)
      if (e.keyCode === 32) {
        // Prevent the default scroll behavior
        e.preventDefault();
      }
    });


//speded anaimation
const leftCont = document.querySelector(".lefttextrt")
const RightCont = document.querySelector(".textrt")
function startspedd(){
  RightCont.style.opacity="1"
}
function stopspedd(){
  RightCont.style.opacity="0"
}

function LFstartspedd(){
  leftCont.style.opacity="1"
}
function LFstopspedd(){
  leftCont.style.opacity="0"
}

function RightsideSpeedBackAnimation(){
  startspedd();
  var animatedDivs = document.querySelectorAll('.speed-svg-icons');

  animatedDivs[0].classList.add('animate-class-1');
  animatedDivs[0].classList.remove('animate-class-1');
  animatedDivs[0].style.opacity = '0.8';
  setTimeout(function () {
      animatedDivs[1].classList.add('animate-class-1');
      animatedDivs[1].style.opacity = '0.7';
      animatedDivs[1].classList.remove('animate-class-1');
      animatedDivs[0].style.opacity = '0';
      setTimeout(function () {
          animatedDivs[2].classList.add('animate-class-1');
          animatedDivs[2].style.opacity = '0.9';
          animatedDivs[2].classList.remove('animate-class-1');
          animatedDivs[1].style.opacity = '0';
          setTimeout(function () {
            animatedDivs[2].style.opacity = '0';
            stopspedd();
          }, 230);
      }, 200);
  }, 300);
}

function LeftsideSpeedBackAnimation(){
  LFstartspedd();
  var animatedDivs = document.querySelectorAll('.l-speed-svg-icons');

  animatedDivs[2].classList.add('l-animate-class-1');
  animatedDivs[2].classList.remove('l-animate-class-1');
  animatedDivs[2].style.opacity = '0.8';
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
            LFstopspedd();
          }, 230);
      }, 200);
  }, 300);
}














}


