let inputEL = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
let lenEl = document.getElementById("len")
let volEl = document.getElementById("vol")
let massEl = document.getElementById("mass")

inputBtn.addEventListener("click", function () {
    if(inputEL.value) {
        conversions() 
    }
})

function conversions() {
    let num = inputEL.value
    
    let meter = num / 3.281
    meter = meter.toFixed(3)
    
    let feet = num * 3.281
    feet = feet.toFixed(3)

    let liters = 0.264 * num
    liters = liters.toFixed(3)

    let gallons = num / 0.264
    gallons = gallons.toFixed(3)

    let kg = num / 2.204
    kg = kg.toFixed(3)

    let pounds = num * 2.204
    pounds = pounds.toFixed(3)

    render(num, meter, feet, liters, gallons, kg, pounds)
}

function render(val, m, ft, lit, gal, kilo, pnds) {
    let length = `${val} meters = ${ft} feet | ${val} feet = ${m} meters`
    let volume = `${val} liters = ${gal} gallons | ${val} gallons = ${lit} liters`
    let mass = `${val} kilos = ${pnds} pounds | ${val} pounds = ${kilo} kilos`

    lenEl.textContent = length
    volEl.textContent = volume 
    massEl.textContent = mass  
}