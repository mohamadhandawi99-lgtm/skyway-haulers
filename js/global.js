/* Data */

//Get value from data.js
function getValue(object, path) {

    return path.split(".").reduce((value, key) => value?.[key], object);

}

//Set all fillable HTML elements to their corresponding data
document.querySelectorAll("[data-content]").forEach(element => {

    const path = element.dataset.content;
    const value = getValue(data, path);
    if (value !== undefined && value !== null) element.innerHTML = value;

});

//Fill the contact links with their corresponding data and set their action
document.querySelectorAll("[data-contact]").forEach(element => {

    const path = element.dataset.contact;
    const value = getValue(data, path);
    if (value === undefined || value === null) return;
    element.textContent = value;
    if (path.endsWith(".phone")) {
        
        element.href = `tel:${value.replace(/\s/g, "")}`;
        element.title = `Call ${value}`

    }
    if (path.endsWith(".email")) {
        
        element.href = `mailto:${value}`;
        element.title = `Email ${value}`

    }

});


/* Animations */

//Fading elements
const fadingElements___allElements = document.querySelectorAll('.fading-element');
const fadingElements___observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add('fading-element___visible');
            fadingElements___observer.unobserve(entry.target);

        }

    });

});
fadingElements___allElements.forEach((element) => {

    fadingElements___observer.observe(element);

});