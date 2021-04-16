import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import GalacticAge from './GalacticAge'

let age
let myGalacticAge

// helper functions
function updateAge(event) {
  age = (Date.now() - event.target.valueAsNumber) / 1000 / 60 / 60 / 24 / 365.25
  myGalacticAge = new GalacticAge(age)
  $(".warning").hide()
  $(".age").text(`You are approximately ${myGalacticAge.earthAge.toFixed(2)} years old on Earth.`).show()
}

// event listeners
$("#datepicker").on("change", event => {
  if (event && event.target && event.target.valueAsNumber && !isNaN(event.target.valueAsNumber)) updateAge(event)
})

$("#datepicker").on("blur", event => {
  if (event && event.target && event.target.valueAsNumber && !isNaN(event.target.valueAsNumber)) updateAge(event)
})

$("#datepicker").on("focus", event => {
  if (event && event.target && event.target.valueAsNumber && !isNaN(event.target.valueAsNumber)) updateAge(event)
})

$("#close-warning").on("click", () => {
  $(".warning").hide()
})

$(".planets").on("click", "div", function(event) {
  event.stopPropagation()
  if (age === undefined) return $(".warning").show()
  if (this.classList[0] === "jupiter") {
    console.log("jupiter")
  }
  if (this.classList[0] === "venus") {
    console.log("venus")
  }
  if (this.classList[0] === "mercury") {
    console.log("mercury")
  }
  if (this.classList[0] === "mars") {
    console.log("mars")
  }
})