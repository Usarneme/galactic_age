import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import GalacticAge from './GalacticAge'

let age
let myGalacticAge
function updateAge(event) {
  age = (Date.now() - event.target.valueAsNumber) / 1000 / 60 / 60 / 24 / 365.25
  myGalacticAge = new GalacticAge(age)
  $(".age").text(`You are approximately ${myGalacticAge.earthAge.toFixed(2)} years old on Earth.`).show()
}

$("#datepicker").on("change", event => {
  if (event && event.target && event.target.valueAsNumber && !isNaN(event.target.valueAsNumber)) updateAge(event)
})

$("#datepicker").on("blur", event => {
  if (event && event.target && event.target.valueAsNumber && !isNaN(event.target.valueAsNumber)) updateAge(event)
})

$("#datepicker").on("focus", event => {
  if (event && event.target && event.target.valueAsNumber && !isNaN(event.target.valueAsNumber)) updateAge(event)
})
