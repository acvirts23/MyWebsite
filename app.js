const yelpCamp = document.querySelector('#yelpcamp');
const umlDiagram = document.querySelector('#uml');
const pingpong = document.querySelector('#pingpong');
const website = ducment.querySelector('#website')

yelpCamp.addEventListener('click', yelpRedirect);
umlDiagram.addEventListener('click', umlRedirect);
pingpong.addEventListener('click', pongRedirect)
website.addEventListener('click', websiteRedirect)


function yelpRedirect() {
    window.open('https://github.com/acvirts23/YelpCamp');
}

function umlRedirect() {
    window.open('https://github.com/acvirts23/UML-Diagram-Editor');
}

function pongRedirect() {
    window.open('https://github.com/acvirts23/Ping-Pong-Scorekeeper');
}

function websiteRedirect() {
    window.open('https://github.com/acvirts23/Responsive-Website');
}
