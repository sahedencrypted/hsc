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
        iframe.src = `https://drive.google.com/file/d/${pdfID}/preview`;
        var ttf = document.getElementById("pdfFrame");
        ttf.classList.toggle("skeleton");
      });
    });
  }