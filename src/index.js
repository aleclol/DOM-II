import './less/index.less'

// Changes the title's color when it is clicked
const heading1 = document.querySelector('h1');
heading1.addEventListener('click', (event) => {event.target.style.color = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;});


// Highlight nav bar items
const navHover = document.querySelector('nav');
navHover.addEventListener('mouseover', (event) => {
    event.target.style.color = "blue";
    //event.target.style.backgroundColor = "blue";
})
navHover.addEventListener('mouseout', (event) => {event.target.style.color = "";
})

// Temporarily replace the text of what you copy with "Copy That!"
document.addEventListener('copy', (event) => {
    const origText = event.target.textContent;
    event.target.textContent = "Copy That!";
    setTimeout(() => {event.target.textContent = origText;}, 1000);
});


// idk DNW
const navLinkHover = document.querySelectorAll('nav a');
//navLinkHover.children.addEventListener('mouseover', (event)=> event.target.style.backgroundColor = 'gray')

// select DNW
document.body.addEventListener('select', (event)=> event.target.style.colors = 'gray')


// Prevent spacebar from scrolling you down the page
document.addEventListener('keypress', (event) => {
    if(event.key === " "){event.preventDefault();}
    }  
);

// adding text to the first paragraph just by typing
const introParagraph = document.querySelector('.intro p');
document.addEventListener('keypress', (event) => introParagraph.textContent += event.key);