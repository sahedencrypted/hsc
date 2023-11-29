
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
  xhr.open('GET', 'assets/json/vhsc.json', true);
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
          <svg style="height: 19px; width: 19px; opacity: 0.9;" xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
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
      <svg style="height: 19px; width: 19px; opacity: 0.9;" xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
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
        <p class="cpt">${item}</p>`;

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
<svg style="margin-left: 3px; height: 19px; width:19px; opacity:0.9;" viewBox="0 -3 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>youtube [#168]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="#ff0000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]"> </path> </g> </g> </g> </g></svg>

`;
function createPdfzoneItemDivs(data, selectedGroup) {
  console.log(selectedGroup);
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
  var vdoIDs = selectedGroupData.vdoID;


  for (var i = 0; i < titles.length; i++) {
      var div = document.createElement("div");
      div.className = "rows file-icon pdfz";

      // Set the id of the div to the corresponding vdoID
      div.id = vdoIDs[i];

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
        <p class="cpt">${item}</p>`;

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






const btnpdf = document.querySelector(".llpdfzone");
const btnclass = document.querySelector(".llclass");
btnpdf.addEventListener("click", function() {
  window.location.href = "../index.html";
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




