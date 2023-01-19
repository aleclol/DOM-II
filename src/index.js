import './less/index.less'

// BUG: querySelector is returning null in the terminal after running rpm run test; All code still works in the browser
// Stopgap: Code with querySelector would need to be refactored to querySelectorAll with a forEach loop
//          see lines 10-16 for example


// 1. Click
// Changes the title's color when it is clicked
const heading1 = document.querySelectorAll('h1');
//console.log(heading1)
heading1.forEach(i => {
        i.addEventListener('click', (event) => {
        event.target.style.color = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    });
})
// heading1["0"].addEventListener('click', (event) => {
//     event.target.style.color = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
// });
//document.body.header.div.h1

// 2. and 3. Mouseover and Mouseout
// Highlight nav bar items
// const navHover = document.querySelector('nav');
// navHover.addEventListener('mouseover', (event) => {
//     event.target.style.color = "blue";
    //event.target.style.backgroundColor = "blue";
//})
// navHover.addEventListener('mouseout', (event) => {event.target.style.color = "";
// })

// 4. Copy
// Temporarily replace the text of what you copy with "Copy That!"
document.addEventListener('copy', (event) => {
    const origText = event.target.textContent;
    event.target.textContent = "Copy That!";
    setTimeout(() => {event.target.textContent = origText;}, 1000);
});

//p selector
const introParagraph = document.querySelector('.intro p');

// 5. Keypress
// Prevent spacebar from scrolling you down the page
document.addEventListener('keypress', (event) => {
    if(event.key === " ")
        {event.preventDefault();}
    }  
);

// Making Delete button work
document.addEventListener('keypress', (event) => {
    if(event.key === "Backspace"){
        introParagraph.textContent = introParagraph.textContent.slice(0, introParagraph.textContent.length - 1);
    }
}  
);

// adding text to the first paragraph just by typing

document.addEventListener('keypress', (event) => {
    if(event.key !== "Backspace"){
        introParagraph.textContent += event.key
    }
});

// Select first paragraph
// introParagraph.addEventListener('click', (event) => {
//     event.target.style.border = '1px solid blue';
//     event.target.style.borderRadius = '5px'
//     }
// )

// add padding to paragraphs
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach((element)=> {
    element.style.padding = "5px";
})

// linking the links to google searches
const links = document.querySelectorAll('.nav-link');
links.forEach((element)=>{
    const linkName = element.textContent.toLowerCase();
    element.setAttribute('href', `https:www.google.com/search?q=${linkName}`)
})

// 6. Double Click event
// Search Google for whatever you double click
document.addEventListener('dblclick', ()=> {
    const searchThis = window.getSelection();
    window.open(`https:www.google.com/search?q=${searchThis}`, '_blank');
})

// 7. mousemove
// Console logs "mousemove" when your mouse first moves
document.body.addEventListener('mousemove', () => {
    console.log("mousemove");
    //throttle?
})

// 8. & 9. mouseenter and mouseleave
// Changes color of text in intro paragraph based on mouse location


// introParagraph.addEventListener('mouseenter', (event) => {
//     console.log('enter!');
//     introParagraph.style.color = "red";
// })

// introParagraph.addEventListener('mouseleave', (event) => {
//     console.log('leave!');
//     introParagraph.style.color = "initial";
// })

// 10. Scroll
// Changes title to "Scrolling!" so user knows they are indeed "scrolling!"
document.addEventListener('scroll', (event) => {
    console.log('scrolling!');
    if(event){
        heading1.textContent = "Scrolling!"
        setTimeout(() => {
            heading1.textContent = "Fun Bus";
        }, 2000)
    }
})