const choices = [
    './images/icon-rock.svg',
    './images/icon-paper.svg',
    './images/icon-scissors.svg'
]
var rps_choice = document.querySelector('.rps-choice')
var rps_results = document.querySelector('.rps-results')
var house_picked = document.querySelector('.house-choice-img')
var player_picked = document.querySelector('.player-choice-img')
var result_sec = document.querySelector('.result-txt-btn') 
var res_txt = document.querySelector('.result')
var score = document.querySelector('.score')
var mChoice = document.querySelector('.my-choice')
var hChoice = document.querySelector('.house-choice')
var stored_score = localStorage.getItem('score')
if(stored_score !== '' && stored_score !== null){
    console.log(localStorage.getItem('score'));
    score.innerHTML = stored_score
}
var win = document.querySelector('.win')
var lose = document.querySelector('.lose')

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
document.querySelector('.play-again')
.addEventListener('click',play_again)
document.querySelectorAll('.rps')
.forEach(el =>{
    el.addEventListener('click', rps_handler)
})
function rps_handler(e){
player_choice = e.currentTarget.children[0].src
player_picked.children[0].src = player_choice
rps_choice.style.display = 'none'
rps_results.style.display = 'flex'
setPlayerPickedStyling(player_choice)
setTimeout(timer_function, 1000);
}
function play_again(e){
    result_sec.style.display = 'none'
    rps_results.style.display = 'none'
    rps_choice.style.display = 'flex'
    house_picked.style.display = 'none'
    document.querySelector('.focused').remove();
}
function changeScore(rand , player_ch){

    if(player_ch.includes('/images/icon-rock.svg') && rand === choices[0]){
        res_txt.innerHTML = "IT'S A DRAW"
    }
    else if(player_ch.includes('/images/icon-paper.svg') && rand === choices[1]){
        res_txt.innerHTML = "IT'S A DRAW"
    }
    else if(player_ch.includes('/images/icon-scissors.svg') && rand === choices[2]){
        res_txt.innerHTML = "IT'S A DRAW"
    }
    else if(player_ch.includes('/images/icon-rock.svg') && rand === choices[1]){
        res_txt.innerHTML = "YOU LOST"
        lose.play()
        var current_score = Number.parseInt(score.innerHTML)
        current_score--
        score.innerHTML = current_score
        focusOnWinner(false)
    }
    else if(player_ch.includes('/images/icon-rock.svg') && rand === choices[2]){
        res_txt.innerHTML = "YOU WON"
        win.play()
        var current_score = Number.parseInt(score.innerHTML)
        current_score++
        score.innerHTML = current_score
        focusOnWinner(true)
    }
    else if(player_ch.includes('/images/icon-paper.svg') && rand === choices[0]){
        res_txt.innerHTML = "YOU WON"
        win.play()
        var current_score = Number.parseInt(score.innerHTML)
        current_score++
        score.innerHTML = current_score
        focusOnWinner(true)
    }
    else if(player_ch.includes('/images/icon-paper.svg') && rand === choices[2]){
        res_txt.innerHTML = "YOU LOST"
        lose.play()
        var current_score = Number.parseInt(score.innerHTML)
        current_score--
        score.innerHTML = current_score
        focusOnWinner(false)
    }
    else if(player_ch.includes('/images/icon-scissors.svg') && rand === choices[0]){
        res_txt.innerHTML = "YOU LOST"
        lose.play()
        var current_score = Number.parseInt(score.innerHTML)
        current_score--
        score.innerHTML = current_score
        focusOnWinner(false)
    }
    else if(player_ch.includes('/images/icon-scissors.svg') && rand === choices[1]){
        res_txt.innerHTML = "YOU WON"
        win.play()
        var current_score = Number.parseInt(score.innerHTML)
        current_score++
        score.innerHTML = current_score
        focusOnWinner(true)
    }

    localStorage.setItem('score', score.innerHTML)
}
function focusOnWinner(player){
    var el = document.createElement('span')
    el.classList = 'focused'

    if(player){
        mChoice.appendChild(el)
    }
    else{
        hChoice.appendChild(el)
    }

}
function timer_function(){
    var house_picked = document.querySelector('.house-choice-img')
    house_picked.style.display = 'flex'
    var rand = choices[Math.round(Math.random() * 2)]
    house_picked.children[0].src = rand
    result_sec.style.display = 'flex'
    changeScore(rand, player_choice)
    setHousePickedStyling(rand)
}
function setHousePickedStyling(hp){
    var house_p = document.getElementById('hp')
    if(hp.includes('rock')){
        console.log('rock');
        house_p.classList += ' results-rock'
    }
    else if(hp.includes('paper')){
        console.log('paper');
        house_p.classList += ' results-paper'
    }
    else if(hp.includes('scissors')){
        console.log('scissors');
        house_p.classList += ' results-scissors'
    }

}
function setPlayerPickedStyling(pp){
    var house_p = document.getElementById('pp')
    if(pp.includes('rock')){
        house_p.classList += ' results-rock'
    }
    else if(pp.includes('paper')){
        house_p.classList += ' results-paper'
    }
    else if(pp.includes('scissors')){
        house_p.classList += ' results-scissors'
    }

}

// THIS IS THE GAME LOGIC

