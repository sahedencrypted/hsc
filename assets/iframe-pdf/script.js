const refreshButton = document.querySelector('.refreshButton');
const pdfFrame = document.getElementById('pdfFrame');

refreshButton.addEventListener('click', () => {
    pdfFrame.src = pdfFrame.src;
    console.log("got the click")
    refreshButton.classList.add('rotate'); // Apply the rotate class to start the animation

  setTimeout(() => {
    refreshButton.classList.remove('rotate'); // Remove the rotate class after animation is done
  }, 6000);
  });


  document.addEventListener('DOMContentLoaded', () => {
    const pdfFrame = document.getElementById('pdfFrame');
    const refreshButton = document.querySelector('.refreshButton');
    const loadingBar = document.querySelector('.loading-progress');
  
    function updateLoadingBar(percentLoaded) {
      loadingBar.style.width = percentLoaded + '%';
      loadingBar.style.borderRadius = percentLoaded === 100 ? '2px' : '2px 0 0 2px';
    }
  
    function hideLoadingBar() {
      setTimeout(() => {
        loadingBar.style.display = 'none';
      }, 2000);
    }

   // Simulate loading progress when refresh button is clicked
    refreshButton.addEventListener('click', () => {
      loadingBar.style.width = '0';
      loadingBar.style.borderRadius = '2px 0 0 2px'; // Set border radius for loading progress
      loadingBar.style.display = 'block';
  
      let percentLoaded = 0;
      const interval = setInterval(() => {
        percentLoaded += 10;
        updateLoadingBar(percentLoaded);
  
        if (percentLoaded >= 100) {
          clearInterval(interval);
          hideLoadingBar();
        }
      }, 200);
    });
  
    pdfFrame.addEventListener('load', () => {
      updateLoadingBar(100);
      hideLoadingBar();
    });
  
    pdfFrame.addEventListener('loadstart', () => {
      updateLoadingBar(0);
      loadingBar.style.display = 'block';
    });
  
    pdfFrame.contentWindow.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const percentLoaded = (event.loaded / event.total) * 100;
        updateLoadingBar(percentLoaded);
      }
    });
  });

//close left right scrollbar and storing that data in localStorage  
const closeBtn = document.querySelector('.closebtn');
const arrowCont = document.querySelector('.arrow-cont');

// Check if the div should be displayed or not based on 
const isArrowContVisible = localStorage.getItem('arrowContVisible');
if (isArrowContVisible === 'false') {
    arrowCont.style.display = 'none';
}

closeBtn.addEventListener('click', () => {
    arrowCont.style.display = 'none';
    localStorage.setItem('arrowContVisible', 'false');
});

//dowmload link
const downloadButton = document.querySelector('.downloadButton');
let isHoverDisabled = false;

downloadButton.addEventListener('click', () => {
  if (!isHoverDisabled) {
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = 'https://drive.google.com/uc?export=download&id=18dxUcMyiGAXHzkB-3lt-uQ7hwdpOFGUd';

    // Disable hovering and add a 6s delay before initiating the download
    isHoverDisabled = true;
    downloadButton.style.opacity = '0.3';
    downloadButton.style.pointerEvents = 'none';

    setTimeout(() => {
      downloadLink.click(); // Simulate a click on the hidden anchor tag
      setTimeout(() => {
        isHoverDisabled = false;
        downloadButton.style.opacity = '0.5';
        downloadButton.style.pointerEvents = 'auto';
      }, 9000);
    }, 9000);
  }
});



const iframeContainer = document.getElementById('iframeContainer');
const fullButton = document.querySelector('.fullButton');
const minimizeButton = document.querySelector('.minimizeButton');

fullButton.addEventListener('click', function () {
  if (iframeContainer.requestFullscreen) {
    iframeContainer.requestFullscreen();
  } else if (iframeContainer.mozRequestFullScreen) {
    iframeContainer.mozRequestFullScreen();
  } else if (iframeContainer.webkitRequestFullscreen) {
    iframeContainer.webkitRequestFullscreen();
  } else if (iframeContainer.msRequestFullscreen) {
    iframeContainer.msRequestFullscreen();
  }

  fullButton.style.display = 'none';
  minimizeButton.style.display = 'block';
});

minimizeButton.addEventListener('click', function () {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }

  minimizeButton.style.display = 'none';
  fullButton.style.display = 'block';
});





//zoom section