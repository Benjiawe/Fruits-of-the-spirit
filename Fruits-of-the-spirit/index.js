let container = document.getElementById("container")
let love = document.getElementById("love")
let loveVerse = document.getElementById("love-verse")
let goBack = document.getElementById("go-back")
let joy = document.getElementById("joy")
let joyVerse = document.getElementById("joy-verse")
let peace = document.getElementById("peace")
let peaceVerse = document.getElementById("peace-verse")
let patience = document.getElementById("patience")
let patienceVerse = document.getElementById("patience-verse")
let kindness = document.getElementById("kindness")
let kindnessVerse = document.getElementById("kindness-verse")
let goodness = document.getElementById("goodness")
let goodnessVerse = document.getElementById("goodness-verse")
let gentleness = document.getElementById("gentleness")
let gentlenessVerse = document.getElementById("gentleness-verse")
let selfControl = document.getElementById("self-control")
let selfControlVerse = document.getElementById("self-control-verse")
love.addEventListener("click", () => {
    container.style.display = "none";
    loveVerse.style.display = "block"
    goBack.style.display = "block"
})
goBack.addEventListener("click", () => {
    container.style.display = "block";
    loveVerse.style.display = "none"
    joyVerse.style.display = "none"
    peaceVerse.style.display = "none"
    patienceVerse.style.display = "none"
    kindnessVerse.style.display = "none"
    goodnessVerse.style.display = "none"
    gentlenessVerse.style.display = "none"
    selfControlVerse.style.display = "none"
    goBack.style.display = "none"
})
joy.addEventListener("click", () => {
    container.style.display = "none";
    joyVerse.style.display = "block"
    goBack.style.display = "block"
})
peace.addEventListener("click", () => {
    container.style.display = "none";
    peaceVerse.style.display = "block"
    goBack.style.display = "block"
})
patience.addEventListener("click", () => {
    container.style.display = "none";
    patienceVerse.style.display = "block"
    goBack.style.display = "block"
})
kindness.addEventListener("click", () => {
    container.style.display = "none";
    kindnessVerse.style.display = "block"
    goBack.style.display = "block"
})
goodness.addEventListener("click", () => {
    container.style.display = "none";
    goodnessVerse.style.display = "block"
    goBack.style.display = "block"
})
gentleness.addEventListener("click", () => {
    container.style.display = "none";
    gentlenessVerse.style.display = "block"
    goBack.style.display = "block"
})
selfControl.addEventListener("click", () => {
    container.style.display = "none";
    selfControlVerse.style.display = "block"
    goBack.style.display = "block"
})