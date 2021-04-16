import GalacticAge from "../src/GalacticAge"

describe("Galactic Age", () => {
  test("sanity check", () => {
    expect(true).toEqual(true)
  })

  let myGalacticAge
  const yearsOld = 100
  beforeEach(() => {
    myGalacticAge = new GalacticAge(yearsOld)
  })

  test("GalacticAge class should construct an object", () => {
    expect(myGalacticAge).toBeDefined()
  })

  test("GA should contain a method to determine age on Mercury", () => {
    expect(myGalacticAge.ageOnMercury).toBeDefined()
  })

  test("GA.ageOnMercury should return their correct age on that planet", () => {
    expect(myGalacticAge.ageOnMercury()).toEqual(yearsOld/.24)
  })

  test("GA should contain a method to determine age on Venus", () => {
    expect(myGalacticAge.ageOnVenus).toBeDefined()
  })
})
