//-----------------------------------------//
let body = document.querySelector("body");
let slide = document.querySelector(".slide");
let left = document.querySelector(".leftline");
left.addEventListener('click', function(e) {
    e.stopPropagation();
    slide.classList.toggle("active");
});
body.addEventListener('click', function(e){
    slide.classList.remove("active");
});
let imginp = document.querySelector(".imgup");
let addimg = document.querySelector(".Add");
addimg.addEventListener('click', () => {imginp.click();})


let vidup = document.querySelector(".vidup");
let addvid = document.querySelector(".Add2");
addvid.addEventListener('click', () => {vidup.click();})