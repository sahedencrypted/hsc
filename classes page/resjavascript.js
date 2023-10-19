

function setupMobileBehavior() {
  // Get references to all divs with the class "pdfz"
  const clickableDivs = document.querySelectorAll('.pdfz');

  // Get the height of your navbar (55px)
  const navbarHeight = 55;

  // Add click event listeners to each clickable div
  clickableDivs.forEach(function(div) {
    div.addEventListener('click', function() {
      // Call the function to scroll to the target div with id "iframeContainer"
      scrollToTargetDiv('#iframeContainer', navbarHeight);
    });
  });

  // Function to scroll to a target div by its id, adjusting for navbar height
  function scrollToTargetDiv(targetId, navbarHeight) {
    const targetDiv = document.querySelector(targetId);
    if (targetDiv) {
      const targetPosition = targetDiv.getBoundingClientRect().top - navbarHeight;
      window.scrollTo({
        top: window.scrollY + targetPosition,
        behavior: 'smooth'
      });
    }
  }
}



function checkAndSetupMobileBehavior() {
  if (window.innerWidth <= 600) {
    setupMobileBehavior();
    //console.log("scroll button clicked");
  }
}


