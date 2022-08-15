
// colors. 
var favColor = '#8ddfff';
var headerBackgroundColor = '#131313';
var highlightNavItem = '#808080';



// random text. 
var lorem1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illo aspernatur quibusdam recusandae facere ipsum optio delectus possimus, nemo tenetur obcaecati repellendus, repudiandae, aut quidem pariatur quia soluta provident animi?";






// creating a new section 3 in the nav bar. 
var section3NavLink = document.createElement('a');      // a
section3NavLink.setAttribute('href', "#section3");
section3NavLink.textContent = "Sect 3";

var section3Nav = document.createElement('li');         // li
// section3Nav.setAttribute('id',"#nav-item3") ;
section3Nav.appendChild(section3NavLink);

var navitems = document.querySelector('#nav-items');    // nav items.
navitems.appendChild(section3Nav);

console.log(section3Nav);







//  creating a new section3 in the main page. 
var section3header = document.createElement('h1');      // h1
section3header.textContent = "Section 3:"
var section3hr = document.createElement('hr');          // hr
var section3p = document.createElement('p');            // p
section3p.textContent = lorem1 + lorem1 + lorem1 + lorem1 + lorem1 + lorem1; 


var section3 = document.createElement('div');           // main div .section
section3.className= 'section';
section3.setAttribute('id',"section3");

section3.append(section3header, section3hr, section3p);

console.log(section3);


// appending section 3 to the rest of sections. 
var sections = document.querySelector('#sections');     // main div #sections
sections.appendChild(section3);






// creating a new section4 in the nav bar. 
var section4NavLink = document.createElement('a');      // a
// section4NavLink.setAttribute('href', "#section4");
section4NavLink.textContent = "Sect 4";

var section4Nav = document.createElement('li');         // li
section4Nav.className = "#nav-item4";
section4Nav.appendChild(section4NavLink);

// var navitems = document.querySelector('#nav-items');    // nav items.
navitems.appendChild(section4Nav);

console.log(section4Nav);




//  creating a new section4 in the main page. 
var section4header = document.createElement('h1');      // h1
section4header.textContent = "Section 4:"

var section4hr = document.createElement('hr');          // hr

var section4p = document.createElement('p');            // p
section4p.textContent = lorem1 + lorem1 + lorem1 + lorem1 + lorem1 + lorem1 + lorem1 + lorem1 + lorem1 + lorem1; 


var section4 = document.createElement('div');           // main div .section
section4.className= 'section';
section4.setAttribute('id',"section4");

section4.append(section4header, section4hr, section4p);






sections.appendChild(section4);

console.log(section4);

// creating an element for the rest of nav sections. 
var section1Nav = document.querySelector('#nav-item1');
var section2Nav = document.querySelector('#nav-item2');

// creating an element for the rest of the sections. 
var section1 = document.querySelector('#section1');
var section2 = document.querySelector('#section2');

// highlighting nav item when its being represented in the window.
var sec1dim = section1.getBoundingClientRect();
var sec2dim = section2.getBoundingClientRect();
var sec3dim = section3.getBoundingClientRect();
var sec4dim = section4.getBoundingClientRect();


section1Nav.addEventListener('click', () => {
    window.scrollTo({sec1dim,
                     behavior: 'smooth'});
})
section2Nav.addEventListener('click', () => {
    window.scrollTo({sec2dim,
                     behavior: 'smooth'});
})
section3Nav.addEventListener('click', () => {
    window.scrollTo({sec3dim,
                     behavior: 'smooth'});
})
section4Nav.addEventListener('click', () => {
    window.scrollTo({sec4dim,
                     behavior: 'smooth'});
})


document.addEventListener('scroll', () => {
    if (window.scrollY < sec4dim.bottom && window.scrollY > sec4dim.top)
    {
        section1Nav.style.backgroundColor = headerBackgroundColor;
        section2Nav.style.backgroundColor = headerBackgroundColor;
        section3Nav.style.backgroundColor = headerBackgroundColor;
        section4Nav.style.backgroundColor = highlightNavItem;
    }
    else if (window.scrollY < sec3dim.bottom && window.scrollY > sec3dim.top)
    {
        section1Nav.style.backgroundColor = headerBackgroundColor;
        section2Nav.style.backgroundColor = headerBackgroundColor;
        section3Nav.style.backgroundColor = highlightNavItem;
        section4Nav.style.backgroundColor = headerBackgroundColor;
    }
    else if (window.scrollY < sec2dim.bottom && window.scrollY > sec2dim.top)
    {
        section1Nav.style.backgroundColor = headerBackgroundColor;
        section2Nav.style.backgroundColor = highlightNavItem;
        section3Nav.style.backgroundColor = headerBackgroundColor;
        section4Nav.style.backgroundColor = headerBackgroundColor;
    }
    else if (window.scrollY < sec1dim.bottom && window.scrollY > sec1dim.top)
    {
        section1Nav.style.backgroundColor = highlightNavItem;
        section2Nav.style.backgroundColor = headerBackgroundColor;
        section3Nav.style.backgroundColor = headerBackgroundColor;
        section4Nav.style.backgroundColor = headerBackgroundColor;
    }
})




// for right text alignment for all even sections. 
// var section2 = document.querySelector('#section2');
section2.classList.add('section_even');

// var section4 = document.querySelector('#section4');
section4.classList.add('section_even');


