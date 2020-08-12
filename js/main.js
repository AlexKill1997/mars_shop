////////Links preventdefault/////
const a = document.querySelector("#link_1");

a.addEventListener("click", function(e) {
    e.preventDefault();
})

const b = document.querySelector("#link_2");

b.addEventListener("click", function(e) {
    e.preventDefault();
})

const c = document.querySelector("#link_3");

c.addEventListener("click", function(e) {
    e.preventDefault();
})

const d = document.querySelector("#link_4");

d.addEventListener("click", function(e) {
    e.preventDefault();
})

const f = document.querySelector("#link_5");

f.addEventListener("click", function(e) {
    e.preventDefault();
})

/////review_menu/////
const pic_1 = document.querySelector("#picture_1");

const pic_2 = document.querySelector("#picture_2");

const pic_3 = document.querySelector("#picture_3");
const box_1 = document.querySelector("#review__box_1");
const box_2 = document.querySelector("#review__box_2");
const box_3 = document.querySelector("#review__box_3");

pic_2.addEventListener("click", function() {
    box_2.style.display = 'flex';
    box_1.style.display = 'none';
    box_3.style.display = 'none';
})

pic_3.addEventListener("click", function() {
    box_3.style.display = 'flex';
    box_1.style.display = 'none';
    box_2.style.display = 'none';
})

pic_1.addEventListener("click", function() {
    box_3.style.display = 'none';
    box_1.style.display = 'flex';
    box_2.style.display = 'none';
})

/////onepagescroll///

const sections = $('.section');

const display = $('.maincontent');

const sectionChange = sectionNum => {
    console.log(sectionNum)
    const position = sectionNum * -100;

    sections.eq(sectionNum).addClass('active').siblings().removeClass('active');

    display.css({

        transform: `translateY(${position}%)`

    })

}

const scrollTo = direction => {
    const activeSection = sections.filter('.active')
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === "next" && nextSection.length) {
        console.log(nextSection.index())
        sectionChange(nextSection.index());
    }

    if (direction === "prev" && prevSection.length) {
        sectionChange(prevSection.index());
    }
}

$(window).on('wheel', e => {

    const deltaY = e.originalEvent.deltaY;


    if (deltaY < 0) {

        scrollTo("prev");
    }

    if (deltaY > 0) {
        scrollTo("next");
    };




});