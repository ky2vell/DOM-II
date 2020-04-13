// MOUSE TRACKER IN HEADER

const header = document.querySelector('header');
const mouseTrackContain = document.createElement('div');
const mouseTrackHeading = document.createElement('h2');

mouseTrackContain.style.background = 'dodgerblue';
mouseTrackContain.style.padding = '5px 0';
mouseTrackContain.style.display = 'flex';
mouseTrackContain.style.alignItems = 'center';
mouseTrackContain.style.justifyContent = 'center';

mouseTrackHeading.style.padding = '0 10px';
mouseTrackHeading.style.color = 'white';
mouseTrackHeading.style.textAlign = 'center';
mouseTrackHeading.textContent = `Mouse X: Mouse Y:`;
mouseTrackHeading.paddingRight = '5px';

header.appendChild(mouseTrackContain);
mouseTrackContain.appendChild(mouseTrackHeading);

document.body.addEventListener('mousemove', mouseMoves);

function mouseMoves(e) {
    mouseTrackHeading.textContent = `Mouse X:${e.offsetX} Mouse Y:${e.offsetY}`;
}

// CRAZY HEADER

const mouseTrackButton = document.createElement('button');

mouseTrackButton.textContent = 'Crazy Header!';
mouseTrackButton.style.cursor = 'pointer';
mouseTrackButton.style.position = 'absolute';
mouseTrackButton.style.right = 'calc(50% + -300px)';

mouseTrackHeading.parentElement.appendChild(mouseTrackButton);

mouseTrackButton.addEventListener('click', crazyHeader);

function crazyHeader(e) {
    document.body.addEventListener('mousemove', crazyHeader);
    header.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 30)`;
}

// BUS GO

const busButton = document.querySelector('#bus-go');
const busImage = document.querySelector('header img');

busButton.addEventListener('click', () => {
    busImage.classList.add('start-bus');
});

// event propagation

document.querySelector('.content-pick').addEventListener('click', (e) => {
    e.target.style.background = 'green';
});
document.querySelector('.content-pick .btn').addEventListener('click', (e) => {
    e.target.style.background = 'pink';
    e.stopPropagation();
});

// Stop the navigation items from refreshing the page

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(el => el.addEventListener('click', (e) => e.preventDefault()));

// animationstart

busImage.addEventListener('animationstart', () => {
    busButton.textContent = 'Bus Go Bye-Bye';
});

// animationend

busImage.addEventListener('animationend', () => {
    busImage.style.display = 'none';
    busButton.textContent = 'Bus Gone';
});

// move header on scroll

window.onscroll = () => {
    if (this.oldScroll > this.scrollY) {
        header.style.left = `${this.pageYOffset}px`;
    }
    if (this.oldScroll < this.scrollY) {
        header.style.left = `${this.scrollY}px`;
    }
    this.oldScroll = this.scrollY;
}

// logo resize

const logo = document.querySelector('.logo-heading')

logo.addEventListener('mouseenter', upScale);
logo.addEventListener('mouseleave', downScale);

function upScale(e) {
    e.target.style.transform = 'scale(1.5)';
    e.target.style.transition = '1s transform';
}

function downScale(e) {
    e.target.style.transform = 'scale(1)';
    e.target.style.transition = '1s transform';
}

// copy event

logo.addEventListener('copy', () => alert('Nice Copy Job Bro!'));


// transitionstart event

busImage.addEventListener('mouseover', shake);
busImage.addEventListener('mouseout', shakeRemove);

function shake() {
    busButton.classList.add('shake');
}
function shakeRemove() {
    busButton.classList.remove('shake');
}

// GREENSOCK

const tl = gsap.timeline({ defaults: { duration: 1, ease: "elastic" } })

tl.from('.sock1', { x: -400, stagger: .6, opacity: 0 })
    .from('.sock2', { x: 400, stagger: .6, opacity: 0, rotation: -270 })
    .from('.sock3', { x: -400, stagger: .6, opacity: 0 })
    .from('.sock4', { x: 400, stagger: .6, opacity: 0 })
    .from('.sock5', { x: -400, stagger: .6, opacity: 0 })
    .from('.sock6', { x: 400, stagger: .6, opacity: 0 })
    .from('.sock7', { x: -400, stagger: .6, opacity: 0 })
    .from('.sock8', { x: 400, stagger: .6, opacity: 0 })
    .from('.sock9', { x: -400, stagger: .6, opacity: 0 });