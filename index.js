window.addEventListener('scroll',()=>{
    const scrolled = window.screenY;
    console.log(scrolled);
});
let hoverC ='#8F46A0'
let hoverC1 ='#FE9AAF'
// get color
const root = document.querySelector(':root');
// get banner2
var banner =document.getElementById('bn');
// get banner1
var banner1 =document.getElementById('bn1');

banner.addEventListener('mouseover',()=>{
    root.style.setProperty('--hover-color',hoverC);
});

banner1.addEventListener('mouseover',()=>{
    root.style.setProperty('--hover-color',hoverC1);
});


// hsl(289, 39%, 45%)