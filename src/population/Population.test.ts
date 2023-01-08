import { Citizen, Outsider } from "./Types"
import { Population } from "./Population"

const ctz: Citizen[] = [
  new Citizen({ name: "Gog", profession: "hunter", age: 22 }),
  new Citizen({ name: "Lug", profession: "none", age: 13 }),
]

const ots: Outsider[] = [new Outsider({ from: "Unknown Realm" })]

describe("Population", () => {
  let ppl: Population

  beforeEach(() => {
    ppl = new Population(ctz, ots)
  })

  it("should give current number of people in village", () => {
    const got = ppl.currentPeople()
    expect(got).toBe(3)
  })

  it("should give current number of citizens", () => {
    const got = ppl.currentCitizens()
    expect(got).toBe(2)
  })

  it("should give current number of outsiders", () => {
    const got = ppl.currentOutsiders()
    expect(got).toBe(1)
  })

  it("should check in and check out persons", () => {
    const baby = new Citizen({ name: "Lur", profession: "none", age: 0 })
    const trader = new Outsider({ from: "Blue Honey" })

    ppl.checkIn(baby)
    ppl.checkIn(trader)
    expect(ppl.currentPeople()).toBe(ctz.length + ots.length + 2)

    ppl.checkOut(trader)
    expect(ppl.currentPeople()).toBe(ctz.length + ots.length + 1)
  })
})
