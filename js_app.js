

var favColor = '#8ddfff';
var headerBackgroundColor = '#131313';

// creating a new section in the nav bar. 
var section4NavLink = document.createElement('a');      // a
section4NavLink.setAttribute('href', "#section4");
section4NavLink.textContent = "Sect 4";

var section4Nav = document.createElement('li');         // li
section4Nav.className = "#nav-item4";
section4Nav.appendChild(section4NavLink);

var navitems = document.querySelector('#nav-items');    // nav items.
navitems.appendChild(section4Nav);

// console.log(section5Nav);

//  creating a new section in the main page. 
var section4header = document.createElement('h1');      // h1
section4header.textContent = "Section 4:"

var section4hr = document.createElement('hr');          // hr

var section4p = document.createElement('p');            // p
var lorem = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illo aspernatur quibusdam recusandae facere ipsum optio delectus possimus, nemo tenetur obcaecati repellendus, repudiandae, aut quidem pariatur quia soluta provident animi?');
section4p.appendChild(lorem); 


var section4 = document.createElement('div');           // main div .section
section4.className= 'section';
section4.setAttribute('id',"#section4");

section4.appendChild(section4header);
section4.appendChild(section4hr);
section4.appendChild(section4p);

var sections = document.querySelector('#sections');     // main div #sections
sections.appendChild(section4);

console.log(section4);

var sec4dim = section4.getBoundingClientRect();
document.addEventListener('scroll', () => {
    if (window.scrollY < sec4dim.bottom && window.scrollY > sec4dim.top)
    {
        section4Nav.style.color = headerBackgroundColor;
        section4Nav.style.backgroundColor = favColor;
    }
    else 
    {
        section4Nav.style.color = favColor; 
        section4Nav.style.backgroundColor = headerBackgroundColor;
    }
})






// for right text alignment for all even sections. 
var section2 = document.querySelector('#section2');
section2.classList.add('section_even');

var section4 = document.querySelector('#section4');
section4.classList.add('section_even');


