const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

// music buttons
const buttonJungle = document.querySelector('.jungle')
const buttonRain = document.querySelector('.rain')
const buttonCoffeeShop = document.querySelector('.coffeeShop')
const buttonFireplace = document.querySelector('.fireplace')
const jungleAudio = new Audio("../sounds/Floresta.wav")
const rainAudio = new Audio("../sounds/Chuva.wav")
const fireplaceAudio = new Audio("../sounds/Lareira.wav")
const coffeeShopAudio = new Audio("../sounds/Cafeteria.wav")


let play = false
let timer

function restartBackgroundButtonMusic() {
    buttonRain.style.backgroundColor = "#E1E1E6"
    buttonJungle.style.backgroundColor = "#E1E1E6"
    buttonFireplace.style.backgroundColor = "#E1E1E6"
    buttonCoffeeShop.style.backgroundColor = "#E1E1E6"
}

function pauseMusics(){
    coffeeShopAudio.pause()
    fireplaceAudio.pause()
    rainAudio.pause()
    jungleAudio.pause()
}


function countdown(){
            timer = setTimeout(function() {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            if(seconds <= 0 && minutes <= 0){
                pauseMusics()
                restartBackgroundButtonMusic()
                return
            }
            
            
            if( seconds == 0 ) {
                seconds = 60
                minutes--
            }
            secondsDisplay.textContent = String(seconds-1).padStart(2, "0")
            minutesDisplay.textContent = String(minutes).padStart(2, "0")
            countdown()
        
    }, 1000);

}

buttonIncrease.addEventListener('click', () => {
    let minutes = Number(minutesDisplay.textContent)
    if(minutes>=59){
        return
    }
    if(minutes>= 55){
        minutesDisplay.textContent = String(minutes + 1).padStart(2, "0")
        return
    }
    minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")
})

buttonDecrease.addEventListener('click', () => {
    let minutes = Number(minutesDisplay.textContent)
    if(minutes<=0){
        return
    }
    if(minutes<= 5){
        minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
        return
    }
    minutesDisplay.textContent = String(minutes - 5).padStart(2, "0")
    
})


buttonPlay.addEventListener('click', function (){
    if(play){
        return
    }

    play = true
    countdown()      
})


buttonPause.addEventListener('click', () => {
    play = false
    clearTimeout(timer)
})

buttonJungle.addEventListener('click', () => {
    restartBackgroundButtonMusic()
    buttonJungle.style.backgroundColor = "#06c0f8"
    pauseMusics()
    jungleAudio.play()
    jungleAudio.loop = true
})


buttonRain.addEventListener('click', () => {
    restartBackgroundButtonMusic()
    buttonRain.style.backgroundColor = "#06c0f8"
    pauseMusics()
    rainAudio.play()
    rainAudio.loop = true
})




buttonCoffeeShop.addEventListener('click', () => {
    restartBackgroundButtonMusic()
    buttonCoffeeShop.style.backgroundColor = "#06c0f8"
    pauseMusics()
    coffeeShopAudio.play()
    coffeeShopAudio.loop = true
})
buttonFireplace.addEventListener('click', () => {
    restartBackgroundButtonMusic()
    buttonFireplace.style.backgroundColor = "#06c0f8"
    pauseMusics()
    fireplaceAudio.play()
    fireplaceAudio.loop = true
})

