var x, y;
var angle;

function radian(degree) {
    return degree * Math.PI / 180;
}

function moveForward(distance, context) {
    let a = radian(angle);
    x = x + distance * Math.cos(a);
    y = y + distance * Math.sin(a);
    context.lineTo(x, y);    
}

function turnRight(degree) {
    angle = angle - degree;
    if (angle < 0) angle = angle + 360;
}

function turnLeft(degree) {
    angle = angle + degree;
    if (angle > 360) angle = angle - 360;
}

function DrawSpiral(context) {
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    
    angle = 0.0; 
    context.moveTo(x, y);
    context.beginPath();
    for (let counter = 3; counter < 600; counter += 3) {
        moveForward(counter, context);
        context.stroke();
        turnRight(89);
        for(let i = 1; i<8; i++){
            moveForward(i*6, context)
            turnLeft(72)
        }
        for(let i = 1; i<8; i++){
            moveForward(i*2, context)
            turnRight(72)
        }
    }
}
// gsap animation 
const tl = gsap.timeline({defaults:{duration:.2}})

function openPageAnimation(name,y1,op1,y2,op2,drt) {
    tl.fromTo(name,{
    y:y1,
    opacity:op1
},
{
    y:y2,
    opacity:op2,
    duration:drt
})}
function scrollDownAnimation(name,y1,op1,y2,op2,drt){
    gsap.fromTo(name,
        {
            y:y1,
            opacity:op1
        },
        {
            scrollTrigger:{
                trigger:name,
                start:'50 80%',
            },
            y:y2,
            opacity:op2,
            duration:drt
        })
}
//Navigation Bar options light
document.addEventListener('DOMContentLoaded', ()=>{
    let currentURL = window.location.pathname
    let links = document.querySelectorAll(".nav-links a")
    links.forEach(link=>{
        if(link.getAttribute('href').slice(1) == currentURL){
            link.classList.add('active')
        }
    })
})
//Page Animation
gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', ()=>{
    let currentURL = window.location.pathname
    const firstRowLeft = document.querySelector('.first-row-left')
    const firstRowRight = document.querySelector('.first-row-right')
    const secondRow = document.querySelector('.second-row')
    const thirdtRow = document.querySelector('.third-row')
    const headingWord = document.querySelector('#heading-word')
    const headingP = document.querySelector('#heading-p')
    const teamMemberCards = document.querySelectorAll('.team-introduction-section-cards-holder-card')

    if(currentURL === "/hour-of-code.html"){
        openPageAnimation(firstRowLeft,200,0,0,1,.7)
        openPageAnimation(firstRowRight,200,0,0,1,.7)
        scrollDownAnimation(secondRow,200,0,0,1,.7)
        scrollDownAnimation(thirdtRow,200,0,0,1,.7)
    }
    if(currentURL === "/index.html"){
        openPageAnimation(headingWord,100,0,0,1,.4)
        openPageAnimation(headingP,100,0,0,1,.4)
        openPageAnimation(teamMemberCards,150,0,0,1,.6)
    }
},)




