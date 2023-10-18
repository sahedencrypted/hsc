document.addEventListener('DOMContentLoaded', function() {
    // Check if the viewport width is less than or equal to 600px
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    
    // Function to handle the media query change
    function handleMediaChange(e) {
      if (e.matches) {
        // The viewport is less than or equal to 600px (phone or smaller screen)
        setupMobileBehavior();
      }
    }
  
    // Initial check and attach a listener to respond to changes
    handleMediaChange(mediaQuery);
    mediaQuery.addListener(handleMediaChange);
  });
  
  function setupMobileBehavior() {
    // Get references to all divs with the class "pdfz"
    const clickableDivs = document.querySelectorAll('.pdfz');
  
    // Add click event listeners to each clickable div
    clickableDivs.forEach(function(div) {
      div.addEventListener('click', function() {
        // Call the function to scroll down smoothly by 60vh
        scrollDownByViewportHeight(40);
      });
    });
  
    // Function to scroll down smoothly by a percentage of viewport height
    function scrollDownByViewportHeight(percentage) {
      const currentY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const targetY = currentY + (viewportHeight * (percentage / 100));
  
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    }
  }
  