

function setupMobileBehavior() {
  // Get references to all divs with the class "pdfz"
  const clickableDivs = document.querySelectorAll('.pdfz');

  // Get the height of your navbar (56px)
  const navbarHeight = 56;

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











function addmarquee(){
  
  function addMarqueeEffect(row) {

    
     
    const cpt = row.querySelector('.cpt');
    if (cpt) {
      // Add a "fulltext" class to the cpt div
      cpt.classList.add('fulltext');
  
      // Create a marquee element
      const marquee = document.createElement('marquee');
      marquee.appendChild(cpt.cloneNode(true)); // Clone the entire <p> element
      cpt.parentNode.replaceChild(marquee, cpt); // Replace <p> with <marquee>
  
      // Stop the marquee effect after sliding twice
      let slideCount = 0;
      const interval = setInterval(() => {
        slideCount++;
        if (slideCount === 1) {
          clearInterval(interval); // Stop the sliding after 1 iterations
          removeMarqueeEffect(row);
          const allcpt = document.querySelectorAll(".cpt");
      allcpt.forEach((element) => {
        element.classList.remove('fulltext');
      });
        }
      }, marquee.scrollAmount * 1000); // Calculate the interval based on marquee speed
    }
  }
  
  function removeMarqueeEffect(row) {
    const marquee = row.querySelector('marquee');
  
    if (marquee) {
      const cpt = marquee.querySelector('.cpt');
      row.replaceChild(cpt, marquee); // Replace <marquee> with <p>
    }
  }
  
  // Find rows with the selected class or other criteria
  const rows = document.querySelectorAll('.rows');
  
  rows.forEach((row) => {
    // Check for any additional criteria (e.g., file-icon, chapt, etc.)
    if (row.classList.contains('selected')) {
      addMarqueeEffect(row);
    }
  });
  
  
  
  

   
  
}






function allRowScript(){
  console.log("clicked")
  addmarquee();
  


}









