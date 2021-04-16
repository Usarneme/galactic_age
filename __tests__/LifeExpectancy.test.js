import LifeExpectancy from '../src/LifeExpectancy'

describe("LifeExpectancy", () => {
  test("sanity check", () => {
    expect(true).toEqual(true)
  })

  test("LifeExpectancy class should exist", () => {
    const myLifeExpectancy = new LifeExpectancy()
    expect(myLifeExpectancy).toBeDefined()
  })

  test("LifeExpectancy should take in an age and store it", () => {
    const age = 15
    const myLifeExpectancy = new LifeExpectancy(age)
    expect(myLifeExpectancy.age).toEqual(age)
  })
})