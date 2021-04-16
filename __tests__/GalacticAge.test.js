import GalacticAge from "../src/GalacticAge"

describe("Galactic Age", () => {
  test("sanity check", () => {
    expect(true).toEqual(true)
  })

  test("GalacticAge class should construct an object", () => {
    const myGalacticAge = new GalacticAge()
    expect(myGalacticAge).toBeDefined()
  })
})
