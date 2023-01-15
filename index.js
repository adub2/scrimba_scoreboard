//score button functions
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

function HomeAdd1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function HomeAdd2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function HomeAdd3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function GuestAdd1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function GuestAdd2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function GuestAdd3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}




