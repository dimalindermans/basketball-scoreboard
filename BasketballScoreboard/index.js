
let counterHome = document.getElementById("counter-home")
let counterGuest = document.getElementById("counter-guest")

let incrementHomeBtn1 = document.getElementById("increment-home-btn1")
let incrementGuestBtn1 = document.getElementById("increment-guest-btn1")

let incrementHomeBtn2 = document.getElementById("increment-home-btn2")
let incrementGuestBtn2 = document.getElementById("increment-guest-btn2")

let incrementHomeBtn3 = document.getElementById("increment-home-btn3")
let incrementGuestBtn3 = document.getElementById("increment-guest-btn3")


let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let countHome = 0
let countGuest = 0

incrementHomeBtn1.addEventListener("click", function() {
    countHome += 1
    counterHome.textContent = countHome
    
    if (countHome > countGuest) {
        homeEl.style.color = 'salmon'
        guestEl.style.color = '#EEEEEE'

    } else if (countHome < countGuest) {
        homeEl.style.color = '#EEEEEE'
        guestEl.style.color = 'salmon'

    } else if (countHome = countGuest) {
        homeEl.style.color = '#EEEEEE'
        guestEl.style.color = '#EEEEEE'
    }   
})

incrementHomeBtn2.addEventListener("click", function() {
    countHome += 2
    counterHome.textContent = countHome
    
    if (countHome > countGuest) {
        homeEl.style.color = 'salmon'
        guestEl.style.color = '#EEEEEE'

    } else if (countHome < countGuest) {
        homeEl.style.color = '#EEEEEE'
        guestEl.style.color = 'salmon'

    } else if (countHome = countGuest) {
        homeEl.style.color = '#EEEEEE'
        guestEl.style.color = '#EEEEEE'
    }     
})

incrementHomeBtn3.addEventListener("click", function() {
    countHome += 3
    counterHome.textContent = countHome
    
    if (countHome > countGuest) {
        homeEl.style.color = 'salmon'
        guestEl.style.color = '#EEEEEE'

    } else if (countHome < countGuest) {
        homeEl.style.color = '#EEEEEE'
        guestEl.style.color = 'salmon'

    } else if (countHome = countGuest) {
        homeEl.style.color = '#EEEEEE'
        guestEl.style.color = '#EEEEEE'
    }     
})

incrementGuestBtn1.addEventListener("click", function() {
    countGuest += 1
    counterGuest.textContent = countGuest
    
    if (countHome < countGuest) {
        homeEl.style.color = '#EEEEEE'
        guestEl.style.color = 'salmon'

    } else if (countHome > countGuest) {
            homeEl.style.color = 'salmon'
            guestEl.style.color = '#EEEEEE'

    } else if (countHome = countGuest) {
        homeEl.style.color = '#EEEEEE'
        guestEl.style.color = '#EEEEEE'  
    }      
})

incrementGuestBtn2.addEventListener("click", function() {
    countGuest += 2
    counterGuest.textContent = countGuest
    
    if (countHome < countGuest) {
        homeEl.style.color = '#EEEEEE'
        guestEl.style.color = 'salmon'

    } else if (countHome > countGuest) {
            homeEl.style.color = 'salmon'
            guestEl.style.color = '#EEEEEE'

    } else if (countHome = countGuest) {
        homeEl.style.color = '#EEEEEE'
        guestEl.style.color = '#EEEEEE'  
    }      
})

incrementGuestBtn3.addEventListener("click", function() {
    countGuest += 3
    counterGuest.textContent = countGuest
    
    if (countHome < countGuest) {
        homeEl.style.color = '#EEEEEE'
        guestEl.style.color = 'salmon'

    } else if (countHome > countGuest) {
            homeEl.style.color = 'salmon'
            guestEl.style.color = '#EEEEEE'

    } else if (countHome = countGuest) {
        homeEl.style.color = '#EEEEEE'
        guestEl.style.color = '#EEEEEE'  
    }      
})


function newGame() {
    counterHome.textContent = 0
    counterGuest.textContent = 0
    countHome = 0
    countGuest = 0
    homeEl.style.color = '#EEEEEE'
    guestEl.style.color = '#EEEEEE'
}