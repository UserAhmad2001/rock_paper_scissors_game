const choices = [
    './images/icon-rock.svg',
    './images/icon-paper.svg',
    './images/icon-scissors.svg'
]

// THIS IS THE RULES WINDOW LOGIC
document.querySelector('#rules-btn')
.addEventListener('click', rulesWindow)
document.querySelector('#close-btn')
.addEventListener('click',rulesWindow)
function rulesWindow(e){
    var rules = document.querySelector('#rules-container')
    if(rules.style.display === "flex"){
        rules.style.opacity = "0";
        rules.style.display = "none";
        
    }else{
        rules.style.display = "flex";
        rules.style.opacity = "1";
    }
}
// THIS IS THE RULES WINDOW LOGIC


// THIS IS THE GAME LOGIC
document.querySelectorAll('rps')
.forEach(el =>{
    el.addEventListener('click', rps_handler)
})
function rps_handler(e){
document.querySelector('.rps-choice').style.display = 'none'

}


// THIS IS THE GAME LOGIC

