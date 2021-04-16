
describe("LifeExpectancy", () => {
  test("sanity check", () => {
    expect(true).toEqual(true)
  })

  test("LifeExpectancy class should exist", () => {
    const myLifeExpectancy = new LifeExpectancy()
    expect(myLifeExpectancy).toBeDefined()
  })
})