import LifeExpectancy from '../src/LifeExpectancy'

describe("LifeExpectancy", () => {
  test("sanity check", () => {
    expect(true).toEqual(true)
  })
  const age = 15
  let myLifeExpectancy
  const yearsRemainingMockData = {
    "0": 82.4,
    "10": 72.8,
    "80": 10.2
  }

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

  test("LE.yearsRemaining func should return 82.4 years for a newborn (0 age)", () => {
    const babyLifeExpectancy = new LifeExpectancy(0)
    expect(babyLifeExpectancy.yearsRemaining()).toEqual(yearsRemainingMockData["0"])
  })

  test("LE.yearsRemaining func should return 72.8 years for a 10 year old", () => {
    const babyLifeExpectancy = new LifeExpectancy(10)
    expect(babyLifeExpectancy.yearsRemaining()).toEqual(yearsRemainingMockData["10"])
  })

  test("LE.yearsRemaining func should return 10.2 years for an 80 year old", () => {
    const babyLifeExpectancy = new LifeExpectancy(80)
    expect(babyLifeExpectancy.yearsRemaining()).toEqual(yearsRemainingMockData["80"])
  })
})