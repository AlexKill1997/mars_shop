const openButton = document.querySelector("#openOverlay");
const overlayElement = document.querySelector("#overlay");

openButton.addEventListener('click', function(e) {
    overlayElement.style.display = 'flex';
})

overlayElement.addEventListener('click', function(e) {

    overlayElement.style.display = 'none';

})

const openButton_2 = document.querySelector("#openOverlay_2");
const overlayElement_2 = document.querySelector("#overlay_2");

openButton_2.addEventListener('click', function(e) {
    overlayElement_2.style.display = 'flex';
})

overlayElement_2.addEventListener('click', function(e) {

    overlayElement_2.style.display = 'none';

})