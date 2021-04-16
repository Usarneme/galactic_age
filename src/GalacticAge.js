export default class GalacticAge {
  constructor(age) {
    this.earthAge = age
  }

  ageOnMercury() {
    return this.earthAge / 0.24
  }

  ageOnVenus() {
    return this.earthAge / 0.62
  }

  ageOnMars() {}
}