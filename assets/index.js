document.querySelector('#rules-btn')
.addEventListener('click', rulesWindow)
document.querySelector('#close-btn')
.addEventListener('click',rulesWindow)
function rulesWindow(e){
    var rules = document.querySelector('#rules-container')
    if(rules.style.display === "flex"){
        rules.style.opacity = "0";
        setTimeout(() => {
            rules.style.display = "none";
        }, 500);
    }else{
        rules.style.display = "flex";
        setTimeout(() => {
            rules.style.opacity = "1";
        }, 100);
    }
}