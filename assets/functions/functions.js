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



  function extractNumberFromString(inputString) {
    // Use a regular expression to match the first sequence of digits
    const match = inputString.match(/\d+/);
  
    if (match) {
      // Extract the matched number and convert it to an integer
      const number = parseInt(match[0], 10);
      return number;
    } else {
      return null; // Return null if no number is found
    }
  }



function addSelectTocata() {


     //onload add selected class
    {const subjsElements = document.querySelectorAll(".cata");
    const storedsubjsString = localStorage.getItem('hcatagory');
    if (storedsubjsString) {
      const storedsubjsNumber = parseInt(storedsubjsString.replace('cata', ''));
      if (!isNaN(storedsubjsNumber)) {
        const selectedsubjsElement = subjsElements[storedsubjsNumber - 1];
        if (selectedsubjsElement) {
          selectedsubjsElement.classList.add('selected');
        }
      }
    }}

    

// catagory item select
const cataElements = document.querySelectorAll('.cata');

cataElements.forEach((cataElement, index) => {
  cataElement.addEventListener('click', () => {
    const cataNumber = index + 1;
    const cataString = `cata${cataNumber}`;
    
    // Remove "selected" class from all cata elements
    cataElements.forEach((element) => {
      element.classList.remove('selected');
    });

    // Add "selected" class to the clicked cata element
    cataElement.classList.add('selected');
    
    localStorage.setItem('hcatagory', cataString);
    localStorage.setItem('hchapters', null);
    const chaptElemen = document.querySelectorAll(".chapt");
    chaptElemen.forEach((element) => {
       element.classList.remove('selected');
        });
    const chapters = document.getElementById("Catagory_3items");
    const pdfs = document.getElementById("pdfs");
      jchapt = `
      <div class="default-rows">Select a Subject</div>
      `;
      chapters.innerHTML = jchapt;
    
    console.log(cataString); 
    pdfs.innerHTML = `
      <div class="default-rows">Select a Subject</div>
      `;

    loadJSON(createSubjectsItemDivs);

      

});
});

}











function subjectselect(){
     

    //subject selection
    const subjsElements = document.querySelectorAll('.subjs');
    subjsElements.forEach((subjsElement, index) => {
    subjsElement.addEventListener('click', () => {
      const subjsNumber = index + 1;
      const subjsString = `subjs${subjsNumber}`;

      // Remove "selected" class from all subject elements
      subjsElements.forEach((element) => {
        element.classList.remove('selected');
      });

      // Add "selected" class to the clicked subject element
      subjsElement.classList.add('selected');

      localStorage.setItem('hsubjects', subjsString);
      const pdfs = document.getElementById("pdfs");

      console.log(subjsString);
      loadJSON(createChaptersItemDivs);
      pdfs.innerHTML = `
      <div class="default-rows">Select a Chapter</div>
      `;

 
       

         });
       });
      }




function chapterselect(){
  
  //chapter section
  const chaptElemen = document.querySelectorAll('.chapt');
  chaptElemen.forEach((chaptElement, index) => {
  chaptElement.addEventListener('click', () => {
  const chaptNumber = index + 1;
  const chaptString = `chapt${chaptNumber}`;

  // Remove "selected" class from all subject elements
  chaptElemen.forEach((element) => {
    element.classList.remove('selected');
  });

  // Add "selected" class to the clicked subject element
  chaptElement.classList.add('selected');

  localStorage.setItem('hchapters', chaptString);
  console.log(chaptString);
  //loadJSON(createPdfzoneItemDivs);
  loadJSON(function (data) {
    const storedChapters = localStorage.getItem('hchapters');
    const storedSubjects = localStorage.getItem('hsubjects');
    const storedCategory = localStorage.getItem('hcatagory');
    
    // Create the variable name to match
    const variableNameToMatch = `${storedCategory}${storedSubjects}${storedChapters}`;
      //var variableNameToMatch = "Pdfzone"; // Replace this with the variable name you want to match
    
      if (data[variableNameToMatch]) {
          createPdfzoneItemDivs(data, variableNameToMatch);
          setPDFContainerHeight("pdfs");
      }
      else{
        var itemsDiv = document.getElementById("pdfs");
        itemsDiv.innerHTML = `
          <div class="default-rows">Nothing's here</div>
          `;
      }
      
    });
  PDFSelection();
  checkAndSetupMobileBehavior(); //smothscroll down to div for phones
  allRowScript();
  


          });
       });
}




function setPDFContainerHeight(containerId) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container with id "${containerId}" not found.`);
    return;
  }

  const maxHeight = 393; // Set the maximum height in pixels

  // Calculate the height based on the content in the container
  const contentHeight = container.scrollHeight;

  if (contentHeight > maxHeight) {
    container.style.maxHeight = `${maxHeight}px`;
  } else {
    container.style.maxHeight = `${contentHeight}px`;
  }
}

// Call the function with your container's ID

