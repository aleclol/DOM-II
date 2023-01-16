import './less/index.less'

// Changes the title's color when it is clicked
const heading1 = document.querySelector('h1');
heading1.addEventListener('click', (event) => {event.target.style.color = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;});


// Highlight nav bar items
const navHover = document.querySelector('nav');
navHover.addEventListener('mouseover', (event) => {event.target.style.color = "blue";
})
navHover.addEventListener('mouseout', (event) => {event.target.style.color = "";
})

// Temporarily replace the text of what you copy with "Copy That!"
document.addEventListener('copy', (event) => {
    const origText = event.target.textContent;
    event.target.textContent = "Copy That!";
    setTimeout(() => {event.target.textContent = origText;}, 1000);
});

//heading1.addEventListener('dblclick', (event) => {event.target.style.animation = '3s infinite alternate slidein;'})