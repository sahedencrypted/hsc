
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
 // Function to load JSON data from the file
 function loadJSON(callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open('GET', 'assets/json/hsc.json', true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          callback(JSON.parse(xhr.responseText));
      }
  };
  xhr.send(null);
}

// Function to create and append the divs for items in the "Category" group
function createCategoryItemDivs(data) {
  var categoryData = data["Category"];
  var categoryDiv = document.getElementById("Category_1");
  var itemsDiv = document.getElementById("Category_1items");

  categoryDiv.textContent = categoryData.name; // Set the category name
  
  categoryData.item1.forEach(function (item) {
      var div = document.createElement("div");
      div.className = "rows file-icon cata";

      div.innerHTML = `
          <svg style="height: 19px; width: 19px; opacity: 0.9; margin-right: 4px;" xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
              <path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"/>
              <path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"/>
          </svg>
          <p>${item}</p>`;

      itemsDiv.appendChild(div);
  });
  addSelectTocata();
  
  
}


function createSubjectsItemDivs(data) {
  var subjectsData = data["Subjects"];
  var subjectsDiv = document.getElementById("Catagory_2");
  var itemsDiv = document.getElementById("Catagory_2items");

  subjectsDiv.textContent = subjectsData.name; // Set the category name

  // Define the number you want to access
  var hcaptersvalue = localStorage.getItem('hcatagory');
  const number = extractNumberFromString(hcaptersvalue);
  var numberToAccess = number;
  itemsDiv.innerHTML = "";

  var itemsToAccess = subjectsData["item" + numberToAccess] || [];

  itemsToAccess.forEach(function (item) {
    var div = document.createElement("div");
    div.className = "rows file-icon subjs";

    div.innerHTML = `
      <svg style="height: 19px; width: 19px; opacity: 0.9; margin-right: 4px;" xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
        <path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"/>
        <path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"/>
      </svg>
      <p>${item}</p>`;

    itemsDiv.appendChild(div);
  });
  subjectselect()
}





function createChaptersItemDivs(data) {
  const storedSubjects = localStorage.getItem('hsubjects');
  const storedCategory = localStorage.getItem('hcatagory');

  // Create the variable name to match
  const variableNameToMatch = `${storedCategory}${storedSubjects}`;

  var chaptersData = data; // Assuming data contains objects with categories
  var chaptersDiv = document.getElementById("Catagory_3");
  var itemsDiv = document.getElementById("Catagory_3items");

  // Clear the existing content of itemsDiv
  itemsDiv.innerHTML = "";

  // Find the category that matches variableNameToMatch
  var matchedCategory = chaptersData[variableNameToMatch];

  if (matchedCategory) {
    chaptersDiv.textContent = variableNameToMatch; // Set the category name based on the matched variable

    var itemsToAccess = matchedCategory.items || [];

    itemsToAccess.forEach(function (item) {
      var div = document.createElement("div");
      div.className = "rows file-icon chapt";

      div.innerHTML = `
        <svg style="height: 19px; width: 19px; opacity: 0.9; margin-right: 4px;" xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
          <path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"/>
          <path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"/>
        </svg>
        <p class="">${item}</p>`;

      itemsDiv.appendChild(div);
    });
  } else {
    // Handle the case when there are no matching categories
    itemsDiv.innerHTML = `
    <div class="default-rows">Updating Soon</div>
    `;
  }

  chapterselect();
}




const pdficon = `
<svg style="height: 19px; width:19px; opacity:0.9;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
    <!-- Generator: Sketch 3.0.3 (7891) - http://www.bohemiancoding.com/sketch -->
    <title>icon 70 document file pdf</title>
    <desc>Created with Sketch.</desc>
    <defs/>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="icon-70-document-file-pdf" sketch:type="MSArtboardGroup" fill="var(--nav)">
            <path d="M21,13 L21,10 L21,10 L15,3 L4.00276013,3 C2.89666625,3 2,3.89833832 2,5.00732994 L2,27.9926701 C2,29.1012878 2.89092539,30 3.99742191,30 L19.0025781,30 C20.1057238,30 21,29.1017876 21,28.0092049 L21,26 L28.9931517,26 C30.6537881,26 32,24.6577357 32,23.0012144 L32,15.9987856 C32,14.3426021 30.6640085,13 28.9931517,13 L21,13 L21,13 L21,13 Z M20,26 L20,28.0066023 C20,28.5550537 19.5523026,29 19.0000398,29 L3.9999602,29 C3.45470893,29 3,28.5543187 3,28.004543 L3,4.99545703 C3,4.45526288 3.44573523,4 3.9955775,4 L14,4 L14,8.99408095 C14,10.1134452 14.8944962,11 15.9979131,11 L20,11 L20,13 L12.0068483,13 C10.3462119,13 9,14.3422643 9,15.9987856 L9,23.0012144 C9,24.6573979 10.3359915,26 12.0068483,26 L20,26 L20,26 L20,26 Z M15,4.5 L15,8.99121523 C15,9.54835167 15.4506511,10 15.9967388,10 L19.6999512,10 L15,4.5 L15,4.5 Z M11.9945615,14 C10.8929956,14 10,14.9001762 10,15.992017 L10,23.007983 C10,24.1081436 10.9023438,25 11.9945615,25 L29.0054385,25 C30.1070044,25 31,24.0998238 31,23.007983 L31,15.992017 C31,14.8918564 30.0976562,14 29.0054385,14 L11.9945615,14 L11.9945615,14 Z M25,19 L25,17 L29,17 L29,16 L24,16 L24,23 L25,23 L25,20 L28,20 L28,19 L25,19 L25,19 Z M12,18 L12,23 L13,23 L13,20 L14.9951185,20 C16.102384,20 17,19.1122704 17,18 C17,16.8954305 16.1061002,16 14.9951185,16 L12,16 L12,18 L12,18 Z M13,17 L13,19 L15.0010434,19 C15.5527519,19 16,18.5561352 16,18 C16,17.4477153 15.5573397,17 15.0010434,17 L13,17 L13,17 Z M18,16 L18,23 L20.9951185,23 C22.102384,23 23,22.1134452 23,20.9940809 L23,18.0059191 C23,16.8980806 22.1061002,16 20.9951185,16 L18,16 L18,16 Z M19,17 L19,22 L21.0010434,22 C21.5527519,22 22,21.5562834 22,21.0001925 L22,17.9998075 C22,17.4476291 21.5573397,17 21.0010434,17 L19,17 L19,17 Z" id="document-file-pdf" sketch:type="MSShapeGroup"/>
        </g>
    </g>
</svg>
`;
function createPdfzoneItemDivs(data, selectedGroup) {
  var selectedGroupData = data[selectedGroup];
  var itemsDiv = document.getElementById("pdfs");
  itemsDiv.innerHTML = "";
  // Check if the group name exists and has titles
  if (!selectedGroupData || !selectedGroupData.title || selectedGroupData.title.length === 0) {
      //if exists but no data found in the group
      itemsDiv.innerHTML = `
      <div class="default-rows">No Data</div>
      `;
      return;
  }
  var titles = selectedGroupData.title;
  var pdfIDs = selectedGroupData.pdfID;


  for (var i = 0; i < titles.length; i++) {
      var div = document.createElement("div");
      div.className = "rows file-icon pdfz";

      // Set the id of the div to the corresponding pdfID
      div.id = pdfIDs[i];

      div.innerHTML = `
          ${pdficon}
          <p class="pdf">${titles[i]}</p>`;

      itemsDiv.appendChild(div);
  }
  PDFSelection()
  checkAndSetupMobileBehavior()
}





// Load the JSON data on page load
loadJSON(createCategoryItemDivs);
loadJSON(function (data) {
  var subjectsData = data["Subjects"];
  var subjectsDiv = document.getElementById("Catagory_2");
  var itemsDiv = document.getElementById("Catagory_2items");

  subjectsDiv.textContent = subjectsData.name; // Set the category name

  // Define the number you want to access
  var hcaptersvalue = localStorage.getItem('hcatagory');
  const number = extractNumberFromString(hcaptersvalue);
  var numberToAccess = number;
  itemsDiv.innerHTML = "";

  var itemsToAccess = subjectsData["item" + numberToAccess] || [];

  itemsToAccess.forEach(function (item) {
    var div = document.createElement("div");
    div.className = "rows file-icon subjs";

    div.innerHTML = `
      <svg style="height: 19px; width: 19px; opacity: 0.9; margin-right: 4px;" xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
        <path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"/>
        <path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"/>
      </svg>
      <p>${item}</p>`;

    itemsDiv.appendChild(div);
  });
  subjectselect()
  
  // onload add selected class
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
});



loadJSON(function (data) {
  const storedSubjects = localStorage.getItem('hsubjects');
  const storedCategory = localStorage.getItem('hcatagory');

  // Create the variable name to match
  const variableNameToMatch = `${storedCategory}${storedSubjects}`;

  var chaptersData = data; // Assuming data contains objects with categories
  var chaptersDiv = document.getElementById("Catagory_3");
  var itemsDiv = document.getElementById("Catagory_3items");

  // Clear the existing content of itemsDiv
  itemsDiv.innerHTML = "";

  // Find the category that matches variableNameToMatch
  var matchedCategory = chaptersData[variableNameToMatch];

  if (matchedCategory) {
    chaptersDiv.textContent = variableNameToMatch; // Set the category name based on the matched variable

    var itemsToAccess = matchedCategory.items || [];

    itemsToAccess.forEach(function (item) {
      var div = document.createElement("div");
      div.className = "rows file-icon chapt";

      div.innerHTML = `
        <svg style="height: 19px; width: 19px; opacity: 0.9; margin-right: 4px;" xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
          <path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"/>
          <path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"/>
        </svg>
        <p class="">${item}</p>`;

      itemsDiv.appendChild(div);
    });
  } else {
    // Handle the case when there are no matching categories
    itemsDiv.innerHTML = `
    <div class="default-rows">Updating Soon</div>
    `;
  }

  chapterselect();
  //onload add selected class
  {const subjsElements = document.querySelectorAll(".chapt");
  const storedsubjsString = localStorage.getItem('hchapters');
  if (storedsubjsString) {
    const storedsubjsNumber = parseInt(storedsubjsString.replace('chapt', ''));
    if (!isNaN(storedsubjsNumber)) {
      const selectedsubjsElement = subjsElements[storedsubjsNumber - 1];
      if (selectedsubjsElement) {
        selectedsubjsElement.classList.add('selected');
      }
    }
  }}

});


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
    // if not exists
    itemsDiv.innerHTML = `
      <div class="default-rows">Nothing's here</div>
      `;
  }
  //onload add selected class
  {const subjsElements = document.querySelectorAll(".pdfz");
  const storedsubjsString = localStorage.getItem('hpdfz');
  if (storedsubjsString) {
    const storedsubjsNumber = parseInt(storedsubjsString.replace('pdfz', ''));
    if (!isNaN(storedsubjsNumber)) {
      const selectedsubjsElement = subjsElements[storedsubjsNumber - 1];
      if (selectedsubjsElement) {
        selectedsubjsElement.classList.add('selected');
      }
    }
  }}
  
});


//onload iframe loader
const iframe = document.getElementById('pdfFrame');
const pdfID = localStorage.getItem('pdfID') || '';
iframe.src = `https://drive.google.com/file/d/${pdfID}/preview`;


const btnpdf = document.querySelector(".llpdfzone");
const btnclass = document.querySelector(".llclass");
btnclass.addEventListener("click", function() {
  window.location.href = "Class_page/classespg.html";
});

// height transition on chapters box
const diiiv1 = document.getElementById("subjects");
const diiiv2 = document.getElementById("chapters");
diiiv1.addEventListener("click", () => {
      diiiv2.style.maxHeight = diiiv2.scrollHeight + "px";

});






function removeskelectonclass() {
  var ttf = document.getElementById("pdfFrame");
  ttf.classList.remove("skeleton");
}




