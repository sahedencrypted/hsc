
function myLoad ()
  { let preload = document.getElementById('loding');
    let changeid = document.getElementById('ny');
      preload.style.display = 'none';
      changeid.setAttribute('id','chy');

   }
   function mui(){
    let gyo =document.querySelector("#list");
    let nj=document.querySelector(".bac");
    let dug=document.querySelector(".burger");
    nj.classList.toggle("backbt");
    gyo.classList.toggle("listr");
    dug.classList.toggle("onburger");
  
  }

  { 
function change() {
    let gt = document.querySelector("#list");
    let hyy = document.querySelector(".burger");
    let ny = document.querySelector(".bac");
    gt.classList.toggle("listr");
    hyy.classList.toggle("onburger");
    ny.classList.toggle("backbt");
    
}
document.querySelector('.burger').addEventListener('click',change);
}
//darkmode
const themebtn = document.querySelectorAll(".themebtn");
const svgSun = document.querySelector(".m-theme");
const svgMoon = document.querySelector(".web-theme");
const munIcon = document.querySelector(".mun-icon");
const sunIcon = document.querySelector(".sun-icon");
const body = document.body;

// Check if the theme preference is already stored in localStorage
const savedTheme = localStorage.getItem('theme');

// Set the initial theme based on the stored value, or default to 'light-theme'
if (savedTheme === 'dark') {
  body.classList.add('dark-theme');
  if (munIcon.classList.contains('open')) {
    munIcon.classList.remove('open');
    munIcon.classList.add("close");
    sunIcon.classList.remove("close");
    sunIcon.classList.add("open");   }
  
} else {
  body.classList.add('light-theme');

}

// Toggle the theme on SVG element click
svgMoon.addEventListener('click', () => {
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
    sunIcon.classList.remove("open");
    sunIcon.classList.add("close");
    munIcon.classList.remove("close");
    munIcon.classList.add("open");
    

  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
    sunIcon.classList.remove("close");
    sunIcon.classList.add("open");
    munIcon.classList.remove("open");
    munIcon.classList.add("close");
  
  }
});

/* Add Contant */
// SVG content
const svgFolder = `
<svg style="height: 19px; width:19px; opacity:0.9;" xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
  <path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"/>
  <path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"/>
</svg>
`;

// Select all divs with the class "icon"
const fileiconDivs = document.querySelectorAll('.file-icon');

// Insert SVG content into each div
fileiconDivs.forEach(div => {
div.innerHTML = svgFolder + div.innerHTML;
});



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
const chapters = document.getElementById("chapters");
const hchapt = localStorage.getItem("hchapters");
      jchapt = `
      <div class="default-rows">Select a Subject</div>
      `;
      chapters.innerHTML = jchapt;
    
    console.log(cataString); 
    pdfs.innerHTML = `
      <div class="default-rows">Nothings Here</div>
      `;

    
  // Get the corresponding value from the catacategories object
  let currentCata = catacategories[cataString] || null;

  const subjects = document.querySelector('#subjects');
  subjects.innerHTML = currentCata;
  
    
    


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

      console.log(subjsString);
      pdfs.innerHTML = `
      <div class="default-rows">Nothings Here</div>
      `;

      // Get the corresponding value from the catacategories object
       let currentSubjs = subjscategories[subjsString] || null;
  
       // Print the current category (or null if no match)
      const chapters = document.querySelector('#chapters');
      chapters.innerHTML = currentSubjs;
      //location.reload();
 
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
      checkAndRenderPDFContent();
      PDFSelection();

    });
  });



    });
  });
  
 



  });
});

// On page load, check localStorage and set the "selected" class
document.addEventListener('DOMContentLoaded', () => {
  const storedCataString = localStorage.getItem('hcatagory');
  if (storedCataString) {
    const storedCataNumber = parseInt(storedCataString.replace('cata', ''));
    if (!isNaN(storedCataNumber)) {
      const selectedCataElement = cataElements[storedCataNumber - 1];
      if (selectedCataElement) {
        selectedCataElement.classList.add('selected');
      }
    }
  }
  


});

document.addEventListener('DOMContentLoaded', () => {
  const hcatagory = localStorage.getItem('hcatagory');

  // Get the corresponding value from the catacategories object
  let domcurrentCata = catacategories[hcatagory] || null;
  subjects.innerHTML = domcurrentCata;

  if (domcurrentCata === null) {
      domcurrentCata = `
      <div class="default-rows">Select a Category</div>
      `;
      subjects.innerHTML = domcurrentCata;
  }


  //hsubjects selected class adding section
  const subjsElements = document.querySelectorAll(".subjs");
  const storedsubjsString = localStorage.getItem('hsubjects');
  if (storedsubjsString) {
    const storedsubjsNumber = parseInt(storedsubjsString.replace('subjs', ''));
    if (!isNaN(storedsubjsNumber)) {
      const selectedsubjsElement = subjsElements[storedsubjsNumber - 1];
      if (selectedsubjsElement) {
        selectedsubjsElement.classList.add('selected');
      }
    }
  }
    //hsubjects chapter inerhtml adding
    let domcurrentsubjs = subjscategories[storedsubjsString] || null;
    const chapters = document.getElementById("chapters");
    chapters.innerHTML = domcurrentsubjs;
    if (domcurrentsubjs === null) {
      domcurrentsubjs = `
      <div class="default-rows">Nothing to Select</div>
      `;
      chapters.innerHTML = domcurrentsubjs;
  }


//after load subjects clickble making
  const subjsElemen = document.querySelectorAll('.subjs');
  subjsElemen.forEach((subjsElement, index) => {
    subjsElement.addEventListener('click', () => {
      const subjsNumber = index + 1;
      const subjsString = `subjs${subjsNumber}`;
  
      // Remove "selected" class from all subject elements
      subjsElemen.forEach((element) => {
        element.classList.remove('selected');
      });
  
      // Add "selected" class to the clicked subject element
      subjsElement.classList.add('selected');
  
      localStorage.setItem('hsubjects', subjsString);
      console.log(subjsString);
      pdfs.innerHTML = `
      <div class="default-rows">Nothings Here</div>
      `;
      // Get the corresponding value from the catacategories object
       let currentSubjs = subjscategories[subjsString] || null;
  
       // Print the current category (or null if no match)
      //console.log("Current Category:", currentSubjs);
      const chapters = document.querySelector('#chapters');
      chapters.innerHTML = currentSubjs;

     
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
      checkAndRenderPDFContent();
      PDFSelection();

    });
  });



   



    });
  });
  
  //onload chapter section
  const chaptElemen = document.querySelectorAll('.chapt');
  console.log(chaptElemen);
  chaptElemen.forEach((chaptElement, chaptindex) => {
    chaptElement.addEventListener('click', () => {
      const chaptNumber = chaptindex + 1;
      const chaptString = `chapt${chaptNumber}`;
  
      // Remove "selected" class from all subject elements
      chaptElemen.forEach((element) => {
        element.classList.remove('selected');
      });
  
      // Add "selected" class to the clicked subject element
      chaptElement.classList.add('selected');
  
      localStorage.setItem('hchapters', chaptString);
      checkAndRenderPDFContent();
      PDFSelection();
      
      
    });
  });


  //hchapters selected class adding onload
  const chaptElements = document.querySelectorAll(".chapt");
  const chaptString = localStorage.getItem('hchapters');
  if (chaptString) {
    const storedchaptNumber = parseInt(chaptString.replace('chapt', ''));
    if (!isNaN(storedchaptNumber)) {
      const selectedchaptElement = chaptElements[storedchaptNumber - 1];
      if (selectedchaptElement) {
        selectedchaptElement.classList.add('selected');
      }
    }
  }

checkAndRenderPDFContent();
PDFSelection();

});




document.addEventListener("DOMContentLoaded", function () {
  const pdfzElements = document.querySelectorAll(".pdfz");
  const pdfzString = localStorage.getItem('hpdfz');
  if (pdfzString) {
    const storedPdfzValue = pdfzString.replace('pdfz', '');
    const parsedValue = parseInt(storedPdfzValue);
    if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= pdfzElements.length) {
      const selectedPdfzElement = pdfzElements[parsedValue - 1];
      if (selectedPdfzElement) {
        selectedPdfzElement.classList.add('selected');
      }
    }
  }

  

});

// height transition on chapters box
const diiiv1 = document.getElementById("subjects");
const diiiv2 = document.getElementById("chapters");
diiiv1.addEventListener("click", () => {
      diiiv2.style.maxHeight = diiiv2.scrollHeight + "px";

});







