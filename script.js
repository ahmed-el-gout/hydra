const observer = new IntersectionObserver(entries => {
    // console.log(entries)
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })
},{
    threshold:.5,
});

// nav items 
let navItems = document.querySelectorAll('.nav-item');
// console.log(navItems);

// nav bar buttons
let navButtons = document.querySelector('.navbar-button').getElementsByTagName('button');
// console.log(navButtons);

// get first and second image from heading
let headingImages = document.querySelector('.image').getElementsByTagName('img');
// heading (title) and para
let headingTitle = document.getElementsByTagName('h1')[0];
let headingPara  = document.getElementsByTagName('p')[0];

// button heading 
let buttonHeading = document.querySelector('.heading-button');

// info section (scrolabe)
let infoSection = document.querySelector('.info');

let titleH3 = document.getElementsByTagName('h3');
// console.log(titleH3);
let paras = document.getElementsByTagName('p');

let aboutImage = document.querySelector('.about_image')

let buttonAboutSection = document.querySelector('.about_btn');

// console.log(buttonAboutSection);

let cards = document.querySelectorAll('.card');
let steps = document.querySelectorAll('.step');
let partners = document.querySelectorAll('.partner').forEach(partner => {
    observer.observe(partner.querySelector('img'))
});


let inputs = document.querySelectorAll('input');

Array.from(inputs).forEach(input => {
    observer.observe(input);
})
// console.log(partners);
Array.from(cards).forEach(card => {
    observer.observe(card);
})

Array.from(steps).forEach(step => {
    observer.observe(step);
})


Array.from(titleH3).forEach(title => {
    observer.observe(title);
})


Array.from(paras).forEach(para => {
    observer.observe(para);
})


// observe images
Array.from(headingImages).forEach(image => {
    observer.observe(image);
})
Array.from(navItems).forEach(item => {
    observer.observe(item);
})
// observe heading (title)
observer.observe(headingTitle);
observer.observe(headingPara);
observer.observe(buttonHeading);
observer.observe(infoSection);
Array.from(navButtons).forEach(btn => {
    observer.observe(btn)
})
// console.log(aboutImage);
observer.observe(aboutImage);
observer.observe(buttonAboutSection);
