const yearsRemainingTable = require('./lifeExpectancy.json')

export default class LifeExpectancy {
  constructor(age) {
    this.age = age
  }

  yearsRemaining() {
    return yearsRemainingTable[this.age]
  }
}