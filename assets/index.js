const choices = [
    './images\icon-rock.svg',
    './images\icon-paper.svg',
    './images\icon-scissors.svg'
]

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



