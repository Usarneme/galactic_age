import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import GalacticAge from './GalacticAge'
import LifeExpectancy from './LifeExpectancy'

let age
let myGalacticAge
let myLifeExpectancy

// helper functions
function updateEarthAge(event) {
  age = (Date.now() - event.target.valueAsNumber) / 1000 / 60 / 60 / 24 / 365.25
  myGalacticAge = new GalacticAge(age)
  myLifeExpectancy = new LifeExpectancy(Math.floor(age))
  $(".warning").hide()
  $(".age").text(`You are approximately ${myGalacticAge.earthAge.toFixed(2)} years old on Earth. You are expected to have ${myLifeExpectancy.yearsRemaining()} Earth years of life left.`).show()
}

function updateGalacticAge(planet, galacticAge, galacticYearsRemaining) {
  $(".galactic-age").text(`On ${planet} you are ${galacticAge} years old! You are expected to have ${galacticYearsRemaining} ${planet} years of life remaining!`)
  $(".galactic-age-container").show()
}

// event listeners
$("#datepicker").on("change", event => {
  if (event && event.target && event.target.valueAsNumber && !isNaN(event.target.valueAsNumber)) updateEarthAge(event)
})

$("#datepicker").on("blur", event => {
  if (event && event.target && event.target.valueAsNumber && !isNaN(event.target.valueAsNumber)) updateEarthAge(event)
})

$("#datepicker").on("focus", event => {
  if (event && event.target && event.target.valueAsNumber && !isNaN(event.target.valueAsNumber)) updateEarthAge(event)
})

$("#close-warning").on("click", () => {
  $(".warning").hide()
})

$(".planets").on("click", "div", function(event) {
  event.stopPropagation()
  age = (Date.now() - $("#datepicker")[0].valueAsNumber) / 1000 / 60 / 60 / 24 / 365.25
  if (age === undefined) return $(".warning").show()
  myGalacticAge = new GalacticAge(age)
  myLifeExpectancy = new LifeExpectancy(Math.floor(age))
  const earthYearsRemaining = myLifeExpectancy.yearsRemaining()
  const galacticYearsRemaining = new GalacticAge(earthYearsRemaining)
  if (this.classList[0] === "jupiter") {
    return updateGalacticAge("Jupiter", myGalacticAge.ageOnJupiter().toFixed(2), galacticYearsRemaining.ageOnJupiter().toFixed(2))
  }
  if (this.classList[0] === "venus") {
    return updateGalacticAge("Venus", myGalacticAge.ageOnVenus().toFixed(2), galacticYearsRemaining.ageOnVenus().toFixed(2))
  }
  if (this.classList[0] === "mercury") {
    return updateGalacticAge("Mercury", myGalacticAge.ageOnMercury().toFixed(2), galacticYearsRemaining.ageOnMercury().toFixed(2))
  }
  if (this.classList[0] === "mars") {
    return updateGalacticAge("Mars", myGalacticAge.ageOnMars().toFixed(2), galacticYearsRemaining.ageOnMars().toFixed(2))
  }
})