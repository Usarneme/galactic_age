import GalacticAge from "../src/GalacticAge"

describe("Galactic Age", () => {
  test("sanity check", () => {
    expect(true).toEqual(true)
  })

  let myGalacticAge
  const earthAge = 100
  beforeEach(() => {
    myGalacticAge = new GalacticAge(earthAge)
  })

  test("GalacticAge class should construct an object", () => {
    expect(myGalacticAge).toBeDefined()
  })

  test("GA should contain a method to determine age on Mercury", () => {
    expect(myGalacticAge.ageOnMercury).toBeDefined()
  })

  test("GA.ageOnMercury should return their correct age on that planet", () => {
    expect(myGalacticAge.ageOnMercury()).toEqual(earthAge/.24)
  })

  test("GA should contain a method to determine age on Venus", () => {
    expect(myGalacticAge.ageOnVenus).toBeDefined()
  })

  test("GA.ageOnVenus should return their correct age on that planet", () => {
    expect(myGalacticAge.ageOnVenus()).toEqual(earthAge/.62)
  })

  test("GA should contain a method to determine age on Mars", () => {
    expect(myGalacticAge.ageOnMars).toBeDefined()
  })

  test("GA.ageOnMars should return their correct age on that planet", () => {
    expect(myGalacticAge.ageOnMars()).toEqual(earthAge/1.88)
  })

  test("GA should contain a method to determine age on Jupiter", () => {
    expect(myGalacticAge.ageOnJupiter).toBeDefined()
  })

  test("GA.ageOnJupiter should return their correct age on that planet", () => {
    expect(myGalacticAge.ageOnJupiter()).toEqual(earthAge/11.86)
  })

})
