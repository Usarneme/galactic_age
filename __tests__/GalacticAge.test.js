import GalacticAge from "../src/GalacticAge"

describe("Galactic Age", () => {
  test("sanity check", () => {
    expect(true).toEqual(true)
  })

  let myGalacticAge
  beforeEach(() => {
    myGalacticAge = new GalacticAge()
  })

  test("GalacticAge class should construct an object", () => {
    expect(myGalacticAge).toBeDefined()
  })

  test("GA should contain a method to determine age on Mercury", () => {
    expect(myGalacticAge.ageOnMercury).toBeDefined()
  })
})
