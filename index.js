/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const convertBtn = document.getElementById("convert-btn")
const inputNum = document.getElementById("input-number")

const meterFeetEl = document.getElementById("meter-feet")
const litresGallonsEl = document.getElementById("litres-gallons")
const kilogramsPoundsEl = document.getElementById("kilograms-pounds")

convertBtn.addEventListener("click", renderResult)

function renderResult() {
    const number = inputNum.value

    // Convert to metres to feet
    const metresToFeet = (number * 3.28084).toFixed(3)
    // Convert feet to metres
    const feetToMetres = (number * (1 / 3.28084)).toFixed(3)

    // Convert to litres to gallons
    const litresToGallons = (number * 0.264172).toFixed(3)
    // Convert gallons to litres
    const gallonsToLitres = (number * (1 / 0.264172)).toFixed(3)

    // Convert to kilograms to pounds
    const kilogramsToPounds = (number * 2.20462).toFixed(3)
    // Convert pounds to kilograms
    const poundsToKilograms = (number * (1 / 2.20462)).toFixed(3)

    if (number > 0) {
        meterFeetEl.innerText = `
            ${number} metres = ${metresToFeet} feet
            ${number} feet = ${feetToMetres} metres
            `
        litresGallonsEl.innerText = `
            ${number} litres = ${litresToGallons} gallons
            ${number} gallons = ${gallonsToLitres} litres
        `
        kilogramsPoundsEl.innerText = `
            ${number} kilos = ${kilogramsToPounds} pounds
            ${number} pounds = ${poundsToKilograms} kilos
        `
    } else {
        alert("Enter a number > 0!")
    }
    
}