const left = document.querySelector('#left');
const items = document.querySelector('#items');
const right = document.querySelector('#right');

right.addEventListener("click", function(e) {
    e.preventDefault();
    loop("right");
});
left.addEventListener("click", function(e) {
    e.preventDefault();
    loop("left");
})

function loop(direction) {
    if (direction === "right") {
        items.appendChild(items.firstElementChild);
    } else {
        items.insertBefore(items.lastElementChild, items.firstElementChild);
    }
}