
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









    // let fields = []
    // fields[form["name"].name] = form["name"].value;
    // fields[form["l-name"].name] = form["l-name"].value;
    // fields[form["work"].name] = form["work"].value;
    // console.log('FIRST WAY - ', fields);

    // let formFields = {
    //     name: form['name'].value,
    //     lName: form['l-name'].value,
    //     work: form['work'].value
    // };
    // console.log('SECOND WAY - ', formFields);

    // let test = [];
    // test.push({
    //     name: form['name'].name,
    //     val: form['name'].value
    // });
    // test.push({
    //     name: form['l-name'].name,
    //     val: form['l-name'].value
    // });
    // test.push({
    //     name: form['work'].name,
    //     val: form['work'].value
    // });
    // console.log('THIRD WAY - ', test);

       
    // for (let i = 0; i < Object.keys(fields).length ; i++) {
    //     console.log('test');
    //     console.log(fields[i]);
    //     if (fields[i] === "") {
    //         alert(`${fields[i]} must be filled out`);
    //         console.log(`${fields[i]} must be filled out`);
    //         return false;
    //     }
    // }