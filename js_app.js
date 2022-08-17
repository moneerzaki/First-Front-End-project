/* eslint quotes: ["error", "double"] */

// colors. 
// var headerHeight = '10vh'; 
// var favColor = '#8ddfff';
var headerBackgroundColor = "#131313";
var highlightNavItem = "#808080";



// random text. 
var lorem1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illo aspernatur quibusdam recusandae facere ipsum optio delectus possimus, nemo tenetur obcaecati repellendus, repudiandae, aut quidem pariatur quia soluta provident animi?";





/*global document, console, window*/

// creating a new section 3 in the nav bar. 
var section3Nav = document.createElement("li");         // li 3
section3Nav.setAttribute("id","#nav-item3") ;
section3Nav.textContent =   "Sect 3";

console.log(section3Nav);


// creating a new section4 in the nav bar. 
var section4Nav = document.createElement("li");         // li 4
section4Nav.setAttribute("id","#nav-item4") ;
section4Nav.textContent =   "Sect 4";

console.log(section4Nav);


// appending nav items.
var navitems = document.querySelector("#nav-items");    // nav items.
navitems.appendChild(section3Nav);
navitems.appendChild(section4Nav);








//  creating a new section3 in the main page. 
var section3header = document.createElement("h1");      // h1
section3header.textContent = "Section 3:"
var section3hr = document.createElement("hr");          // hr
var section3p = document.createElement("p");            // p
section3p.textContent = lorem1 + lorem1 + lorem1 + lorem1 + lorem1 + lorem1; 

var section3 = document.createElement("div");           // main div .section
section3.className= "section";
section3.setAttribute("id", "section3");

section3.append(section3header, section3hr, section3p);

console.log(section3);



//  creating a new section4 in the main page. 
var section4header = document.createElement("h1");      // h1
section4header.textContent = "Section 4:"
var section4hr = document.createElement("hr");          // hr
var section4p = document.createElement("p");            // p
section4p.textContent = lorem1 + lorem1 + lorem1 + lorem1 + lorem1 + lorem1 + lorem1 + lorem1 + lorem1 + lorem1; 

var section4 = document.createElement("div");           // main div .section
section4.className= "section";
section4.setAttribute("id","section4");

section4.append(section4header, section4hr, section4p);

console.log(section4);


// appending section 3 to the rest of sections. 
var sections = document.querySelector("#sections");     // main div #sections
sections.appendChild(section3);
sections.appendChild(section4);








// creating an element for the rest of nav sections. 
var section1Nav = document.querySelector("#nav-item1");
var section2Nav = document.querySelector("#nav-item2");

// creating an element for the rest of the sections. 
var section1 = document.querySelector("#section1");
var section2 = document.querySelector("#section2");

// highlighting nav item when its being represented in the window.
var sec1dim = section1.getBoundingClientRect();
var sec2dim = section2.getBoundingClientRect();
var sec3dim = section3.getBoundingClientRect();
var sec4dim = section4.getBoundingClientRect();



// printing the formed html on the console to make sure every thing is ok. 
console.log(section1Nav);
console.log(section2Nav);
console.log(section3Nav);
console.log(section4Nav);




// scrolling to a specific section when clicking on it in the nav bar. 
section1Nav.addEventListener("click", () => {
    // let diff = Math.abs(window.scrollY - sec1dim.top) + 100;
    // window.scrollBy(0,-diff);

    // window.scrollTo({top: sec1dim.top -100});
    // console.log(diff); 
    // location.href = "#section1";
    section1.scrollIntoView();
})
section2Nav.addEventListener("click", () => {
    // let diff = window.scrollY - sec2dim.top + 100;
    // window.scrollBy(0,-diff);

    // window.scrollTo({top: sec2dim.top -100});
    // location.href = "#section2";
    section2.scrollIntoView();
})
section3Nav.addEventListener("click", () => {
    // let diff = window.scrollY - sec3dim.top + 100;
    // window.scrollBy(0,-diff);

    // window.scrollTo({top: sec3dim.top -100});
    // location.href = "#section3";
    section3.scrollIntoView();
})
section4Nav.addEventListener("click", () => {
    // let diff = window.scrollY - sec4dim.top + 100;
    // window.scrollBy(0,-diff);

    // window.scrollTo({top: sec4dim.top });
    // location.href = "#section4";
    section4.scrollIntoView();
})







// for right text alignment for all even sections. 
section2.classList.add("section_even");
section4.classList.add("section_even");




// additional features: 
// First additional features

// collabsing the content of a section when clicking on its title. 
// creating an element for each section header. 
var section1header = document.querySelector("#section1 h1");
var section2header = document.querySelector("#section2 h1");
// creating an element for each section paragraph. 
var section1p =  document.querySelector("#section1 p");
var section2p =  document.querySelector("#section2 p");

section1header.addEventListener("click",() =>{
    if (section1p.style.display == "none")
    {section1p.style.display = "block";}
    else 
    {section1p.style.display = "none";}
})

section2header.addEventListener("click",() =>{
    if (section2p.style.display == "none")
    {section2p.style.display = "block";}
    else 
    {section2p.style.display = "none";}
})

section3header.addEventListener("click",() =>{
    if (section3p.style.display == "none")
    {section3p.style.display = "block";}
    else 
    {section3p.style.display = "none";}
})

section4header.addEventListener("click",() =>{
    if (section4p.style.display == "none")
    {section4p.style.display = "block";}
    else 
    {section4p.style.display = "none";}
})




//  Second Additional Feature: 
// Highlight the current section in the nav bar. 
document.addEventListener("scroll", () => {
    if (window.scrollY > sec4dim.top)
    {
        section1Nav.style.backgroundColor = headerBackgroundColor;
        section2Nav.style.backgroundColor = headerBackgroundColor;
        section3Nav.style.backgroundColor = headerBackgroundColor;
        section4Nav.style.backgroundColor = highlightNavItem;
    }
    else if (window.scrollY > sec3dim.top)
    {
        section1Nav.style.backgroundColor = headerBackgroundColor;
        section2Nav.style.backgroundColor = headerBackgroundColor;
        section3Nav.style.backgroundColor = highlightNavItem;
        section4Nav.style.backgroundColor = headerBackgroundColor;
    }
    else if (window.scrollY > sec2dim.top)
    {
        section1Nav.style.backgroundColor = headerBackgroundColor;
        section2Nav.style.backgroundColor = highlightNavItem;
        section3Nav.style.backgroundColor = headerBackgroundColor;
        section4Nav.style.backgroundColor = headerBackgroundColor;
    }
    else if (window.scrollY > sec1dim.top)
    {
        section1Nav.style.backgroundColor = highlightNavItem;
        section2Nav.style.backgroundColor = headerBackgroundColor;
        section3Nav.style.backgroundColor = headerBackgroundColor;
        section4Nav.style.backgroundColor = headerBackgroundColor;
    }
})






// third Additional Feature: 
// hidding the navbar while scrolling down. 

var header = document.querySelector("header");
window.addEventListener("scroll", ()=>{
    if (window.scrollY < 50)
    {header.style.backgroundColor = "black";}
    else if (window.scrollY > 50)
    {header.style.backgroundColor = "rgb(0,0,0,0)";}
})