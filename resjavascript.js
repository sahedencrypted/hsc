

function setupMobileBehavior() {
  // Get references to all divs with the class "pdfz"
  const clickableDivs = document.querySelectorAll('.pdfz');

  // Get the height of your navbar (57px)
  const navbarHeight = 57;

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



document.addEventListener('DOMContentLoaded', function() {
  // Check if the viewport width is less than or equal to 600px (for phones)
  if (window.innerWidth <= 600) {
    // Run the JavaScript code for phones
    //console.log("got the phone")
    setupMobileBehavior();
  }
});


