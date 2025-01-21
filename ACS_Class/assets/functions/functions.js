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
        const vdoID = pdfzElement.id;
        localStorage.setItem('vdoID', vdoID);
        const vvuip = document.querySelector("#iframeContainer");
        const iframecont = document.querySelector(".YT-iframe-container")
        const ciframecont = document.querySelector("#CvdoFrame")
        if(vdoID.length < 50){
          iframecont.innerHTML=``
          iframecont.innerHTML=`
          <iframe id="CvdoFrame" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  
          `
          vvuip.style.display="none"
          iframecont.style.display="block"
          const ciframecont = document.querySelector("#CvdoFrame")
          ciframecont.src = `https://www.youtube.com/embed/${vdoID}`;
        }
        else{
          iframecont.innerHTML=``
          iframecont.innerHTML=`
          <iframe id="CvdoFrame" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  
          `
          iframecont.style.display="none"
          vvuip.style.display="block"
          const vdoplayr = document.getElementById("videoPlayer");
          vdoplayr.src = `${vdoID}`;
        }
        
        
      });
    });
  }

//onpageload src input
const defaultVideoSrc = 'https://1a-1791.com/video/s8/2/O/x/r/a/Oxrav.caa.mp4?u=3&b=0'
const iframee = document.getElementById('videoPlayer');
const vdoID = localStorage.getItem('vdoID') || defaultVideoSrc ;
const vvuip = document.querySelector("#iframeContainer");
const iframecont = document.querySelector(".YT-iframe-container")
const ciframecont = document.querySelector("#CvdoFrame")
if(vdoID.length < 30){
  console.log("asasd",vdoID)
  vvuip.style.display="none"
  iframecont.style.display="block"
  ciframecont.src = `https://www.youtube.com/embed/${vdoID}`;
}
else{
  iframecont.style.display="none"
  vvuip.style.display="block"
  const vdoplayr = document.getElementById("videoPlayer");
  vdoplayr.src = `${vdoID}`;

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


