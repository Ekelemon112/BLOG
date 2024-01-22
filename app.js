// console.log(window)


// const cardsAll = document.querySelector('.cards-all');
// cardsAll.addEventListener('scroll', (e) => {
//     console.log('scrolling')
// });



// const div1 = document.querySelector('#div_1')
// const div2 = document.querySelector('#div_2')
// const div3 = document.querySelector('#div_3')
// const div4 = document.querySelector('#div_4')
// const h1_1 = document.querySelector('.lorem_1')
// const h1_2 = document.querySelector('.lorem_2')
// const h1_3 = document.querySelector('.lorem_3')
// const h1_4 = document.querySelector('.lorem_4')


// h1_1.addEventListener('click', (e) => {
//     div1.setAttribute('class', 'non_visible')
//     div2.setAttribute('class', 'visble')
// })

// h1_2.addEventListener('click', (e) => {
//     div2.setAttribute('class', 'non_visible')
//     div3.setAttribute('class', 'visble')
// })

// h1_3.addEventListener('click', (e) => {
//     div3.setAttribute('class', 'non_visible')
//     div4.setAttribute('class', 'visble')
// })

// h1_4    .addEventListener('click', (e) => {
//     div4.setAttribute('class', 'non_visible')
//     div1.setAttribute('class', 'visble')
// })

// setInterval(() =>{
//     console.log('hello world');
// }, 3000)


// const starterPack = document.querySelector('#starter-Pack')
// const basicPlan = document.querySelector('#basic-Plan')
// const ProPlan = document.querySelector('#Pro-Plan')
// const EnPlan = document.querySelector('#En-Plan')
// const starter = document.querySelector('#starter')
// const basics = document.querySelector('#basics')
// const ProPlans = document.querySelector('#Pro-Plans')
// const enPlans = document.querySelector('#en-Plans')



// basics.addEventListener('click', (e) => {
//     basicPlan.setAttribute('class', 'pri-card')
//     starterPack.setAttribute('class', 'visble')
// })

// starter.addEventListener('click', (e) => {
//     ProPlan.setAttribute('class', 'pri-card')
//     basicPlan.setAttribute('class', 'visble')
// })

// console.log("hello world");


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("pri-card ");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    document.getElementById(tabname).classList.add("tab-links");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-130px";
}