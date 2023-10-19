function PDFSelection() {
    const pdfzElemen = document.querySelectorAll('.pdfz');
    pdfzElemen.forEach((pdfzElement, index) => {
      pdfzElement.addEventListener('click', () => {
        const pdfzNumber = index + 1;
        const pdfzString = `pdfz${pdfzNumber}`;
  
        // Remove "selected" class from all subject elements
        pdfzElemen.forEach((element) => {
          element.classList.remove('selected');
        });
  
        // Add "selected" class to the clicked subject element
        pdfzElement.classList.add('selected');
  
        localStorage.setItem('hpdfz', pdfzString);
  
        // Log the ID to the console
        const pdfID = pdfzElement.id;
        localStorage.setItem('pdfID', pdfID);
        iframe.src = `https://www.youtube.com/embed/${pdfID}`;
      });
    });
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
    checkAndSetupMobileBehavior()
  
  
  }