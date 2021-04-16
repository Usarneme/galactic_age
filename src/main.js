import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'

// $("section").text("TEST TEXT INPUT")
console.log($)
let age

$("#datepicker").on("change", event => {
  console.log("date change",event.target.valueAsNumber)
  age = (Date.now() - event.target.valueAsNumber) / 1000 / 60 / 60 / 24 / 365.25
  console.log(age)
  $(".age").text(`You are approximately ${age.toFixed(2)} years old on Earth.`).show()
})