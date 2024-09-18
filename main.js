let menuIcon = document.getElementById('menu');
let closeMenu = document.getElementById('close-menu');
let navLinks = document.querySelector('nav ul ');
let navLinks2 = document.querySelector('nav .menu2 ');
let downArrow = document.getElementsByClassName('down ')[0];
let upArrow = document.getElementsByClassName("up")[0];
let downArrow1 = document.getElementsByClassName('down ')[1];;
let upArrow1 = document.getElementsByClassName("up")[1];
let slide1 = document.querySelector(' .slide1');
let slide2 = document.querySelector('.slide2')
console.log(navLinks2)
console.log(downArrow)

menuIcon.addEventListener('click', () => {
    menuIcon.style.display = 'none';
    closeMenu.style.display = 'block';
    navLinks.style.transform = 'translateX(0)';
    navLinks2.style.transform = 'translateX(0)';

});

closeMenu.addEventListener('click', () => {
    menuIcon.style.display = 'block';
    closeMenu.style.display = 'none';
    navLinks.style.transform = 'translateX(100%)';
    navLinks2.style.transform = 'translateX(100%)';
    navLinks2.style.display='block'

});
/*Arrow*/
/*features*/
downArrow.addEventListener('click', () => {
    upArrow.style.display = 'block';
    downArrow.style.display = 'none';
    slide1.style.display = 'none';
});
upArrow.addEventListener('click', () => {
    upArrow.style.display = 'none';
    downArrow.style.display = 'block';
    slide1.style.display = 'block';
})
/*company*/
downArrow1.addEventListener('click', () => {
    upArrow1.style.display = 'block';
    downArrow1.style.display = 'none';
    slide2.style.display = 'none'
});
upArrow1.addEventListener('click', () => {
    upArrow1.style.display = 'none';
    downArrow1.style.display = 'block';
    slide2.style.display = 'block'
})

/////

