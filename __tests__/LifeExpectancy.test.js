import LifeExpectancy from '../src/LifeExpectancy'

describe("LifeExpectancy", () => {
  test("sanity check", () => {
    expect(true).toEqual(true)
  })
  const age = 15
  let myLifeExpectancy

  beforeEach(() => {
    myLifeExpectancy = new LifeExpectancy(age)
  })


  test("LifeExpectancy class should exist", () => {
    expect(myLifeExpectancy).toBeDefined()
  })

  test("LifeExpectancy should take in an age and store it", () => {
    expect(myLifeExpectancy.age).toEqual(age)
  })

  test("LE should have a method to calculate years remaining", () => {
    expect(myLifeExpectancy.yearsRemaining).toBeDefined()
  })
})