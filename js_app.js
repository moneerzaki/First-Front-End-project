/* eslint quotes: ["error", "double"] */
/*global document,window,console*/

// colors. 
// var headerHeight = '10vh'; 
// var favColor = '#8ddfff';
var headerBackgroundColor = "#131313";
var highlightNavItem = "#808080";

// random text. 
var lorem1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illo aspernatur quibusdam recusandae facere ipsum optio delectus possimus, nemo tenetur obcaecati repellendus, repudiandae, aut quidem pariatur quia soluta provident animi?";


// important variables: 
var numberOfSections = 0; 

// important elements: 
var header = document.querySelector("header");
var navitems = document.querySelector("#nav-items"); // unordered list for nav bar
var navElements = [];  // IDs of each nav-item.
var navitem;

var sections = document.querySelector("#sections"); // sections part in the main page.
var sectionsMain = [];  // IDs of each section in the main page.
var section;
var secdim = [];

// removing the last added section: 
var removeLastSection = function ()
{
    numberOfSections--;
    navitems.removeChild(navitems.lastChild);
    navElements.pop();


    sections.removeChild(sections.lastChild);
    sectionsMain.pop();
    secdim.pop();

    addAllFunctions();

}
// main function for creating a new section. 
var createNewSection = function(textin)
{
    var sectionNav = createSectionNavBar();
    navitems.appendChild(sectionNav);

    var sectionMain = createSectionMainPage(textin);
    sections.appendChild(sectionMain);
    
}
// function to create new nav item.
var createSectionNavBar = function()
{
    numberOfSections ++; 
    var sectionNav = document.createElement("li");         // li 3
    sectionNav.classList.add("nav-item");
    sectionNav.setAttribute("id","nav-item" + numberOfSections) ;
    sectionNav.textContent =   "Sect "+ numberOfSections ;

    // adding element id to the list of elements
    navElements.push(("nav-item"+numberOfSections));

    // console.log(sectionNav);
    return sectionNav;
}
// function to create the section main text in the main page.
var createSectionMainPage = function(textin)
{
    var sectionheader = document.createElement("h1");      // h1
    sectionheader.textContent = "Section " + numberOfSections + ":";
    var sectionhr = document.createElement("hr");          // hr
    var sectionp = document.createElement("p");            // p
    sectionp.textContent = textin; 

    var section = document.createElement("div");           // main div .section
    section.className= "section";
    section.setAttribute("id", "section"+numberOfSections);

    section.append(sectionheader, sectionhr, sectionp);

    sectionsMain.push(("section"+numberOfSections));

    // console.log(section);
    return section;
}


// creating all web sections. 


// createNewSection(lorem1+lorem1+lorem1+lorem1+lorem1+lorem1+lorem1+lorem1); 
// createNewSection(lorem1+lorem1+lorem1+lorem1+lorem1+lorem1+lorem1+lorem1); 
// createNewSection(lorem1+lorem1+lorem1+lorem1+lorem1+lorem1+lorem1+lorem1); 
// createNewSection(lorem1+lorem1+lorem1+lorem1+lorem1+lorem1+lorem1+lorem1); 



var addAllFunctions = function()
{

section =  document.querySelectorAll(".section");
navitem =  document.querySelectorAll(".nav-item");


//for (let i=0; i<numberOfSections; i++)
    var i = numberOfSections-1;
    // secdim.push(section[i].getBoundingClientRect());

    // interactive nav items. 
    navitem[i].addEventListener("click", () => {
        // let diff = Math.abs(window.scrollY - sec1dim.top) + 100;
        // window.scrollBy(0,-diff);
        
        // window.scrollTo({top: sec1dim.top -100});
        // console.log(diff); 
        // location.href = "#section1";
        section[i].scrollIntoView();
        });


    // additional features: 
    // First additional features

    // collabsing the content of a section when clicking on its title. 
    section[i].querySelector("h1").addEventListener("click",() =>{
        if (section[i].querySelector("p").style.display == "none")
        {section[i].querySelector("p").style.display = "block";}
        else 
        {section[i].querySelector("p").style.display = "none";}
    });


}
// addAllFunctions();

createNewSection(lorem1+lorem1+lorem1+lorem1+lorem1+lorem1+lorem1+lorem1); addAllFunctions();
createNewSection(lorem1+lorem1+lorem1+lorem1+lorem1+lorem1+lorem1+lorem1); addAllFunctions();
createNewSection(lorem1+lorem1+lorem1+lorem1+lorem1+lorem1+lorem1+lorem1); addAllFunctions();
createNewSection(lorem1+lorem1+lorem1+lorem1+lorem1+lorem1+lorem1+lorem1); addAllFunctions();

// var section = document.querySelector('#mainpage').lastElementChild.lastElementChild.lastElementChild; 
// console.log(section);


if (window.scrollY < 50)
{header.style.backgroundColor = headerBackgroundColor;}


//  Second Additional Feature: 
// Highlight the current section in the nav bar. 
window.addEventListener("scroll", () => {
    
    // third Additional Feature: 
    // hidding the navbar while scrolling down. 
    if (window.scrollY < 50)
    {header.style.backgroundColor = headerBackgroundColor;}
    else if (window.scrollY > 50)
    {header.style.backgroundColor = "rgb(0,0,0,0)";}

    console.log(window.scrollY);

    section =  document.querySelectorAll(".section");
    navitem =  document.querySelectorAll(".nav-item");

    for (var i =0; i < numberOfSections; i++)
    {
        // secdim.push(section[i].getBoundingClientRect());
        currentSecDim = section[i].getBoundingClientRect();
        //console.log(currentSecDim);

        // navitem[i].style.backgroundColor = headerBackgroundColor;

        // if (currentSecDim.top > 0 && currentSecDim.top < window.innerHeight)
        if (currentSecDim.top > 0 && currentSecDim.bottom > 0 )
        {
            navitem[i].style.backgroundColor = highlightNavItem;
            navitems.scrollTo(navitem[i]);
            // window.scrollX(navitem[i]);

            // break;
        }
        else 
        {
            navitem[i].style.backgroundColor = headerBackgroundColor;
        }
        
    }
});



var addButton = document.querySelector('#addsection');
var removeButton = document.querySelector('#removesection');

addButton.addEventListener('click', () =>{
    createNewSection(lorem1+lorem1+lorem1+lorem1+lorem1+lorem1+lorem1+lorem1); 
    addAllFunctions();
})

removeButton.addEventListener('click', () =>{
    if (numberOfSections == 0)
    {window.alert("there is no sections to remove");}
    else 
    {removeLastSection(); }
})