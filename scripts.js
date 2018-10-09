
// hamburger nav

var hamburgerNav = document.querySelector('.hidden-nav');
var openHamburger = document.querySelector('.hamburger');

openHamburger.addEventListener('click', function() {
    hamburgerNav.classList.toggle('open');
});



// form validation 

var contactForm = document.forms["big-form"];

contactForm.onsubmit = e => {
    // e.preventDefault();
    // console.log('the event is - ', e);
    formValidator(e);
}

function formValidator(e) {
    let theFields = ['first-name', 'last-name', 'email'];
    let theArr = [];
    for (let i = 0; i < theFields.length; i++) {
        theArr.push({
            na: contactForm[theFields[i]].name,
            val: contactForm[theFields[i]].value
        });
    };
 
    for (let i = 0; i < theArr.length ; i++) {
        if (theArr[i].val === "") {
            alert(`${theArr[i].na} must be filled out`);
            e.preventDefault();
        } 
    }
    
}; 

// smooth slide 

function smoothSlide() {
    let element = document.getElementById('arrow-down');
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
